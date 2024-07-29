export interface Book {
  _id: string;
  title: string;
  image: string;
  book: string;
  genre: {
    name: string;
  };
  author: {
    name: string;
  };
}