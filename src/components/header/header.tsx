"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Image from 'next/image';
import itsme from '@/components/img/myimage.png';
const Header = () => {
  return (
    <>
      <main className="flex justify-around items-center pb-10 mt-16  ig:flex-col ig:items-center ig:pt-6">
        <div className="flex justify-evenly items-center ">
          <div className=' flex flex-col items-center'>
            <motion.h1 className="mt-3 text-5xl font-bold mb-4 xl:text-5xl mm:text-4xl"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}>WELCOME</motion.h1>
            <motion.p className=" max-w-[500px] mt-3 text-center text-lg xl:text-sm ig:max-w-[600px] ig:text-base md:px-7 mm:text-xs"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}>Welcome to the frontend developer website, here you will find information about me and Let`s dive into the world of frontend development together.</motion.p>
            <Link href="#about">
              <motion.button className='text-lg mt-8 w-56 transition rounded-full duration-300 focus:scale-110 hover:scale-110 active:scale-105 ease-in-out bg-[#46C2CB] outline-none border-2 hover:bg-[#46C2CB] font-bold py-3 px-4 sm:w-40 sm:font-medium sm:p-1 dark:bg-gradient-to-r from-indigo-900 via-sky-900 to-indigo-900 dark:hover:bg-sky-900 '
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}>
                Start
              </motion.button>
            </Link>
          </div>
        </div>
         <motion.div className='border-4 overflow-hidden rounded-full p-5 ig:mt-12 '
           initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}>
            <Image 
         priority
          src={itsme}
          alt='my logo'
          width={400}
          height={533}
          className='xl:w-[300px] xl:h-[400px] bg-cover mm:w-[200px] mm:h-[250px] mm:bg-cover'
        />
          </motion.div>
      </main>
    </>
  );
}

export default Header;
