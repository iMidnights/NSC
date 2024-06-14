"use client"

import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'

const cards = [
    {
      name: 'Designated Manager for 245D license',
      description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
      icon: PhoneIcon,
    },
    {
      name: '245D Compliance Support',
      description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
      icon: LifebuoyIcon,
    },
    {
      name: 'Program review, revision, and development',
      description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
      icon: NewspaperIcon,
    },
    {
      name: 'Meetings for Basic and Intensive Services',
      description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
      icon: NewspaperIcon,
    },
    {
      name: 'Organizational Systems and Quality assurance',
      description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
      icon: NewspaperIcon,
    },
  ]

  import { CalendarIcon, CheckBadgeIcon, TruckIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

const incentives = [
  { name: 'Free, contactless delivery', icon: TruckIcon },
  { name: 'No questions asked returns', icon: CheckBadgeIcon },
  { name: '2-year warranty', icon: CalendarIcon },
]

  export default function Example() {
    return (
      <section id='services' className="bg-white pb-24 sm:pb-32 border-t border-primary-100">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-24">
          <div className="mx-auto max-w-2xl lg:text-center">
            <div className="flex justify-center items-center gap-2">
                <img src="/NSC-Logo.png" alt="NSC Logo" className='h-8 w-auto mt-2' />
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Our services
            </p>
            </div>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                    North Star Consulting Solutions offers a wide range of services to support your home healthcare business. From regulatory compliance to quality assurance, we have you covered. Our services include:
                </p>
          </div>
          <div className="mx-auto mt-16 flex gap-6 sm:mt-20 lg:mx-0 lg:gap-8 justify-center" style={{
              flexFlow: "wrap"
            }}>
          {cards.map((card, index) => (
            <motion.div initial={{ opacity: 0, y: "-10%" }} whileInView={{ opacity: 1, y: "0%" }} transition={{ duration: 1, ease: "easeOut", delay: index * .2 }} viewport={{ once: true }} key={card.name} className="flex flex-1 gap-x-4 rounded-xl max-w-60 bg-white/5 p-6 ring-1 ring-inset ring-white/10 outline outline-2 outline-primary-400 bg-primary-50 flex-col items-center gap-y-10">
              <card.icon className="h-24 w-auto flex-none text-primary-900" aria-hidden="true" />
              <div className="text-base leading-7">
                <h5 className="font-medium text-black text-lg text-center">{card.name}</h5>
              </div>
            </motion.div>
          ))}
        </div>
        
        </div>
        {/* Learn more button with arrow */}
        <div className="mt-16 flex justify-center">
          <a
            href="/about"
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
  