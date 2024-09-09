'use client'

export const dynamic = 'force-static'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-32 min-h-dvh">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <motion.div
              initial={{ opacity: 0, y: '-10%' }}
              whileInView={{ opacity: 1, y: '0%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10"
            >
              <img
                className="absolute inset-0 h-full w-full object-cover brightness-125 saturate-0"
                src="https://images.unsplash.com/photo-1630569267625-157f8f9d1a7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80"
                alt="People Jumping"
              />
              <div className="absolute inset-0 bg-primary-900/75 mix-blend-multiply" />
              {/* <div
                  className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl"
                  aria-hidden="true"
                >
                  <div
                    className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40"
                    style={{
                      clipPath:
                        'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                    }}
                  />
                </div> */}
              <figure className="relative isolate">
                <img
                  src="/NSC-Logo.png"
                  alt="Logo"
                  className="h-12 w-auto"
                  style={{
                    filter: 'drop-shadow(2px 4px 6px black)',
                  }}
                />
                <blockquote className="mt-6 text-xl font-normal leading-8 text-white">
                  <p>
                    North Star Consulting Solutions is a dedicated consulting
                    firm focused on providing top-notch services to empower
                    small business home healthcare providers. 245D Consulting
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm leading-6 text-gray-300">
                  Unlock success in home healthcare
                </figcaption>
              </figure>
            </motion.div>
          </div>
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-primary-600">
                Company values
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                On a mission to empower remote teams
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  At North Star Consulting Solutions, we specialize in providing
                  expert compliance consulting for 245D providers. As a
                  family-owned business with over five years of experience, we
                  understand the challenges faced by providers in navigating
                  245D regulations. Our mission is to offer personalized,
                  reliable, and timely support to ensure your business meets all
                  regulatory requirements while delivering quality care. We take
                  pride in empowering healthcare entrepreneurs to thrive and
                  grow in their industry.
                </p>
                {/* <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                    auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                    hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p>
                  <p className="mt-8">
                    Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis odio id et. Id blandit molestie
                    auctor fermentum dignissim. Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate et ultrices
                    hac adipiscing egestas. Iaculis convallis ac tempor et ut. Ac lorem vel integer orci.
                  </p> */}
              </div>
            </div>
            {/* <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                {stats.map((stat, statIdx) => (
                  <div key={statIdx}>
                    <dt className="text-sm font-semibold leading-6 text-gray-600">{stat.label}</dt>
                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">{stat.value}</dd>
                  </div>
                ))}
              </dl> */}
            <div className="mt-10 flex">
              <a
                href="/about"
                className="text-base font-semibold leading-7 text-primary-600"
              >
                Learn more about our company{' '}
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
