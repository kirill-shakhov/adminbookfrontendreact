import {AppHeader} from "@/shared/components/AppHeader";
import {AppFooter} from "@/shared/components/AppFooter";
import {Link, Outlet} from "react-router-dom";

const SettingsLayoutView = () => {
  return (
    <div className="flex flex-col h-screen">
      <AppHeader/>

      <div className="flex-grow">
        <div className="mx-auto max-w-7xl flex gap-5 p-6 lg:px-8">

          <nav className="hidden py-4 md:w-1/3 lg:w-1/4 md:block">
            <div className="border-r border-gray-200">
              <h1 className="pl-3 mb-4 text-2xl font-semibold">Settings</h1>

              <ul className="relative py-2 text-sm text-gray-700 dark:text-gray-200">
                <li className="hover:bg-gray-100 dark:hover:bg-gray-100">
                  <Link
                    to="profile"
                    className="block text px-4 py-2-sm font-semibold leading-6 text-gray-900">
                    Profile
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Outlet/>
        </div>
      </div>
      <AppFooter/>
    </div>
  )
}

export default SettingsLayoutView;