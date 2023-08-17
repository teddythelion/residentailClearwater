import Link from 'next/link';

const HomeFirstSection = () => (
  <section className="mt-32 xl:mt-64 2xl:mt-72 2xl:pb-20 text-white">
    <div className="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
      <video
        className="video min-w-full min-h-full absolute object-cover"
        autoPlay
        muted
        loop>
        <source src="/clearwater.mp4" type="video/mp4"/>
      </video>
    </div>
   <div className="relative h-auto text-center">
      <div className="mx-auto mb-16 place-self-center lg:col-span-7">
        <div className="text-green-800 ml-16 xsm:mr-10 xsm:ml-1 sm:mr-5 max-w-5xl mb-4 text-7xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-grey-200 underline">Supporting the <span className="text-green-400 underline">Community</span></div>
        <p className="max-w-2xl xsm:mr-2 2xl:ml-60 xl:ml-52 md:ml-40 lg:ml-48 mb-6 font-extrabold text-3xl text-grey-200 lg:mb-8 md:text-lg lg:text-5xl dark:text-white">Housing, Job Coaching, Life Management,  and Re-Entry Support</p>
        <Link href={'/about'}>
          <button  className="text-gray-300 inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center  border border-gray-300 rounded-lg bg-primary-700 hover:bg-gray-700 hover:bg-gray-300 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          Learn More
              <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
        </Link>
        <Link href={'#contact_form'}>
         <button className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-gray-300 border border-gray-300 rounded-lg hover:bg-gray-700 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
            Contact Us
         </button>
        </Link>
      </div>
    </div>
  </section>
);

export default HomeFirstSection;
