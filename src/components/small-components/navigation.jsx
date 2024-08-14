import React from 'react'
import Logo from './logo.jsx';
import Desk_nav from './desk-nav.jsx';
import Bg from '../../assets/header-bg.mp4';

function Navigation() {
  return (
    <>
    { /*className='w-full h-full  flex flex-col justify-center items-center ' 
        className=' h-full w-full object-cover absolute left-0 right-0  ' */}
    
    <div style={{ position:"relative" , width:"100%" , height:"100%" ,display:'flex',
         flexDirection:"column",
    }}> 

        <video src={Bg} muted loop autoPlay
               className='w-full h-full object-cover'
        ></video>
        

        <div className='absolute top-0 left-0 w-full h-full bg-slate-800 opacity-95 justify-center items-center '>
           
          <div className='relative w-full h-full'> 
            <div className="absolute top-4 left-8">
                  <Logo/>
            </div> 
            <div 
     
                className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center">
                  <p style={{fontFamily:"Allerta Stencil , sans-serif "}} className='text-4xl text-fff sm:text-4xl'> Your Vision </p>
                  <p style={{fontFamily:"Allerta Stencil , sans-serif "}} className='text-4xl text-fff'> Our Innovation </p>
                  <div className='text-l text-customGold sm:text-xl'>Together We Achieve, Integrate, and Inspire</div>
            </div>  
            <div  className="absolute top-6 right-8 sm:right-20 sm:top-4">
                <Desk_nav />
            </div>
          </div>      

        </div>

    </div>
    </>
  )
}

export default Navigation;


// // Your Vision 
// Our Innovation 
// Together We Achieve, Integrate, and Inspire