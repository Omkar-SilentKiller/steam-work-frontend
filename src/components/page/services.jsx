import React from 'react'
import { Link } from 'react-router-dom';

import UIUX from "../../assets/uiux.png";
import Web from '../../assets/webDevelopment.png';

import '@fortawesome/fontawesome-free/css/all.min.css';


function Services() {
  return (
    <div id='services' className='w-screen h-[60vh] flex flex-col justify-center items-center sm:flex-row'>
         
          {/* section 1 */}
          <div className='w-full h-[70%] flex flex-col justify-center items-start  bg-[#252C37]  sm:w-[70%] sm:h-[90%]'>
                 {/* section 1.1 */}
                 <div className='w-full h-[50%] flex flex-row justify-center items-center'>
                         
                       <img src={UIUX} className='w-[50%] h-[80%] m-2 object-cover sm:h-[90%] sm:w-[40%]'></img>
                         
                       <p className='w-[50%] h-[90%] m-2 flex flex-row justify-center items-center text-2xl text-fff sm:text-4xl sm:h-[90%] sm:w-[60%]'>UI / UX Designing</p>
                 </div>
                 {/* section 1.2 */}
                 <div className='w-full h-[50%] flex flex-row justify-center items-center'>
                    <p className='w-[50%] h-[90%] flex flex-row justify-center items-center text-2xl text-fff sm:text-4xl sm:h-[90%] sm:w-[60%]'>Web Development</p>
                    <img src={Web} className='w-[50%] h-[80%] m-2 object-cover sm:h-[90%] sm:w-[40%]'></img>
                 </div>
          </div>

          {/* section 2 */}
          <div className='w-full h-[30%] flex flex-row justify-center items-start sm:flex-col bg-[#fff] sm:w-[30%] sm:h-[90%]'>
                  <Link to="/explore-designs"
                    className='w-full h-full flex flex-row justify-center items-center text-2xl sm:text-4xl'>
                    Explore Designs
                    <i 
                    style={{fontSize:"28px", marginLeft:"20px" ,display:"flex" , justifyContent:"center" , alignItems:"center"}}
                    className="fa-solid fa-arrow-right"></i>
                  </Link>
                  
          </div>

    </div>
  )
}

export default Services
