import React from 'react'

import Nav from '../small-components/navigation.jsx';
import Widget_box from '../small-components/widget_box.jsx';

function Home() {
  return (
    <div id="home"  className='w-screen h-screen flex flex-col '>
      <div className='w-full h-3/6'>
          <Nav />
      </div>
      <div className='w-full h-3/6  flex justify-center items-center'>

        <div 
        style={{ boxShadow:"0 8px 6px rgba(121, 117, 119 , 0.8)" 
         }} 
        className='w-[60%] h-[90%] bg-fff flex z-0 border-[8px] border-fff md:[50%] sm:[60%] mt-[-26%] lg:mt-[-14%] '
        >          
        <Widget_box />

        </div>
      
      </div>
    </div>
  )
}

export default Home
