export interface BookData{
    id: number,
    title: string,
    authors: string[],
    shelf?: string,
    imageLinks: {smallThumbnail: string, thumbnail?: string}
}