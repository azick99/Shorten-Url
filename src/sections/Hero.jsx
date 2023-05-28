import React from 'react'
import { illustrationWork } from '../assets'

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col-reverse sm:flex-row sm:pl-[6rem] p-0 mt-10 sm:mb-[4rem] mb-0 sm:items-start items-center scroll-mt-40  "
    >
      <article className="sm:w-1/2 w-full space-y-2 sm:pr-10 p-5 flex flex-col justify-end">
        <h1 className="md:text-5xl lg:text-6xl  text-4xl   font-bold !leading-[1.1] sm:text-start text-center">
          More than just shorten links
        </h1>
        <p className="text-grayish-violet !sm:pr-18 sm:px-0 px-14  sm:text-start text-center">
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <a
          href="#features"
          className="lg-rounded-btn !my-7 inline-block sm:self-start self-center"
        >
          Get Started
        </a>
      </article>
      <div className="sm:w-1/2 w-full float-right  overflow-x-hidden  ">
        <img src={illustrationWork} alt="hero" className="image " />
      </div>
    </section>
  )
}

export default Hero
