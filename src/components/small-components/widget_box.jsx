import React from 'react'
import { Link } from "react-router-dom";

import Contact from "../../assets/contact-header.png";
import Services from "../../assets/services-header.jpg";

import Insta from "../../assets/insta.gif";
import Linkedin from '../../assets/Linkedin1.png';
import Facebook from "../../assets/facebook.png";
import Coffe from "../../assets/coffe.png";

import Train from '../../assets/train.mp4';
import City from "../../assets/city.mp4";

function Widget_box() {
    const handleIsntragramClick = () =>{
        window.open("https://www.instagram.com/steamworksoftwares09/")
    }
    const handlefacebookclick = () => {
        window.open("https://www.facebook.com")
    }
    const handlelinkedinclick = () => {
        window.open("https://www.linkedin.com/in/steam-work-softwares-6aaba5322/")
    }
  return (
    <div className='flex flex-col z-2 gap-1 w-full h-full sm:flex-row'>
        
        {/* section 1 */}
        <div className='w-full h-1/3 flex flex-row gap-1   
                 sm:w-1/3 sm:h-full sm:flex-col '>
             
              {/* section 1.1 */}
              <div className='w-1/2 h-full relative  sm:w-full sm:h-1/2'>
                  <img src={Contact} className='w-full h-full object-cover'></img>
                  <a href="#contact-us" className='absolute top-0 left-0 w-full h-full text-xl text-fff flex justify-center items-center sm:text-3xl'>Contact</a>
              </div>

              {/* section 1.2 */}
              <div className='w-1/2 h-full relative sm:w-full sm:h-1/2'>
                  <img src={Services} className='w-full h-full object-cover'></img>
                  <a href="#services" className='absolute top-0 left-0 w-full h-full text-xl text-fff flex justify-center items-end sm:text-3xl'>Services</a>
              </div>

        </div>

        {/* section 2 */}
        <div className='w-full h-1/3 flex flex-row gap-2 relative bg-yellow-950  
                 sm:w-1/3 sm:h-full  '>
            <video src={Train} muted loop autoPlay className='w-full h-full object-cover' ></video>  
            <a href="#about-us" className='absolute top-0 left-0 w-full h-full text-2xl text-fff flex justify-center items-center bg-[rgba(252,174,23,0.2)] sm:text-3xl'>About Us</a>               
        </div>
  
        {/* section 3 */}
        <div className='w-full h-1/3 flex flex-row gap-1    
                 sm:w-1/3 sm:h-full sm:flex-col '>

             {/* section 3.1 */}
             <div className='w-1/2 h-full relative  sm:w-full sm:h-1/2'>
                  <video src={City} muted loop autoPlay className='w-full h-full object-cover' ></video>
                  <Link to="/explore-designs" className='absolute top-0 left-0 w-full h-full text-2xl text-fuchsia-50 flex justify-center p-4 items-start  sm:text-3xl'>Design's</Link>
             </div>

             {/* section 3.2 */}
             <div className='w-1/2 h-full flex flex-col gap-0.5  sm:w-full sm:h-1/2'>
           
                    {/* section 3.2.1*/}
                    <div className='flex flex-row w-full h-1/2 gap-0.5 '>
                          <img onClick={handleIsntragramClick} src={Insta} className='h-full w-1/2'></img>
                          <img onClick={handlelinkedinclick} src={Linkedin} className='h-full w-1/2'></img>
                    </div>
                    {/* section 3.2.2*/}
                    <div className='flex flex-row h-1/2 w-full gap-0.5'>
                         <img onClick={handlefacebookclick} src={Facebook} className='h-full w-1/2'></img>
                        <img src={Coffe} className='h-full w-1/2'></img>
                    </div>
                    
             </div>

        </div>

    </div>
  )
}

export default Widget_box

