import { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import { SiCoffeescript } from "react-icons/si";

import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";


const NavLayout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleNav = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeNav = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <nav className='bg-red-400 top-0 sticky p-4'>
        <div className='container mx-auto flex justify-between items-center'>
          <div className='flex items-center text-4xl font-bold'>
            <SiCoffeescript className='size-12'/>
            <p className='ml-4'>YY CoffeeShop</p>
          </div>
          <div className='md:hidden'>
            <button onClick={toggleNav}>
              {!isMenuOpen ? <RxHamburgerMenu /> : <IoClose />}
            </button>
          </div>
          <div className='hidden md:flex'>
            <ul className='flex space-x-4'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='about'>About</Link></li>
              <li><Link to='contact'>contacts</Link></li>
              <li><Link to='coffee'>Coffee</Link></li>
            </ul>
          </div>
          
        </div>
        {
          isMenuOpen ? (
            <>
              <div className='md:hidden flex-col'>
                <hr className='my-4'></hr>
                <div className=''>
                  <div className=''>
                    <ul className='flex items-center flex-col'>
                      <li><Link to='/' onClick={closeNav}>home</Link></li>
                      <li><Link to='about' onClick={closeNav}>about</Link></li>
                      <li><Link to='contact' onClick={closeNav}>contacts</Link></li>
                      <li><Link to='coffee' onClick={closeNav}>coffee</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </>
          ) : null
        }
      </nav>
      <Outlet />
    </>
  )
}

export default NavLayout
