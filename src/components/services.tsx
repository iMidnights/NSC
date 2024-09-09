'use client'



import { motion } from 'framer-motion'

import { services } from '@/config/config'

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <section
      id="services"
      className="bg-white pb-24 sm:pb-32 border-t border-primary-100"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="flex justify-center items-center gap-2">
            <img
              src="/NSC-Logo.png"
              alt="NSC Logo"
              className="h-8 w-auto mt-2"
            />
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our services
            </p>
          </div>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            North Star Consulting Solutions offers a wide range of services to
            support your home healthcare business. From regulatory compliance to
            quality assurance, we have you covered. Our services include:
          </p>
        </div>
        {/* <div
          className="mx-auto mt-16 flex gap-6 sm:mt-20 lg:mx-0 lg:gap-8 justify-center"
          style={{
            flexFlow: 'wrap',
          }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: '-10%' }}
              whileInView={{ opacity: 1, y: '0%' }}
              transition={{ duration: 1, ease: 'easeOut', delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-1 gap-x-4 rounded-xl max-w-60 bg-white/5 p-6 ring-1 ring-inset ring-white/10 outline outline-2 outline-primary-400 bg-primary-50 flex-col items-center gap-y-10"
            >
              <card.icon
                className="h-24 w-auto flex-none text-primary-900"
                aria-hidden="true"
              />
              <div className="text-center text-base leading-7">
                <span className="font-medium text-black text-lg text-center">
                  {card.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>     */}
        <div className="divide-y mt-16 divide-gray-200 overflow-hidden rounded-lg bg-gray-200 shadow sm:grid sm:grid-cols-2 sm:gap-px sm:divide-y-0">
      {services.map((action, actionIdx) => (
        <div
          key={action.title}
          className={classNames(
            actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
            actionIdx === services.length - 2 ? 'sm:rounded-bl-lg' : '',
            actionIdx === services.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
            'group relative bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500',
          )}
        >
          <div>
            <span
              className={classNames(
                action.iconBackground,
                action.iconForeground,
                'inline-flex rounded-lg p-3 ring-4 ring-white',
              )}
            >
              <action.icon aria-hidden="true" className="h-6 w-6" />
            </span>
          </div>
          <div className="mt-8">
            <h3 className="text-base font-semibold leading-6 text-gray-900">
              <a href={action.href} className="focus:outline-none">
                {/* Extend touch target to entire panel */}
                <span aria-hidden="true" className="absolute inset-0" />
                {action.title}
              </a>
            </h3>
            <p className="mt-2 text-md text-gray-500">
              {action.description.split(' ').slice(0, 10).join(' ')}...
            </p>
          </div>
          <span
            aria-hidden="true"
            className="pointer-events-none absolute right-6 top-6 text-gray-300 group-hover:text-gray-400"
          >
            <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
              <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
            </svg>
          </span>
        </div>
      ))}
    </div>
      </div>
      {/* Learn more button with arrow */}
      <div className="mt-16 flex justify-center">
        <a
          href="/services"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
        >
          Learn more →
        </a>
      </div>
      {/* <div className="mt-24">
            <h2 className="sr-only">Why you should buy from us</h2>
            <div className="flex overflow-x-auto">
                <div className="mx-auto flex space-x-12 whitespace-nowrap px-4 py-3 sm:px-6 lg:space-x-24 lg:px-8">
                {incentives.map((incentive) => (
                    <div key={incentive.name} className="flex items-center text-sm font-medium text-primary-600">
                    <incentive.icon className="mr-2 h-6 w-6 flex-none" aria-hidden="true" />
                    <p>{incentive.name}</p>
                    </div>
                ))}
                </div>
            </div>
        </div> */}
    </section>
  )
}
