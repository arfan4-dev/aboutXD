/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PageFour = () => {
  return (
    <div className='flex justify-center  items-center w-full h-[100vh]'>
      <div className='px-10 md:p-0 flex gap-x-10 flex-col sm:flex-row items-center justify-center'>
        <div className=''>
          <img src="assets/ZimaB.svg" className=' w-[200px] lg:w-[300px] xl:w-[500px] 2xl:w-[566px] 2xl:h-[153px]' alt="" />
          <p className='text-[14px] lg:text-[25px] xl:text-[40px]  mt-5 tracking-[2px]'>ONE SOURCE</p>
          <p className='sm:text-[24px] md:text-[26px] lg:text-[40px] 2xl:text-[80px] tracking-[2px]  '>ENTRY TICKETS</p>
          <p className='text-[#737373] text-[8px] lg:text-[20px] tracking-[2px] mb-5'>FOR ALL PREMIUM LISTINGS</p>
        </div>
        <div>
          <img src="/assets/page4.png" alt="buildingImg" className='sm:w-[350px] lg:w-[500px] xl:w-[600px] xl:h-[400px] 2xl:w-[800px] 2xl:h-[600px] 3xl:w-[1083px] 3xl:h-[718px]' />
          <p className='text-[16px] lg:text-[20px] xl:text-[30px] text-center  tracking-[2px] mt-5'> LET YOUR DREAMS FIND YOU</p>
        </div>
      </div>
    </div>

  )
}

export default PageFour