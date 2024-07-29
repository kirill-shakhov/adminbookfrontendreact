import {AppHeader} from "@/shared/components/AppHeader";
import {AppFooter} from "@/shared/components/AppFooter";
import {Link, Outlet} from "react-router-dom";

const BooksLayoutView = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader/>

      <main className="flex-grow">
        <div className="mx-auto max-w-7xl flex gap-5 p-6 lg:px-8">

          <nav className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
            <div className="border-r border-gray-200">
              <h1 className="pl-3 mb-4 text-2xl font-semibold">Book</h1>

              <ul className="relative py-2 text-sm text-gray-700 dark:text-gray-200">
                <li
                  className="py-2"
                >
                  <Link
                    to={"/books/library"}
                    className="block text px-4 py-2-sm font-semibold leading-6 text-gray-900">
                    Library
                  </Link>
                </li>

                <li
                  className="py-2"
                >
                  <Link
                    to={"/books/upload"}
                    className="block text px-4 py-2-sm font-semibold leading-6 text-gray-900">
                    Upload
                  </Link>

                </li>
              </ul>
            </div>
          </nav>

          <Outlet/>
        </div>
      </main>
      <AppFooter/>
    </div>
  )
}

export default BooksLayoutView;