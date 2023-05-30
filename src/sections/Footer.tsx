import * as React from 'react'
import { ReactComponent as Facebook } from '../assets/icon-facebook.svg'
import { ReactComponent as Instagram } from '../assets/icon-instagram.svg'
import { ReactComponent as Twitter } from '../assets/icon-twitter.svg'
import { ReactComponent as Pintrest } from '../assets/icon-pinterest.svg'
import { logoWhite } from '../assets'

const Footer = () => {
  return (
    <footer id="resources">
      <div className=" flex flex-col items-center boost py-16 scroll-mt-40">
        <p className="font-bold sm:text-3xl text-2xl text-white">
          Boost your links today
        </p>
        <a
          href="#features"
          className="lg-rounded-btn !mt-6 inline-block font-bold"
        >
          Get Started
        </a>
      </div>
      <div className=' bg-very-dark-violet  text-white p-12 "'>
        <section className="w-[85vw] mx-auto">
          <nav
            className="w-full sm:grid flex gap-5 sm:grid-cols-5 flex-col  sm:items-start items-center  "
            aria-label="footer"
          >
            <a
              href="#hero"
              className=" sm:place-self-start place-content-center"
            >
              <img src={logoWhite} alt="logo" />
            </a>
            <div className="flex flex-col  sm:items-start items-center  text-grayish-violet space-y-1">
              <a
                href="#features"
                className="hover:text-cyan text-white font-bold transition !mb-2"
              >
                Features
              </a>
              <a href="#h" className="hover:text-cyan">
                Link Shortening
              </a>
              <a href="#h" className="hover:text-cyan">
                Branded Links
              </a>
              <a href="#h" className="hover:text-cyan">
                Analytics
              </a>
            </div>
            <div className=" flex flex-col  sm:items-start items-center  text-grayish-violet space-y-1">
              <a
                href="#pricing"
                className="hover:text-cyan text-white font-bold transition !mb-2"
              >
                Pricing
              </a>
              <a href="#h" className="hover:text-cyan">
                Blog
              </a>
              <a href="#h" className="hover:text-cyan">
                Developers
              </a>
              <a href="#h" className="hover:text-cyan">
                Support
              </a>
            </div>
            <div className=" flex flex-col sm:items-start items-center  text-grayish-violet space-y-1">
              <a
                href="#resources"
                className="hover:text-cyan text-white font-bold transition !mb-2"
              >
                Resources
              </a>
              <a href="#h" className="hover:text-cyan">
                About
              </a>
              <a href="#h" className="hover:text-cyan">
                Our Team
              </a>
              <a href="#h" className="hover:text-cyan">
                Careers
              </a>
              <a href="#h" className="hover:text-cyan">
                contact
              </a>
            </div>
            <div className=" sm:justify-self-end justify-self-center flex items-start gap-x-5 ">
              <Facebook />
              <Twitter />
              <Pintrest />
              <Instagram />
            </div>
          </nav>
        </section>
      </div>
    </footer>
  )
}

export default Footer
