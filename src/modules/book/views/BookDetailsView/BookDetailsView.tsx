import {useGetBookQuery} from "@/services/api/controllers/bookApi";
import {useParams} from "react-router-dom";
import useBookDetailsView from "@modules/book/views/BookDetailsView/useBookDetailsView.tsx";
import {useState} from "react";

import {ExclamationTriangleIcon} from "@heroicons/react/16/solid";
import {DialogTitle} from "@headlessui/react";

import {UiButton} from "@/shared/components/UiButton";
import {UiModal} from "@/shared/components/UiModal";
import {BookDetailsViewSkeleton} from "@modules/book/views/BookDetailsView/BookDetailsViewSkeleton";


const BookDetailsView = () => {
  const {bookId} = useParams();
  const {data, isLoading} = useGetBookQuery(bookId || '');
  const {downloadBook, removeBook} = useBookDetailsView(data);

  const [isOpen, setIsOpen] = useState(false);

  if (bookId === '') {
    return (
      <div>Книга не найдена</div>
    )
  }

  if (isLoading) {
    return (
      <BookDetailsViewSkeleton/>
    )
  }

  return (
    <div className=" overflow-auto bg-white w-full py-11">

      <div
        className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 ">
            <div className="overflow-hidden">
              <div className="relative mb-6 lg:mb-10 lg:h-2/4 ">
                <img src={data?.image} alt="image"
                     className="object-cover w-full lg:h-full"/>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 ">
            <div className="lg:pl-20">
              <div className="mb-8 ">
                <div className="flex justify-between">
                  <span className="text-lg font-medium text-rose-500 dark:text-rose-200">New</span>

                </div>
                <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold md:text-4xl"> {data?.title} </h2>
                <p className="max-w-md text-gray-700 dark:text-gray-400">
                  Genre: {data?.genre.name}
                </p>

                <p className="max-w-md text-gray-700 dark:text-gray-400">
                  Author: {data?.author.name}
                </p>

              </div>
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-4 order-1 lg:order-1">
                  <UiButton
                    block
                    type="button"
                    onClick={downloadBook}
                  >
                    Download
                  </UiButton>
                </div>

                <div className="w-full px-4 mb-4 lg:mb-4 lg:w-1/2 order-3 lg:order-2">
                  <UiButton
                    block
                    theme={'danger'}
                    type="button"
                    onClick={() => setIsOpen(true)}
                  >
                    Delete
                  </UiButton>
                </div>

                <div className="w-full px-4 mb-4 lg:mb-4 order-2 lg:order-3">
                  <UiButton
                    href={data?.book}
                    target="_blank"
                    block
                    type="button"
                  >
                    Read
                  </UiButton>
                </div>

              </div>
            </div>
          </div>
        </div>


        <UiModal isOpen={isOpen} setIsOpen={setIsOpen}>
          <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div
                className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                <ExclamationTriangleIcon className="h-6 w-6 text-red-600" aria-hidden="true"/>
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900">Delete a book
                </DialogTitle>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">Are you sure you want to delete your book? All of your
                    data will be permanently removed. This action cannot be undone.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
            <button type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                    onClick={removeBook}
            >Delete
            </button>
            <button type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                    onClick={() => setIsOpen(false)}
            >Cancel
            </button>
          </div>
        </UiModal>
      </div>
    </div>
  )
}

export default BookDetailsView;