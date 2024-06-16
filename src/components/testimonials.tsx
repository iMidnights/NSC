"use client"

import { motion } from "framer-motion"

const featuredTestimonial = {
    body: 'NSC Solutions has been an invaluable partner in the growth of my home healthcare business. Their expertise in regulatory compliance and quality assurance has helped me navigate the complexities of the healthcare industry with ease.',
    author: {
      name: 'Yusuf Ali',
    },
  }
  const testimonials = [
    [
      [
        {
          body: 'I am so grateful for the support and guidance provided by NSC Solutions. Their team is knowledgeable, professional, and truly cares about the success of their clients.',
          author: {
            name: 'Mathew M.',
          },
        },
        // More testimonials...
      ],
    ],
    [
      [
        {
          body: 'I highly recommend NSC Solutions to anyone looking to start or grow their home healthcare business. Their services are top-notch and their team is dedicated to helping their clients succeed.',
          author: {
            name: 'Sumaya Yusuf',
          },
        },
        // More testimonials...
      ],
    ],
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Example() {
    return (
      <div className="relative isolate bg-white pb-32 pt-24 sm:pt-32">
        <div
          className="absolute inset-x-0 top-1/2 -z-10 -translate-y-1/2 transform-gpu overflow-hidden opacity-30 blur-3xl"
          aria-hidden="true"
        >
          <div
            className="ml-[max(50%,38rem)] aspect-[1313/771] w-[82.0625rem] bg-gradient-to-tr from-primary-400 to-primary-300"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-primary-600">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What Our Clients Say
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="rounded-2xl bg-white shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 sm:p-12 sm:text-xl sm:leading-8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                <div className="flex-auto">
                  <div className="font-semibold">{featuredTestimonial.author.name}</div>
                </div>
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8'
                    )}
                  >
                    {column.map((testimonial, index) => (
                      <motion.div initial={{ opacity: 0, y: "-10%" }} whileInView={{ opacity: 1, y: "0%" }} transition={{ duration: 1, ease: "easeOut", delay: index * .2 }} viewport={{ once: true }}>
                        <figure
                          key={index}
                          className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-900/5"
                        >
                          <blockquote className="text-gray-900">
                            <p>{`“${testimonial.body}”`}</p>
                          </blockquote>
                          <figcaption className="mt-6 flex items-center gap-x-4">
                            <div>
                              <div className="font-semibold">{testimonial.author.name}</div>
                            </div>
                          </figcaption>
                        </figure>
                      </motion.div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  