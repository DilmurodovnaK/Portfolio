import Image from 'next/image'
import React from 'react'
import najot from '@/components/img/najot.png';

const Najot = () => {
  return (
   <div className=' flex justify-around items-center ig:flex-col ig:justify-center px-10'>
 <div className=''>
     
        {/* <h2 className="mt-3 text-4xl font-bold text-[#1f1f22] mb-4" >React</h2>
        <p className="mt-3 text-lg" >The library for web and native user interfaces</p> */}
         <Image
         priority
          src={najot}
          alt='my logo'
          width={400}
          height={220}
          className='sm:w-[300px] sm:h-[240px] mx-auto'
        />
  </div>
 
    <div className='flex flex-col max-w-[600px] text-center justify-center items-center' >
    <h2 className="mt-3 text-4xl transition ig:text-base duration-300  ease-in-out font-bold mm:text-3xl   mb-4">NAJOT TA`LIM</h2>
    <p className="mt-3 xl:text-sm ig:text-base mm:text-xs  text-lg transition duration-300 ease-in-out sm:text-base sm:max-w-[450px] ">Najot Ta`lim Education is an advanced training center in Uzbekistan that has achieved high results in a short period of time and teaches modern professions. A place that will teach you the most necessary modern professions and knowledge. Here, in addition to foreign languages, you can become an expert in modern professions such as media, marketing and programming. </p>
<button className='text-lg mt-8 w-56 transition ig:text-base rounded-full duration-300 focus:scale-110 hover:scale-110 active:scale-105 ease-in-out bg-[#46C2CB] outline-none border-2 hover:bg-[#3ca4ac] font-bold py-3 px-4 sm:w-40 sm:font-medium sm:p-1 dark:bg-gradient-to-r from-indigo-900 via-sky-900 to-indigo-900 dark:hover:bg-sky-900 '>
 <a href="https://najottalim.uz/">More information...</a>
</button>

  </div>
 
  </div>

  )
}

export default Najot