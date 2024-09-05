export default function Example() {
  return (
    <section id="cta" className="relative bg-gray-900">
      <div className="relative h-80 overflow-hidden bg-primary-600 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2">
        <img
          className="h-full w-full object-cover hue-rotate-90"
          src="https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&blend=6366F1&sat=-100&blend-mode=multiply"
          alt="Team work"
        />
      </div>
      <div className="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32">
          <h2 className="text-base font-semibold leading-7 text-primary-400">
            Award winning support
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            We’re here to help
          </p>
          <p className="mt-6 text-base leading-7 text-gray-300">
            At NSC Solutions, we're here to help your home healthcare business
            navigate the intricacies of maintaining a 245D license. Our expert
            consultants offer personalized guidance to ensure your compliance
            and success in this competitive industry. From quality assurance and
            program development to state visit preparations, our range of
            services is tailored to meet your specific needs. Let us support you
            in achieving excellence and growth. Contact us today to find out how
            we can assist you.
          </p>
          <div className="mt-8">
            <a
              href="/contact"
              className="inline-flex rounded-md bg-white/10 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
