import {useGetUserBooksQuery} from "@/services/api/controllers/bookApi";
import {useAppDispatch, useAppSelector} from "@/store/hooks.ts";
import {useEffect} from "react";
import {setBooks} from "@modules/book/store";

import {BookCard} from "../../../../shared/components/BookCard";
import {BookCardSkeleton} from "@/shared/components/BookCard/BookCardSkeleton";

const BooksLibraryView = () => {
  const {data, isLoading} = useGetUserBooksQuery();
  const dispatch = useAppDispatch();
  const booksState = useAppSelector(state => state.book.books);


  useEffect(() => {
    if (data && booksState === null) {
      dispatch(setBooks(data));
    }
  }, [data, booksState, dispatch])

  if (isLoading) {
    return <div
      className="flex w-full flex-wrap gap-4 justify-center md:justify-start"
    >

      <BookCardSkeleton/>
      <BookCardSkeleton/>
      <BookCardSkeleton/>

      <BookCardSkeleton/>
      <BookCardSkeleton/>
      <BookCardSkeleton/>
    </div>;
  }

  return (
    <div className="books-library w-full py-1 md:w-2/3 lg:w-3/4">

      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {booksState && booksState.map((book) => (
          <BookCard
            className={"h-auto"}
            key={book._id}
            _id={book._id}
            title={book.title}
            image={book.image}
            book={book.book}
            genre={book.genre}
            author={book.author}
          />
        ))}
      </div>
    </div>
  )
}

export default BooksLibraryView;