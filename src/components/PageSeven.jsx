/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PageSeven = () => {
    return (
        <div className='h-screen flex justify-start items-center gap-x-24 sm:gap-x-40 xl:gap-x-60 ml-10 sm:ml-20 lg:ml-32'>
            <div className='space-y-5'>
                <img src="/assets/blackLogo.svg" alt="" className='w-[100px] sm:w-[150px] lg:w-[200px] 2xl:w-[308px]' />
                <p className='uppercase text-[13.5px] sm:text-[23px] lg:text-[32.5px] xl:text-[53px] tracking-[4px]'>partners</p>
            </div>

            <div className='flex flex-col items-center space-y-6 lg:space-y-10'>
                <img src="/assets/CIVIC.svg" alt="" srcset="" className='w-[80px] sm:w-[120px] lg:w-[200px] 2xl:w-[297px]' />
                <img src="/assets/barclo.svg" alt="" srcset="" className='w-[80px] sm:w-[120px] lg:w-[200px] 2xl:w-[237px]' />

            </div>
        </div>
    )
}

export default PageSeven