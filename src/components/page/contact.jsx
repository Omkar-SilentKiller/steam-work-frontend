import React from 'react'
import { Link } from 'react-router-dom';

import City from '../../assets/city.mp4';

function Contact() {
  return (
    <div id='contact-us' className='w-screen h-[170vh] flex flex-col gap-2 mt-[10%] md:h-[130vh] sm:h-[130vh]'>
      
        {/* section 1 */}
        <div className='w-full h-[30%] bg-slate-700 relative'>
              <video src={City} muted autoPlay loop
              className='w-full h-full object-cover'
              ></video>
              <div className='absolute top-0 left-0 w-full h-full bg-[#1A1620] opacity-[80%] flex flex-col justify-center items-center'>
                 <p className='text-fff text-3xl sm:text-5xl'>Let’s have a Conversation</p>
                 <p className='text-customGold text-[18px] sm:text-2xl md:text-3xl'>So we can create creative project together</p>
              </div>
        </div>

        {/* section 2 */}
        <div className='w-full h-[64%] flex flex-col  sm:flex-row '>

                {/* section 2.1 */}
                <div className='w-full h-[40%] flex flex-col justify-center items-center gap-3 sm:w-[50%] sm:h-full'>
                        <div className='text-4xl  sm:text-5xl'>Get in touch</div>
.                          <i className="fa-regular fa-envelope text-4xl"></i>
                           <a className='text-xl '
                               href='mailto:steamworksoftwares09@gmail.com' >
                               steamworksoftwares09@gmail.com
                           </a>


                           <i className="fa-solid fa-phone text-2xl"></i>
                           <a className='text-xl'
                               href='tel:+917700021200' >
                               +91 7700021200
                           </a>
                        
                </div>
                {/* section 2.2 */}
                <div className='w-full h-[60%] sm:w-[50%] sm:h-full'>
                    <form className='w-full h-full flex flex-col justify-center items-center gap-4'>
                    <input className="px-6 py-2 bg-[#202840] text-fff border-none rounded-xl opacity-90 md:px-16 md:py-3 sm:px-8 placeholder:text-[#fff]" id="name" name='name' placeholder='Name'></input>
                    <input className="px-6 py-2 bg-[#202840] text-fff border-none rounded-xl opacity-90 md:px-16 md:py-3 sm:px-8 placeholder:text-[#fff]"  id="email" name='email' placeholder='Email'></input>
                    <input className="px-6 py-2 bg-[#202840] text-fff border-none rounded-xl opacity-90 md:px-16 md:py-3 sm:px-8 placeholder:text-[#fff]"  id="contact" name='contact' placeholder='Contact no'></input>
                    <input className="px-6 py-2 bg-[#202840] text-fff border-none rounded-xl opacity-90 md:px-16 md:py-3 sm:px-8 placeholder:text-[#fff]"  id="budget" name='budget' placeholder='Budget'></input>
                    <textarea className="px-6 py-2 bg-[#202840] text-fff border-none rounded-xl opacity-90 md:px-16 md:py-3 sm:px-8 placeholder:text-[#fff]"  id="project" namee='project' placeholder='Project Description'></textarea>
                    <button className='px-4 py-2 text-xl border-r-2 bg-[#1B1F25] text-fff' type='submit'>Submit</button>
                     {/* autocomplete="given-name" */}
                    <p className='text-l'>Our team will Contact you within 24hrs</p>
                    </form>
                </div>

        </div>

        {/* section 3 */}
        <div className='w-full h-[6%] bg-slate-900 flex justify-evenly items-center'>
            <Link to="/conditions" className='text-l text-fff sm:text-xl md:2xl'>Privacy</Link>
            <Link to="/conditions" className='text-l text-fff sm:text-xl md:2xl'>Terms</Link>
            <Link to="/conditions" className='text-l text-fff sm:text-xl md:2xl'>Condition</Link>
            <a  href="#home" className='px-4 py-2 text-l border-2 border-fff rounded-3xl text-fff'>Go up</a>
        </div>

    </div>
  )
}

export default Contact
