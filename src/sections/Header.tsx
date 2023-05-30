import * as React from 'react'
import { useState } from 'react'
import { logo } from '../assets'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  const mobileMenu = (
    <section
      id="mobile-menu"
      className={`${isMobileMenuOpen ? 'flex' : 'hidden'}  
       absolute top-[68px] bg-dark-violet text-white w-[90%] flex-col justify-center right-5 rounded-xl scale-up-tr`}
      onClick={() => setIsMobileMenuOpen(false)}
    >
      <nav
        className="flex flex-col font-bold text-lg items-center p-9"
        aria-label="mobile"
      >
        <a
          href="#features"
          className="w-full text-center py-6 hover:opacity-90"
        >
          Features
        </a>
        <a href="#pricing" className="w-full text-center py-6 hover:opacity-90">
          Pricing
        </a>
        <a
          href="#resources"
          className="w-full text-center py-6 hover:opacity-90"
        >
          Resources
        </a>
        <hr className="h-[1px] bg-grayish-violet opacity-20 w-full" />
        <a href="#contact" className="w-full text-center py-6 hover:opacity-90">
          Login
        </a>
        <a
          href="#footer"
          className="w-full lg-rounded-btn text-center py-4  hover:opacity-90"
        >
          Sign Up
        </a>
      </nav>
    </section>
  )

  return (
    <header className="sticky top-0 z-10  bg-white">
      <section className="sm:w-[85vw] w-[95vw] mx-auto p-4 flex  md:justify-start justify-between items-center mb-[4rem]">
        <a href="#hero" className="mr-9">
          <img src={logo} alt="logo" />
        </a>
        <div>
          <button
            type="button"
            id="hamburger-button"
            className="text-3xl sm:hidden focus:outline-none cursor-pointer relative w-8 h-8 text-grayish-violet"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            &#9776;
          </button>
        </div>
        <div className="hidden sm:flex justify-between md:w-full  text-grayish-violet items-center">
          <nav className="md:space-x-8 space-x-5" aria-label="main">
            <a
              href="#features"
              className="hover:text-very-dark-blue transtion font-medium"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="hover:text-very-dark-blue transition font-medium"
            >
              Pricing
            </a>
            <a
              href="#resources"
              className="hover:text-very-dark-blue transition font-medium"
            >
              Resources
            </a>
          </nav>
          <div className="ml-5 md:ml-0 space-x-5 md:space-x-8">
            <a
              href="#testimonials"
              className="hover:text-very-dark-blue transition font-medium"
            >
              Login
            </a>
            <a
              href="#contact"
              className="focus:bg-cyan/75 bg-cyan px-4 p-2 text-white transition  font-medium rounded-3xl"
            >
              Sign Up
            </a>
          </div>
        </div>
      </section>
      {isMobileMenuOpen ? mobileMenu : ''}
    </header>
  )
}

export default Header
