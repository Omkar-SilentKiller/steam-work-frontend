import React from 'react'
import { Link } from 'react-router-dom';

import Trainimg from '../../assets/train-img.png';

function About_us() {
  return (
    <div id="about-us"
    className='w-screen h-screen flex flex-col gap-4 sm:flex-row justify-center items-center sm:gap-6'>
      
           <div className='w-full h-1/3 flex justify-center items-center sm:w-1/2 sm:h-full '>
                <img src={Trainimg} className='w-11/12 h-11/12 object-cover sm:w-3/4 sm:h-2/5 sm:rounded-xl'></img>
           </div>
           <div className='w-full h-2/3  flex flex-col justify-center items-center gap-8  sm:w-1/2 sm:h-full sm:gap-14  '>
                <div className='text-2xl flex justify-center items-center sm:text-3xl'>About us</div>
                <p className='w-5/6 h-11/12 sm:w-3/4 md:w-3/5 md:text-xl'>At Steam work softwares , we are dedicated to transforming your ideas into vibrant digital experiences. Whether you are a business aiming to expand your online footprint or an individual with a unique vision for a web application, we are here to bring your concepts to life.</p>
                {/* <Link className='' to="read-more">Read more</Link> */}
                <Link to="/read-more"
                style={{border:"2px solid #F57F54", borderRadius:"20px"}}
                className='text-xl px-4 py-2 text-[#F57F54] '>Read more</Link>
            </div>
    </div>
  )
}

export default About_us

// border sm:border-2 border-[#F57F54] rounded-[20px]
