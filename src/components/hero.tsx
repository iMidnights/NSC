'use client'

import { useState } from 'react'

import { motion } from 'framer-motion'

export default function Example() {
  return (
    <main className="bg-red-50">
      <div className="relative isolate">
        <svg
          className="absolute inset-x-0 top-0 -z-10 h-[48rem] w-full stroke-red-400 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M.5 200V.5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
          />
        </svg>
        {/* <div
                    className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
                    aria-hidden="true"
                >
                    <div
                        className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#ae4d5b] to-[#d199a1] opacity-30"
                        style={{
                            clipPath:
                                'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                        }}
                    />
                </div> */}
        <div className="overflow-hidden">
          <div className="mx-auto max-w-7xl px-6 pb-32 pt-12 sm:pt-20 lg:px-8 lg:pt-12">
            <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
              <div className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl font-domine">
                  Comprehensive Consulting for Quality Care
                </h1>
                <p className="mt-6 text-xl leading-8 text-gray-600 sm:max-w-md lg:max-w-none font-domine ">
                  When it comes to 245D consulting, North Star Consulting
                  Solutions is your go-to source for expert guidance and
                  support. We take pride in being a family-owned business with
                  over five years of experience in the industry, and we are
                  committed to providing timely and reliable services to meet
                  your needs.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <a
                    href="https://calendar.app.google/2hoR1pWAxXxL1oS36"
                    target="_blank"
                    rel='noopener'
                    className="rounded-md bg-primary-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                  >
                    Book Consultation
                  </a>
                  <a
                    href="/contact"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Contact <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
              <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    viewport={{ once: true }}
                    className="relative tint"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=528&q=80"
                      alt="Tall buildings"
                      className="saturate-50 aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </motion.div>
                </div>
                <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                    className="relative tint"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1562564055-71e051d33c19?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&h=528&q=80"
                      alt="Document writing"
                      className="saturate-50 aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    viewport={{ once: true }}
                    className="relative tint"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                      alt="Working together"
                      className="saturate-50 aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </motion.div>
                </div>
                <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0 }}
                    viewport={{ once: true }}
                    className="relative tint"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                      alt="Man on tablet"
                      className="saturate-50 aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                    className="relative tint"
                  >
                    <img
                      src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                      alt="Two people working together"
                      className="saturate-50 aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
