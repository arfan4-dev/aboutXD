/* eslint-disable @next/next/no-img-element */
import PageFive from '@/components/PageFive'
import PageFour from '@/components/PageFour'
import PageNine from '@/components/PageNine'
import PageOne from '@/components/PageOne'
import PageSeven from '@/components/PageSeven'
import PageSix from '@/components/PageSix'
import PageThree from '@/components/PageThree'
import React, { useEffect } from 'react'

const PageTwo = () => {
  const handleArrowClick = () => {
    window.scrollTo({ top: window.innerHeight + window.innerHeight, behavior: "smooth" });
  };
  return (
    <div>

      <div className=' relative h-screen uppercase overflow-hidden'>
        <p className='p-5 sm:text-center text-[8px] sm:text-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[18px] tracking-[2px]  sm:py-8'>a real estate and property platform that is changing the world</p>

        <div className='ml-5 mt-10 sm:ml-10 sm:mt-10 lg:mt-14 xl:mt-10 2xl:mt-20 tracking-[4px] lg:leading-[40px] 2xl:leading-[80px] 3xl:leading-[100px] '>
          <p className=' text-[8px] sm:text-[10px] lg:text-[13.5px]  2xl:text-[37px] 3xl:text-[45px]'>a revolutionary platform</p>
          <p className='text-[15.3px] sm:text-[20px] lg:text-[26px] xl:text-[28px]  2xl:text-[65px] 3xl:text-[79px]  '>entries - sellers </p>
          <p className='text-[26.5px] sm:text-[31.5px] lg:text-[39.5px] 2xl:text-[92px] 3xl:text-[110px]'>world wide</p>
        </div>

        <div className='leading-16 sm:leading-[20px] 2xl:leading-[40px] sm:text-center  tracking-[2px] absolute sm:right-14 lg:right-20 lg:top-[250px] xl:top-[230px] 2xl:right-20 2xl:top-[400px] 3xl:top-[500px] '>
          <div className='flex flex-col sm:items-center  ml-5 mt-20 sm:mt-0 sm:ml-0'>
            <img src="/assets/LogoB.svg" className='w-[200px] sm:w-[150px] lg:w-[300px] 2xl:w-[590px]' alt="" />
            <p className='text-[8px] lg:text-[12px] 2xl:text-[19px] mt-10'>connecting user from user across the globe</p>
            <p className=' text-[8px] lg:text-[12px] 2xl:text-[19px]'>to facilitate life`  s most  important</p>
            <p className='text-[8px]  lg:text-[12px] 2xl:text-[19px]'>personal transactions</p>
          </div>

        </div>

        <div className='ml-5 mt-24 sm:ml-10 sm:mt-0 leading-[16px]  lg:leading-[20px]  2xl:leading-[40px] absolute  top-[370px] xl:left-5 sm:top-[370px] lg:top-[450px] 2xl:left-10 2xl:top-[700px] 3xl:top-[800px]'>

          <p className='text-[10px] sm:text-[14px] lg:text-[22px] 2xl:text-[40px] tracking-[1px] sm:tracking-[2px] mb-2'>THE BEST OF THE BEST</p>
          <p className='text-[6px] w-[100%] sm:w-[100%] sm:text-[8px] lg:text-[12px] 2xl:text-[20px] text-justify  tracking-[1px] sm:tracking-[2px]'>A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND <br /> MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET <br /> FROM ACROSS THE WORLD.</p>
        </div>

        <div className="absolute left-[180px] sm:left-[310px] md:left-[372px] lg:left-[500px] xl:left-[650px] 2xl:left-[750px] 3xl:left-[685px] bottom-[10px] sm:bottom-[10px] 3xl:ml-60">

          <img src="/assets/arrowB.svg" onClick={handleArrowClick} alt="arrow" className="cursor-pointer w-[20px] mb-1 sm:w-[30px] xl:w-[50px] xl:h-[40px] 2xl:w-[80px] 2xl:h-[40px] " />
        </div>


      </div>

    </div>

  )
}

export default PageTwo