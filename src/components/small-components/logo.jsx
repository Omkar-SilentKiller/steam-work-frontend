import React from 'react'

function Logo() {
  return (
    <div 
    //    style={{display: "flex" , flexDirection :"column" , alignItems:"center"}}
       className='flex flex-col justify-center items-center'>
       <p className='text-customGold text-lg font-medium sm:text-2xl md:text-3xl'>Steam Work</p>
       <p className='text-fff text-base sm:text-xl md:text-2xl'>Software</p>
    </div>
  )
}

export default Logo
