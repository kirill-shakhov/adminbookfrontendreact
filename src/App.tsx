import './App.scss'
import 'swiper/css';

import {AppFooter} from "@/shared/components/AppFooter";
import {AppHeader} from "@/shared/components/AppHeader";
import BookCard from "@/shared/components/BookCard/BookCard.tsx";
import {useGetUserBooksQuery} from "@/services/api/controllers/bookApi";
import {useEffect} from "react";
import {useAppDispatch} from "@/store/hooks.ts";
import {setBooks} from "@modules/book/store";

import {Swiper, SwiperSlide} from "swiper/react";
import {Autoplay, FreeMode} from "swiper/modules";


const App = () => {
  const {data, isLoading} = useGetUserBooksQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) {
      dispatch(setBooks(data));
    }
  }, [data, dispatch])

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">

      <AppHeader/>
      <div className='flex-grow'>
        <div className="mx-auto w-full max-w-7xl flex gap-5 p-6 lg:px-8">

          {data ? (
            <Swiper
              className={'w-full'}
              freeMode={true}
              spaceBetween={10}
              modules={[FreeMode, Autoplay]}
              autoplay={{
                delay: 15000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                576: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3
                },
              }}
            >
              {data.books.map((book) => (
                <SwiperSlide
                  key={book._id}
                  style={{height: 'auto'}}
                  className="pb-5"
                >
                  <BookCard
                    _id={book._id}
                    title={book.title}
                    image={book.image}
                    book={book.book}
                    genre={book.genre}
                    author={book.author}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : 'empty'}


        </div>
      </div>
      <AppFooter/>
    </div>
  )
};

export default App;
