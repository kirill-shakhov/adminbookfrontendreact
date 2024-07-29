import {useState, useEffect, FC} from 'react';
import {Link, useLocation} from 'react-router-dom';

import {Dialog, DialogPanel, Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react';
import {Bars3Icon, XMarkIcon, ChevronDownIcon} from "@heroicons/react/16/solid";

import {Logo} from '@/shared/components/Logo';
import {HeaderProfile} from "@/shared/components/AppHeader/HeaderProfile";

import useAuth from "@/shared/hooks/useAuth/useAuth.tsx";

const AppHeader: FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const {logoutProfile} = useAuth()

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const childrenPages = [
    {name: 'Library', description: 'book library', href: 'library'},
    {name: 'Upload', description: 'upload a new book', href: 'uploadBook'},
  ];

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
          </button>
        </div>

        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5 hidden lg:block outline-none">
            <span className="sr-only">Your Company</span>
            <div style={{width: '60px'}}>
              <Logo theme={'dark'}/>
            </div>
          </Link>

          <div className="lg:hidden">
            <HeaderProfile/>
          </div>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            Main
          </Link>
          <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
            My books
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <HeaderProfile/>
        </div>
      </nav>

      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
        <div className="fixed inset-0 z-10"/>
        <DialogPanel
          className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 outline-none" style={{width: '60px'}}>
              <Logo theme={"dark"}/>
            </Link>

            <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700"
                    onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
            </button>
          </div>
          <div tabIndex={0} className="sr-only">Focusable element</div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Main
                </Link>

                <div className="-mx-3">
                  <Disclosure>
                    {({open}) => (
                      <>
                        <DisclosureButton
                          className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                          Book
                          <ChevronDownIcon className={`${open ? 'rotate-180' : ''} h-5 w-5 flex-none`}
                                           aria-hidden="true"/>
                        </DisclosureButton>
                        <DisclosurePanel className="mt-2 space-y-2">
                          {childrenPages.map(item => (
                            <Link key={item.name} to={item.href}>
                              <DisclosureButton as="span"
                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                {item.name}
                              </DisclosureButton>
                            </Link>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                </div>

                <Link
                  to="/profile"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Profile
                </Link>
              </div>

              <div className="py-3">
                <button
                  onClick={logoutProfile}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Sign out
                </button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default AppHeader;


