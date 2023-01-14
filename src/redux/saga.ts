import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import * as BooksAPI from "../BooksAPI";
import { SagaActions } from "./sagaActions";
import { changeShelf, getBooks, searcBook } from "./slices";

function* getBook(): Generator {
  try {
    const data = yield call(() => BooksAPI.getAll().then((res) => res));
    yield put(getBooks(data));
  } catch (error) {
    yield put({ type: "BOOK_FETCH_FAILED" });
  }
}
function* shelfChange({payload}: any): Generator{
    try {
        yield call(() => BooksAPI.update(payload, payload.shelf).then(() => {}));
        yield put(changeShelf(payload))
    } catch (error) {
        yield put({ type: "BOOK_FETCH_FAILED" });
    }
}
function* getBooksFromSearch({payload}: any): Generator {
    try {
       const data = yield payload ?  BooksAPI.search(payload).then((res) => res) : [];
       yield put(searcBook(data))
    } catch (error) {
      yield put({ type: "BOOK_FETCH_FAILED" });
    }
  }
function* saga() {
  yield takeEvery(SagaActions.FETCH_ALL_BOOKS, getBook);
  yield takeLatest(SagaActions.SHELF_CHANGE, shelfChange);
  yield takeLatest(SagaActions.BOOK_SEARCH, getBooksFromSearch);
}
export default saga;
