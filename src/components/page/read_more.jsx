import React from 'react'
import { Link } from "react-router-dom";

import readmore from "../../assets/read-more.jpg";
import Logo from "../small-components/logo";

function Read_more() {
  return (
    <div className='w-screen h-screen ' >

      <div className='w-full h-[120vh] flex flex-col justify-center items-center gap-2'>
            
            {/* section 1 */}
           <div className='w-full h-[20%] relative sm:h-[30%]'>
                <img src={readmore} className='w-full h-full object-cover'></img>
                <div className='absolute top-0 left-0 w-full h-full bg-[#3A3D43] opacity-90'>
                   <div className='w-full h-full relative '>
                      <div className="absolute top-4 left-4">
                       <Logo />
                      </div>
                       <Link to="/" className='absolute top-4 right-8 text-fff text-xl px-6 py-2 border-2 rounded-3xl' >Back</Link>
                   </div>
                </div> 
           </div>

           {/* section 2 */}
           <div className='w-full h-[50%] flex justify-center items-center sm:h-[40%]'>
                <p className='w-[94%] h-[94%] text-l font-normal sm:text-xl sm:w-[90%] sm:h-[96%] md:text-2xl'>
                Welcome to Steam Work Softwares , where we believe in empowering 
businesses to thrive in the digital age. Founded with a passion for 
innovation and a commitment to excellence, our mission is to provide 
affordable, high-quality website solutions tailored to the unique needs 
of startups and small businesses. We understand the challenges of
 launching and growing a business, and we're here to support you 
every step of the way. Our team of expert developers and designers 
work closely with you to create stunning, user-friendly websites that 
not only capture your brand's essence but also drive growth and success. 
Join us on this exciting journey, and let's build a brighter future together.
                </p>
           </div>

           {/* section 3 */}
           <div className='w-full h-[30%]'>
              <div className='w-full h-full flex flex-col justify-center items-center gap-1'>
                <p className='font-normal text-xl'>If any query fill free to contact us </p>
                <a className='text-l '
                               href='mailto:steamworksoftwares09@gmail.com' >
                               steamworksoftwares09@gmail.com
                </a>
                <p className='text-[10px] text-customGold font-medium mt-6 sm:text-[18px]'>Your website is the window to your business.
                Keep it fresh, keep it exciting.</p>
              </div>  
           </div>

      </div>   
    </div>
  )
}

export default Read_more
