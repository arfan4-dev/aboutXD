/* eslint-disable @next/next/no-img-element */
import React, { useRef } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const PageThree = () => {
    const swiperRef = useRef(null);

    const handleBackClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const handleForwardClick = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };
    return (
        <div className='w-full h-[100vh] overflow-hidden'>
            <div className='flex justify-between ml-[15px] sm:ml-12 lg:ml-14 xl:ml-[75px] 2xl:ml-[45px] 3xl:ml-[40px] py-14 sm:py-5 md:py-10 lg:mt-10 xl:py-10 2xl:mt-20 items-center'>
                <p className='uppercase tracking-[2px] text-[10px] sm:text-[14px] lg:text-[25px] 2xl:text-[40px]'>our categories</p>
                <span className='flex gap-x-3 mr-3 sm:mr-8 lg:mr-10 xl:mr-16 2xl:mr-10 3xl:mr-6'>
                    <IoIosArrowBack className='w-[10px] sm:w-[20px] cursor-pointer' onClick={handleBackClick} />
                    <IoIosArrowForward className='w-[10px] sm:w-[20px] cursor-pointer' onClick={handleForwardClick} />
                </span>

            </div>

            <div
                className='
                relative flex flex-wrap md:flex-nowrap 2xl:ml-12 3xl:ml-0  xl:ml-10 2xl:mr-12 3xl:mr-0 2xl:space-x-20  justify-center  items-center'
            >
                <Swiper
                    slidesPerView={4}
                    spaceBetween={20}
                    ref={swiperRef}
                    modules={[Pagination]}
                    className=''
                >

                    <SwiperSlide className=' sm:ml-3 md:ml-7 lg:ml-4 xl:ml-7 2xl:-ml-0 3xl:ml-7'>
                        <div className='relative mt-5'>
                            <img src="/assets/Rectangle -3.png" alt="RealEstateImg" className='rounded-md sm:rounded-lg xl:rounded-xl 2xl:rounded-3xl w-[80px] sm:w-[120px] lg:w-[200px] xl:w-[250px]  2xl:w-[420px] 3xl:w-[420px]' />
                            <p className='uppercase text-white text-[6px] sm:text-[8px] left-5 lg:text-[16px] bottom-1 xl:text-[18px] 2xl:text-[24px] absolute   xl:bottom-2 sm:left-[35px] sm:bottom-2 lg:bottom-2 lg:left-14 xl:left-[80px]  2xl:bottom-7 2xl:left-28 3xl:left-36  tracking-[2px] '>diamond</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='relative mt-5 '>
                            <img src="/assets/Rectangle -4.png" alt="RealEstateImg" className='w-[80px] sm:w-[120px] lg:w-[200px] xl:w-[250px]  2xl:w-[420px] 3xl:w-[420px]' />
                            <p className='uppercase text-white text-[6px] sm:text-[8px] left-5 lg:text-[16px] bottom-1 xl:text-[18px] 2xl:text-[24px] absolute   xl:bottom-2 sm:left-[20px] md:left-[20px] sm:bottom-2 lg:bottom-2 lg:left-8 xl:left-12  2xl:bottom-7 2xl:left-20 3xl:left-28  tracking-[2px] '>private island</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='relative mt-5 '>
                            <img src="/assets/RealEstate.png" alt="RealEstateImg" className='w-[80px] sm:w-[120px] lg:w-[200px] xl:w-[250px]  2xl:w-[420px] 3xl:w-[420px]' />
                            <p className='uppercase text-white text-[6px] sm:text-[8px] left-4 lg:text-[16px] bottom-1 xl:text-[18px] 2xl:text-[24px] absolute   xl:bottom-2 sm:left-[30px] md:left-[30px] sm:bottom-2 lg:bottom-2 lg:left-12 xl:left-16  2xl:bottom-7 2xl:left-24 3xl:left-[140px]  tracking-[2px] '>real estate</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative mt-5'>
                            <img src="/assets/car.png" alt="carImg" className='w-[80px] sm:w-[120px]  lg:w-[200px] xl:w-[250px]   2xl:w-[420px] ' />
                            <p className='uppercase text-white text-[6px] sm:text-[8px]  lg:text-[18px] 2xl:text-[24px] absolute left-7 bottom-1 xl:bottom-2 sm:left-[50px] md:left-[50px] lg:left-[80px] xl:left-[110px] sm:bottom-2 lg:bottom-2 2xl:bottom-7 2xl:left-36 3xl:left-44 tracking-[2px] '>CARS</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  mt-5'>
                            <img src="/assets/yatch.png" alt="yachtImg" className='w-[80px] sm:w-[120px]  lg:w-[200px] xl:w-[250px] 2xl:w-[420px]' />
                            <p className='uppercase text-white text-[6px] sm:text-[8px] lg:text-[18px] 2xl:text-[24px] absolute left-7 bottom-1 xl:bottom-2 sm:left-[48px] md:left-[45px] lg:left-[70px]  xl:left-24 sm:bottom-2 lg:bottom-2   2xl:bottom-7 2xl:left-32 3xl:left-44 tracking-[2px] '>YACHT</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  mt-5'>
                            <img src="/assets/watch.png" alt="watchImg" className='w-[80px] sm:w-[120px]  lg:w-[200px] xl:w-[250px] 2xl:w-[420px]' />
                            <p className='uppercase text-white text-[6px] bottom-1 sm:text-[8px]  lg:text-[18px] 2xl:text-[24px] absolute left-7 xl:bottom-2 xl:left-[95px] sm:left-[45px]  lg:left-[65px] sm:bottom-2  lg:bottom-2 2xl:bottom-7 2xl:left-32 3xl:left-40 tracking-[2px] '>WATCH</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative mt-5 '>
                            <img src="/assets/Rectangle -7.png" alt="RealEstateImg" className='w-[80px] sm:w-[120px] lg:w-[200px] xl:w-[250px]  2xl:w-[420px] 3xl:w-[420px]' />
                            <p className='uppercase text-white text-[6px] sm:text-[8px] left-7 lg:text-[16px] bottom-1 xl:text-[18px] 2xl:text-[24px] absolute   xl:bottom-2 sm:left-[45px] md:left-[45px] sm:bottom-2 lg:bottom-2 lg:left-[70px] xl:left-24  2xl:bottom-7 2xl:left-32 3xl:left-44  tracking-[2px] '>Flight</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative mt-5 '>
                            <img src="/assets/Rectangle -6.png" alt="RealEstateImg" className='w-[80px] sm:w-[120px] lg:w-[200px] xl:w-[250px]  2xl:w-[420px] 3xl:w-[420px]' />
                            <p className='uppercase text-white text-[6px] sm:text-[8px] left-4 lg:text-[16px] bottom-1 xl:text-[18px] 2xl:text-[24px] absolute   xl:bottom-2 sm:left-[35px]  sm:bottom-2 lg:bottom-2 lg:left-14 xl:left-[75px]  2xl:bottom-7 2xl:left-[110px] 3xl:left-36  tracking-[2px] '>countries</p>
                        </div>
                    </SwiperSlide>












                </Swiper>

            </div>
            <p className='uppercase text-center text-[10px] sm:text-[14px] md:text-[20px]  lg:text-[30px] xl:text-[20px] 2xl:text-[50px] tracking-[2px] sm:tracking-[4px] my-3 lg:my-9 mt-14 lg:mt-28 xl:mt-16 2xl:mt-40'>one platform for all premium listings</p>
            <p className='text-center text-[10px] sm:text-[14px] md:text-[20px] lg:text-[30px] xl:text-[20px] 2xl:text-[40px] tracking-[2px] sm:tracking-[4px]'>UNLIMITED POTENTIAL</p>
        </div>
    )
}

export default PageThree