/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { BsArrowRight } from "react-icons/bs";

const PageFive = () => {
  return (
    <div className="bg-cover bg-center w-[full] h-[100vh] overflow-hidden  relative" style={{ backgroundImage: 'url(/assets/page5.png)' }}>

      <div className='w-[450px] h-[200px] absolute left-40 py-8 px-6  sm:py-20 2xl:p-0 sm:top-5 lg:top-0 lg:-right-14  2xl:top-28 xl:-right-10 '>
        <p className='   text-[10px] sm:text-[14px] lg:text-[20px] 2xl:text-[40px] tracking-[2px] sm:tracking-[4px] text-[#FFFFFF]'>Personalised for You</p>
        <p className='w-[40%] sm:w-[70%] lg:w-[280px] 2xl:w-[100%]   text-justify text-[8px] sm:text-[10px] lg:text-[12px] 2xl:text-[20px] text-[#999797] leading-[12px] sm:leading-[20px] 2xl:leading-[40px]'>Delivering thousands of personalised alerts everyday, our USERS can be first in line when that opportunity of a lifetime is here.</p>
      </div>

      <div>
        <img src="/assets/transparentLogo.svg" className='opacity-10 absolute left-[20px] top-[300px] sm:top-[300px] sm:left-[60px] lg:top-[350px] w-[150px] sm:w-[200px] lg:w-[400px] 2xl:w-[548px] 2xl:top-[580px] 3xl:top-[650px]' alt="" />
      </div>
      <p className='text-[8px] sm:text-[8px] lg:text-[12px] xl:text-[21px] tracking-[2px] sm:tracking-[4px] text-white absolute right-[25px] top-[310px] sm:right-[80px] sm:top-[310px] lg:top-[370px] xl:right-[120px] xl:top-[350px] 2xl:right-[120px] 2xl:top-[610px] 3xl:right-[120px] 3xl:top-[710px]'>CREATE USER ID</p>
      <BsArrowRight color='white' className='w-[12px] sm:w-[20px] lg:w-[30px] 2xl:w-[45px] absolute right-[10px] top-[308px] sm:right-[50px] sm:top-[308px] lg:right-[50px] lg:top-[370px] xl:top-[360px] xl:right-[80px] 2xl:right-[80px] 2xl:top-[618px] 3xl:right-[80px] 3xl:top-[718px]' />
    </div>

  )
}

export default PageFive