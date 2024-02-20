"use client"

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin } from 'react-icons/io';
import { FaTelegramPlane } from 'react-icons/fa';
import logo from '../img/trial.svg';
import menu from '../img/menu.svg';


const Nav = () => {
    const handleOptionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    if (selectedOption) {
      window.location.href = selectedOption;
    }
  };
  return (
    <motion.div
      className=" flex justify-between px-10 py-4 items-center border-b z-20 bg-white dark:bg-gradient-to-t from-teal-900 to-indigo-900 dark:bg-opacity-100"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
       
      <div>
        <Image
          src={logo}
          alt="my logo"
          width={120}
          height={40}
          className="rounded-sm"
          priority
        />
      </div>
      <div className='flex items-center gap-x-8'>
  <select
    className="p-2 px-4 rounded bg-gray-200 lg:hidden"
    onChange={handleOptionChange}
  >
    <option value="https://nextjs.org/"></option>
    <option value="https://najottalim.uz/">Najot Ta‘lim</option>
    <option value="https://react.dev/" >React</option>
    <option value="https://tailwindcss.com/">Other Page</option>
  </select>

  <div className="flex gap-x-6 lg:hidden " >
    <a href="https://github.com/DilmurodovnaK" target="_blank"
    >
      <BsGithub />
    </a>
    <a href="https://www.linkedin.com/in/komola-dilmurodovna-3808902aa/" target="_blank">
      <IoLogoLinkedin />
    </a>
    <a href="https://t.me/dilmurodovna_k" target="_blank">
      <FaTelegramPlane />
    </a>
  </div>
  </div>

  {/* <div className="hidden lg:block pl-24 cursor-pointer">
    <Image src={menu} alt="my logo" width={26} height={40} priority />
  </div>  */}
</motion.div>
  );
};

export default Nav;
