'use client'

import { useState } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel
} from '@headlessui/react'
import {
  ArrowTopRightOnSquareIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar({ current = 'Home' }: { current?: string }) {
  const [open, setOpen] = useState(false)
  const pages = [
    {
      name: 'Home',
      href: '/',
    },
    {
      name: 'About',
      href: '/about',
    },
    {
      name: 'Services',
      href: '/services',
    },
    {
      name: 'Contact',
      href: '/contact',
    },
    {
      name: (
        <div className="flex gap-x-2  items-center">
          Book Online
          <ArrowTopRightOnSquareIcon className="h-4 w-4" aria-hidden="true" />
        </div>
      ),
      href: 'https://calendar.app.google/2hoR1pWAxXxL1oS36',
      target: '_blank',
    },
  ]
  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <a href="/" className="flex flex-shrink-0 items-center">
                  <img
                    className="h-8 w-auto"
                    src="https://static.wixstatic.com/media/6fc55c_216787d5f068451aa96649ddb589617c~mv2.png/v1/fill/w_143,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FullLogo_edited_edited.png"
                    alt="Your Company"
                  />
                  <span className="text-black">
                    <span className="sr-only">Your Company</span>
                    North Star Consulting Solutions
                  </span>
                </a>
                <div className="hidden lg:ml-12 lg:flex lg:space-x-8">
                  {/* Current: "border-primary-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
                  {pages.map((page, index) => (
                    <a
                      key={index}
                      href={page.href}
                      target={page?.target || '_self'}
                      className={classNames(
                        current === page.name
                          ? 'border-primary-500 text-gray-900'
                          : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                        'inline-flex items-center border-b-2 px-1 pt-1 text-sm font-medium',
                      )}
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="hidden lg:ml-4 lg:flex lg:gap-4 lg:items-center text-gray-600">
                <div>
                  <a
                    className="text-sm font-medium text-gray-500 mr-2"
                    href="mailto:nsconsultingsolutionsllc@gmail.com"
                  >
                    nsconsultingsolutionsllc@gmail.com
                  </a>
                  <span className="text-gray-300">●</span>
                  <a
                    className="text-base font-medium text-gray-600 ml-2 font-kanit"
                    href="tel:507-200-8022"
                  >
                    507-200-8022
                  </a>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="lg:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {/* Current: "bg-primary-50 border-primary-500 text-primary-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              {pages.map((page, index) => (
                <DisclosureButton
                  key={index}
                  as="a"
                  href={page.href}
                  target={page?.target || '_self'}
                  className={classNames(
                    current === page.name
                      ? 'bg-primary-50 border-primary-500 text-primary-700'
                      : 'border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800',
                    'block border-l-4 py-2 pl-3 pr-4 text-base font-medium',
                  )}
                >
                  {page.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-200 pb-3 pt-4">
              <div className="flex items-center">
                <div className="ml-3 flex flex-col">
                  <a
                    className="text-base font-medium text-gray-800"
                    href="tel:507-200-8022"
                  >
                    507-200-8022
                  </a>
                  <a
                    className="text-sm font-medium text-gray-500"
                    href="mailto:nsconsultingsolutionsllc@gmail.com"
                  >
                    nsconsultingsolutionsllc@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
