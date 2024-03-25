/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState, useEffect } from 'react'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
const PageThree = () => {
    const swiperRef = useRef(null);
    const [width, setWidth] = useState();
    const [slideView, setSlideView] = useState(4)
    const [spaceBetween, setSpaceBetween] = useState(20)
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
    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    useEffect(() => {
        if (width < 640) {
            setSlideView(2);
            setSpaceBetween(5)

        } else {
            setSlideView(4);
            setSpaceBetween(20)
        }
    }, [width]);
    console.log(width)
    return (
        <div className='w-full h-[70%] sm:h-[100vh] overflow-hidden'>
            <div className='flex justify-between ml-[15px] sm:ml-7 lg:ml-6 xl:ml-[75px] 2xl:ml-[45px] 3xl:ml-[40px] py-5 sm:py-5 md:py-10 lg:mt-10 xl:py-10 2xl:mt-20 items-center'>
                <p className='uppercase tracking-[2px] text-[10px] sm:text-[14px] lg:text-[25px] 2xl:text-[40px]'>our categories</p>
                <span className='flex gap-x-4 lg:gap-x-6  2xl:gap-x-10 mr-3 sm:mr-8 lg:mr-6 xl:mr-16 2xl:mr-10 3xl:mr-6'>
                    <img src='/assets/leftArrow.png' alt='' className='w-[6px] lg:w-[10px] rotate-180  2xl:w-[20px] cursor-pointer' onClick={handleBackClick} />
                    <img src='/assets/rightArrow.png' alt='' className='w-[6px] lg:w-[10px] 2xl:w-[20px] cursor-pointer' onClick={handleForwardClick} />
                </span>

            </div>

            <div
                className='
                relative flex flex-wrap md:flex-nowrap 2xl:ml-12 3xl:ml-0  xl:ml-10 2xl:mr-12 3xl:mr-0 2xl:space-x-20  justify-center  items-center'
            >
                <Swiper
                    slidesPerView={slideView}
                    spaceBetween={spaceBetween}
                    ref={swiperRef}
                    modules={[Pagination]}
                    className=''
                >

                    <SwiperSlide className=' ml-5 sm:ml-3 md:ml-7 lg:ml-4 xl:ml-7 2xl:-ml-0 3xl:ml-7'>
                        <div className='relative mt-5'>
                            <img src="/assets/Rectangle -3.png" alt="RealEstateImg" className='rounded-md sm:rounded-lg xl:rounded-xl 2xl:rounded-3xl w-[150px] sm:w-[120px] lg:w-[200px] xl:w-[250px]  2xl:w-[420px] 3xl:w-[420px]' />
                            <p className='uppercase text-white text-[10px] sm:text-[8px] left-11 lg:text-[16px] bottom-1 xl:text-[18px] 2xl:text-[24px] absolute   xl:bottom-2 sm:left-[35px] sm:bottom-2 lg:bottom-2 lg:left-14 xl:left-[80px]  2xl:bottom-7 2xl:left-28 3xl:left-36  tracking-[2px] '>diamond</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='relative mt-5 '>
                            <img src="/assets/Rectangle -4.png" alt="RealEstateImg" className='w-[150px] sm:w-[120px] lg:w-[200px] xl:w-[250px]  2xl:w-[420px] 3xl:w-[420px]' />
                            <p className='uppercase text-white text-[10px] sm:text-[8px] left-6 lg:text-[16px] bottom-1 xl:text-[18px] 2xl:text-[24px] absolute   xl:bottom-2 sm:left-[20px] md:left-[20px] sm:bottom-2 lg:bottom-2 lg:left-8 xl:left-12  2xl:bottom-7 2xl:left-20 3xl:left-28  tracking-[2px] '>private island</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className='relative mt-5 '>
                            <img src="/assets/RealEstate.png" alt="RealEstateImg" className='w-[150px] sm:w-[120px] lg:w-[200px] xl:w-[250px]  2xl:w-[420px] 3xl:w-[420px]' />
                            <p className='uppercase text-white text-[10px] sm:text-[8px] left-10 lg:text-[16px] bottom-1 xl:text-[18px] 2xl:text-[24px] absolute   xl:bottom-2 sm:left-[30px] md:left-[30px] sm:bottom-2 lg:bottom-2 lg:left-12 xl:left-16  2xl:bottom-7 2xl:left-24 3xl:left-[140px]  tracking-[2px] '>real estate</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative mt-5'>
                            <img src="/assets/car.png" alt="carImg" className='w-[150px] sm:w-[120px]  lg:w-[200px] xl:w-[250px]   2xl:w-[420px] ' />
                            <p className='uppercase text-white text-[10px] sm:text-[8px]  lg:text-[18px] 2xl:text-[24px] absolute left-[60px] bottom-1 xl:bottom-2 sm:left-[50px] md:left-[50px] lg:left-[80px] xl:left-[110px] sm:bottom-2 lg:bottom-2 2xl:bottom-7 2xl:left-36 3xl:left-44 tracking-[2px] '>CARS</p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  mt-5'>
                            <img src="/assets/yatch.png" alt="yachtImg" className='w-[150px] sm:w-[120px]  lg:w-[200px] xl:w-[250px] 2xl:w-[420px]' />
                            <p className='uppercase text-white text-[10px] sm:text-[8px] lg:text-[18px] 2xl:text-[24px] absolute left-14 bottom-1 xl:bottom-2 sm:left-[48px] md:left-[45px] lg:left-[70px]  xl:left-24 sm:bottom-2 lg:bottom-2   2xl:bottom-7 2xl:left-32 3xl:left-44 tracking-[2px] '>YACHT</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative  mt-5'>
                            <img src="/assets/watch.png" alt="watchImg" className='w-[150px] sm:w-[120px]  lg:w-[200px] xl:w-[250px] 2xl:w-[420px]' />
                            <p className='uppercase text-white text-[10px] bottom-1 sm:text-[8px]  lg:text-[18px] 2xl:text-[24px] absolute left-14 xl:bottom-2 xl:left-[95px] sm:left-[45px]  lg:left-[65px] sm:bottom-2  lg:bottom-2 2xl:bottom-7 2xl:left-32 3xl:left-40 tracking-[2px] '>WATCH</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative mt-5 '>
                            <img src="/assets/Rectangle -7.png" alt="RealEstateImg" className='w-[150px] sm:w-[120px] lg:w-[200px] xl:w-[250px]  2xl:w-[420px] 3xl:w-[420px]' />
                            <p className='uppercase text-white text-[10px] sm:text-[8px] left-14 lg:text-[16px] bottom-1 xl:text-[18px] 2xl:text-[24px] absolute   xl:bottom-2 sm:left-[45px] md:left-[45px] sm:bottom-2 lg:bottom-2 lg:left-[70px] xl:left-24  2xl:bottom-7 2xl:left-32 3xl:left-44  tracking-[2px] '>Flight</p>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='relative mt-5 '>
                            <img src="/assets/Rectangle -6.png" alt="RealEstateImg" className='w-[150px] sm:w-[120px] lg:w-[200px] xl:w-[250px]  2xl:w-[420px] 3xl:w-[420px]' />
                            <p className='uppercase text-white text-[10px] sm:text-[8px] left-11 lg:text-[16px] bottom-1 xl:text-[18px] 2xl:text-[24px] absolute   xl:bottom-2 sm:left-[35px]  sm:bottom-2 lg:bottom-2 lg:left-14 xl:left-[75px]  2xl:bottom-7 2xl:left-[110px] 3xl:left-36  tracking-[2px] '>countries</p>
                        </div>
                    </SwiperSlide>


                </Swiper>

            </div>
            <p className='uppercase text-center text-[10px] font-semibold sm:text-[14px] md:text-[20px]  lg:text-[30px] xl:text-[20px] 2xl:text-[50px] tracking-[2px] sm:tracking-[4px] my-1 lg:my-9 mt-14 lg:mt-28 xl:mt-16 2xl:mt-40'>one platform for all premium listings</p>
            <p className='text-center text-[10px] sm:text-[14px] md:text-[20px] lg:text-[30px] xl:text-[20px] 2xl:text-[40px] tracking-[2px] sm:tracking-[4px]'>UNLIMITED POTENTIAL</p>
        </div>
    )
}

export default PageThree