/* eslint-disable @next/next/no-img-element */
import React from 'react'

const PageNine = () => {
    return (
        <div className='h-[200px] sm:h-[300px] lg:h-[500px] xl:h-[350px] 2xl:h-[700px] 3xl:h-[900px] bg-cover bg-center' style={{ backgroundImage: 'url(/assets/fifth-section.png)' }}>
            <div className=" flex flex-col  items-center justify-center sm:flex sm:flex-row sm:justify-start  sm:items-center sm:ml-14 xl:ml-20 sm:space-x-14 lg:space-x-20 xl:space-x-60" >
                <img className='h-[300px] mt-10 sm:mt-[180px] lg:mt-[250px] xl:mt-[200px] 2xl:mt-[300px] 3xl:mt-[500px] w-[200px] 
                sm:h-[250px] sm:w-[180px] lg:h-[400px] lg:w-[300px] xl:h-[350px] xl:w-[250px] 2xl:w-[519px] 2xl:h-[750px] 3xl:h-[778px]' src="/assets/carB.png" alt="car" />
                <img className='w-[200px] mt-10 sm:mt-[170px] lg:mt-[320px] xl:mt-[150px] 2xl:mt-[320px] 3xl:mt-[500px] md:w-[300px]  lg:w-[500px] 2xl:[860px] 3xl:w-[914px] opacity-10' src="/assets/LogoB.svg" alt="transparentLogo" />
            </div>

        </div>
    )
}

export default PageNine