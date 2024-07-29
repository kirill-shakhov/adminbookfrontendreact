const BookDetailsViewSkeleton = () => {

  return (
    <div className="overflow-hidden bg-white w-full py-11 animate-pulse">
      <div
        className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 ">
            <div className="overflow-hidden">
              <div className="relative mb-6 lg:mb-10 lg:h-2/4">
                <div className="object-cover bg-gray-300 w-full h-72"></div>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 ">
            <div className="lg:pl-20">
              <div className="mb-8 ">
                <div className="flex justify-between">
                  <div className="text-lg font-medium text-rose-500 dark:text-rose-200 w-16">
                    <div className="h-3 bg-gray-300 rounded"></div>
                  </div>
                </div>
                <div className="max-w-xl mt-2 mb-6 text-2xl font-bold md:text-4xl">
                  <div className="h-3 bg-gray-300 rounded"></div>
                </div>
                <div className="max-w-md text-gray-700 dark:text-gray-400">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-3 bg-gray-300 rounded col-span-1"></div>
                        <div className="h-3 bg-gray-300 rounded col-span-2"></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="max-w-md text-gray-700 dark:text-gray-400">
                  <div className="flex-1 space-y-6 py-1">
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-3 bg-gray-300 rounded col-span-1"></div>
                        <div className="h-3 bg-gray-300 rounded col-span-2"></div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className="flex flex-wrap items-center -mx-4">
                <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-4 order-1 lg:order-1">
                  <div className="bg-gray-300 h-9 rounded-md"></div>
                </div>

                <div className="w-full px-4 mb-4 lg:mb-4 lg:w-1/2 order-3 lg:order-2">
                  <div className="bg-gray-300 h-9 rounded-md"></div>
                </div>

                <div className="w-full px-4 mb-4 lg:mb-4 order-2 lg:order-3">
                  <div className="bg-gray-300 h-9 rounded-md"></div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookDetailsViewSkeleton;