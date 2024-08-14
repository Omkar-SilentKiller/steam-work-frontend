import React, { useState } from 'react';

function Desk_nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
    <div className='text-base text-fff gap-6 hidden sm:flex  sm:text-xl sm:display'>
        <a href='#home'>Home</a>
        <a href='#about-us'>About Us</a>
        <a href='#services'>Services</a>
        <a href='#contact-us'>Contact Us</a>
    </div>


    <div className="relative">
            {/* Hamburger Icon */}
            <div className='text-base text-fff gap-6  flex sm:text-xl sm:hidden'>
                <i className="fa-solid fa-bars text-xl" onClick={() => setMenuOpen(!menuOpen)}></i>
            </div>

            {/* Side Menu */}
            <div className={`fixed top-0 left-0 w-64 h-full  bg-[#1A1620] text-white transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
                <button className="absolute top-4 right-4 text-2xl" onClick={() => setMenuOpen(false)}>×</button>
                <nav className="flex flex-col p-6 gap-4">
                    <a href="#home" className="text-lg"  onClick={() => setMenuOpen(false)}>Home</a>
                    <a href="#about-us" className="text-lg"  onClick={() => setMenuOpen(false)}>About Us</a>
                    <a href="#services" className="text-lg"  onClick={() => setMenuOpen(false)}>Services</a>
                    <a href="#contact-us" className="text-lg"  onClick={() => setMenuOpen(false)}>Contact Us</a>
                </nav>
            </div>
        </div>

    {/* <div className='text-base text-fff gap-6 display flex  sm:text-xl sm:hidden'>
    <i className="fa-solid fa-bars text-xl"></i>
        {/* <a>Home</a>
        <a>About Us</a>
        <a>Services</a>
        <a>Contact Us</a> 
    </div> */
   }
  </>
  )
}

export default Desk_nav
