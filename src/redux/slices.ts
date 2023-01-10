import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as BooksAPI from "../BooksAPI";
import { BookData } from "../components/models/Data";

export const getAllBooks = createAsyncThunk("Get all the books", async () => {
  return await BooksAPI.getAll().then((res) => res);
});

export const shelfChange = createAsyncThunk(
  "Change book shelf",
  async (book: BookData) => {
    await BooksAPI.update(book, book.shelf).then(() => {});
    return book;
  }
);
export const bookSearch = createAsyncThunk(
  "Search for books",
  async (search: string) => {
    return search ? await BooksAPI.search(search).then((res) => res) : [];
  }
);

const bookSlice = createSlice({
  name: "book",
  initialState: {
    books: [],
    booksFromSearch: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllBooks.fulfilled, (state, action) => {
        state.books = action.payload;
      })
      .addCase(getAllBooks.rejected, (state) => {
        state.books = [];
      })
      .addCase(shelfChange.fulfilled, (state, action) => {
        if (state.booksFromSearch.length > 0) {
          let books: any = [...state.books];
          const bookIsExist = books.findIndex(
            (res: BookData) => res.id === action.payload.id
          );
          let searchBooks: any = state.booksFromSearch.map((res: BookData) => {
            if (res.id === action.payload.id)
              return { ...res, shelf: action.payload.shelf };
            return res;
          });
          bookIsExist
            ? books.splice(bookIsExist, 1, action.payload)
            : books.push(action.payload);
          state.booksFromSearch = searchBooks;
          state.books = books;
        } else {
          let books: any = state.books.map((res: BookData) => {
            if (res.id === action.payload.id)
              return { ...res, shelf: action.payload.shelf };
            return res;
          });
          state.books = books;
        }
      })
      .addCase(bookSearch.fulfilled, (state, action) => {
        state.booksFromSearch = action.payload.error ? [] : action.payload.map((searchBook: BookData) => {
          state.books.forEach((book: BookData) => {
            if (searchBook.id === book.id) searchBook.shelf = book.shelf;
          });
          return searchBook;
        });
      })
      .addCase(bookSearch.rejected, (state) => {
        console.log("rejexxted");
        state.booksFromSearch = [];
      });
  },
});

export default bookSlice;
