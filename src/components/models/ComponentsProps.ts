import { BookData } from "./Data";

export interface BookProps{
    book: BookData,
};
export interface ShelfProps {
    title: string,
    category: string,
    books: BookData[],
}
export interface SearchShelfProps{
    books: BookData[],
}