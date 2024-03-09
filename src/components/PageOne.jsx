/* eslint-disable @next/next/no-img-element */
import { MdOutlineShoppingBag } from "react-icons/md";
import { CiUser } from "react-icons/ci";
import { FaArrowLeft } from "react-icons/fa";
import React, { useEffect, useState } from 'react'
import { getDate, getDay, getMonth, getYear, getTime } from "../lib/getDate";
import { getLocation } from "../lib/getLocation";
import { getVisitor } from "../lib/helper";
const PageOne = () => {
  const [visitor, setVisitor] = useState();
  const [date, setDate] = useState([{
    currentDay: getDay(),
    currentDate: getDate(),
    currentMonth: getMonth(),
    currentYear: getYear(),
    currentTime: getTime(),
  }])
  useEffect(() => {
    let location = getLocation();
    setVisitor(getVisitor(location.latitude, location.longitude));
    const visitorData = JSON.parse(localStorage.getItem("visitor"));
    setVisitor(visitorData);
    setInterval(() => {
      Promise.all([getDate(), getMonth(), getDay(), getYear(), getTime()])
        .then(values => {
          const [currentDate, currentMonth, currentYear, currentDay, currentTime] = values;
          setDate({ ...date, currentDay, currentDate, currentMonth, currentYear, currentTime });
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }, 2000)
  }, [])
  return (
    <div className="w-[100%] min-h-screen bg-cover bg-center  2xl:py-10 flex flex-col justify-between  overflow-hidden " style={{ backgroundImage: 'url(/assets/first-section.png)' }}>
      <nav className=" hidden sm:h-[80px] sm:w-[100%] sm:flex justify-between items-center">
        <div className="ml-5 md:ml-10 flex items-baseline gap-x-5 ">
          <img
            className=" sm:w-[30px] lg:w-[40px]  xl:w-[50px] xl:h-[40px] 2xl:w-[66px] 2xl:h-[50px]"
            src="/assets/UnderlineLogo.svg"
            alt="underLineLogo"
          />
          <img
            className=" sm:w-[60px] lg:w-[80px]  xl:w-[140px] xl:h-[40px] 2xl:w-[185px] 2xl:h-[50px]"
            src="/assets/Zima.svg"
            alt="Zima"
          />
          <p className=" uppercase text-white tracking-[2px] sm:text-[8px] lg:text-[12px] xl:text-[14px]">about</p>
        </div>

        <div>
          <img className="sm:w-[60px] lg:w-[80px]  xl:w-[150px] xl:h-[50px] 2xl:w-[204px] 2xl:h-[50px]" src="/assets/ZimaLogo.svg" alt="Logo" />
        </div>

        <div className="flex items-center mr-5 md:mr-10 gap-x-3 lg:gap-x-5 xl:gap-x-6  2xl:gap-x-10">
          <div>
            <p className="text-[6px]  sm:text-[7px] lg:text-[8px] xl:text-[10px] 2xl:text-[14px]  text-white text-right sm:tracking-[2px]">
              {date.currentTime} {visitor?.visitor_data?.cityName} {visitor?.visitor_data.countryName}
            </p>
            <p className="text-[#BE9F56]  sm:text-[7px] lg:text-[8px] xl:text-[10px] 2xl:text-[14px] text-right tracking-[2px]">
              {date.currentYear}, {date.currentDate} {date.currentMonth} {date.currentDay}
            </p>
          </div>

          <img className="w-[15px] lg:w-[20px] 2xl:w-[37px] " src={visitor?.visitor_data.country.app_icon} alt="" />
          <MdOutlineShoppingBag className="sm:w-[15px] xl:w-[21px] xl:h-[25px] " color="white" />
          <CiUser className="w-[21px]" color="white" />
        </div>
      </nav>

      <nav className=" flex justify-between items-center py-5 ml-5 sm:hidden">
        <div>
          <img className="w-[60px]" src="/assets/ZimaLogo.svg" alt="Logo" />
        </div>
        <div className="flex items-center mr-5 space-x-2">
          <div>
            <p className="text-[6px]    text-white text-right tracking-[2px]">
              {date.currentTime} {visitor?.visitor_data?.cityName} {visitor?.visitor_data.countryName}
            </p>
            <p className="text-[#BE9F56] text-[6px]   text-right tracking-[2px]">
              {date.currentYear}, {date.currentDate} {date.currentMonth} {date.currentDay}
            </p>
          </div>

          <img className="w-[15px] " src={visitor?.visitor_data.country.app_icon} alt="" />
          <MdOutlineShoppingBag className="w-[15px]" color="white" />
          <CiUser className="w-[21px]" color="white" />
        </div>
      </nav>

      <div className="-mt-48 sm:-mt-28 lg:-mt-40 xl:-mt-20 2xl:-mt-0 3xl:-mt-24">

        <p className="text-white flex gap-x-3  items-center ml-5 md:ml-10">
          <FaArrowLeft className="w-[10px] lg:w-[16px] xl:w-[22px] " />
          <span className="text-[12px] lg:text-[16px] xl:text-[22px] tracking-[2px]">Back</span>
        </p>
      </div>


      <div className="ml-5 md:ml-10 2xl:px-10 h-[182px] w-[543px]  2xl:mt-48">
        <h4 className="text-white text-[12px] sm:text-[15px] lg:text-[25px] 2xl:text-[40px] text-left tracking-[2px]">
          Discover
        </h4>
        <h1 className="uppercase text-white text-[14px] sm:text-[20px] lg:text-[35px] 2xl:text-[60px] leading-[px] tracking-[2px]">
          a new world
        </h1>
        <p className="text-[8px] lg:text-[12px] 2xl:text-[20px] text-left text-[#737373] tracking-[2px]">
          FOR THOSE WHO WISH FOR MORE...
        </p>

      </div>
      <div className="flex flex-col justify-center items-center gap-y-3 lg:gap-y-5 xl:gap-y-10 lg:mt-[30px] xl:mt-10 2xl:mt-80  ">
        <p className="text-[#737373] text-[8px] lg:text-[15px] 2xl:text-[20px] tracking-[2px]">
          Bringing the world closer together
        </p>
        <img src="/assets/arrow.svg" alt="arrow" className="w-[20px] mb-1 sm:w-[30px] xl:w-[50px] xl:h-[40px] 2xl:w-[80px] 2xl:h-[40px] " />
      </div>


    </div>
  );
};

export default PageOne;
