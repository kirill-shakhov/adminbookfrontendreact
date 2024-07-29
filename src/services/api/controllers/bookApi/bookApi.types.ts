import { Book } from "@/modules/book/static/types";


export interface BooksResponse {
    books: Book[];
}

export interface UploadBookResponse {
    message: string,
    book: {
        title: string,
        image: string,
        book: string,
        genre: string,
        author: string,
        user: string,
        _id: string,
        __v: number
    }
}

export interface UploadBookErrorResponse {
    message: string;
}

export interface Genre {
    name: string;
}

export interface GenresResponse {
    genres: Genre[];
}

export interface Author {
    name: string;
}

export interface AuthorsResponse {
    authors: Author[];
}
