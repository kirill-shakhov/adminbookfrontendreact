import {Popover, PopoverButton, PopoverPanel, Transition} from '@headlessui/react';
import {Link} from 'react-router-dom';

import {UiProgressCircular} from "@/shared/components/UiProgressCircular";

import {UiAvatar} from "@/shared/components/UiAvatar";
import useHeaderProfile from "@/shared/components/AppHeader/HeaderProfile/HeaderProfile.hook.tsx";

import useAuth from "@/shared/hooks/useAuth/useAuth.tsx";
import {FC} from "react";

const HeaderProfile:FC = () => {
  const {user, pages} = useHeaderProfile()
  const {logoutProfile} = useAuth()

  if (!user) {
    return <UiProgressCircular/>;
  }

  return (
    <Popover className="relative">
      <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 outline-none">
        <UiAvatar image={user.image} aria-hidden="true"/>
      </PopoverButton>

      <Transition
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <PopoverPanel
          as="div"
          className="absolute right-0 top-full z-10 divide-y divide-gray-100 mt-3 md:w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5"
        >
          <div className="px-4 py-3 text-sm text-gray-900">
            <div>{user.firstName} {user.lastName}</div>
            <div className="font-medium truncate">{user.email}</div>
          </div>
          <ul className="relative py-2 text-sm text-gray-700 dark:text-gray-200">
            {pages.map((item) => (
              <li key={item.name} className="hover:bg-gray-100 dark:hover:bg-gray-100">
                <Link to={item.link} className="block text px-4 py-2-sm font-semibold leading-6 text-gray-900">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="px-4 py-3">
            <button onClick={logoutProfile} className="block py-2 text-sm font-semibold leading-6 text-gray-900">
              Sign out
            </button>
          </div>
        </PopoverPanel>

      </Transition>

    </Popover>
  );
};

export default HeaderProfile;
