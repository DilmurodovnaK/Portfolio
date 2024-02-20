"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import image1 from '@/components/img/image1.jpg';
import image2 from '@/components/img/image2.jpg';
import image3 from '@/components/img/image3.jpg';
import image4 from '@/components/img/image4.jpg';
import { motion, useScroll, useTransform } from 'framer-motion'

const Projects = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className='flex flex-col items-center gap-y-10 px-10 ss:px-0 tg:gap-y-0 '>
      <h3 className='text-4xl font-bold'>Projects</h3>
      <Link href={'https://stream-vibe-oarj.vercel.app/'}> 
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex  tg:pb-4  tg:border-none tg:max-h-[240px] tg:p-3 tg:flex-col mx-auto border-2 border-black dark:border-white p-7 rounded-lg max-w-[1200px] h-[350px] items-center"
        >
          <div className="ss:max-w-[500px]">
            <Image src={image1} alt="photo" width={500} height={700}  />
          </div>
          <div className="md:hidden tg:hidden gap-y-7 tg:gap-y-3 flex flex-col justify-center items-center text-center w-[600px] ml-12 tg:ml-0 ">
            <h3 className="font-bold text-2xl">Stream Vibe</h3>
            <p className='text-lg font-bold'>
              This project is made with API, and you can find the quirk you want by using the search button here
            </p>
            <p className='text-lg font-bold'>[`React`, `HTML`, `JavaScript`, `Tailwind`, `Vite`]</p>
          </div>
        </motion.div>
      </Link>

      <Link href={'https://admin-panel-ibhq.vercel.app/'}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
            className="flex tg:pb-4 tg:max-h-[240px] tg:border-none tg:h-[400px] tg:p-3 tg:flex-col mx-auto border-2 border-black dark:border-white p-7 rounded-lg max-w-[1200px] h-[350px] items-center"
        >
          <div className="tg:hidden gap-y-7 tg:gap-y-3 flex flex-col justify-center items-center text-center w-[600px] mr-12 tg:ml-0 ">
            <h3 className="font-bold text-2xl ">Admin panel</h3>
            <p className='text-lg font-bold'>
              This is an Admin panel, but there is no API here, it is a static website
            </p>
            <p className='text-lg font-bold'>[ `React``, `Javascript`, `Vite`, `Tailwind`, `Html`, `MUI`]
            </p>
          </div>

          <div className="">
            <Image src={image2} alt="photo" width={500} height={700} />
          </div>

        </motion.div>
      </Link>

      <Link href={'https://komola-dilmurodovna.netlify.app/'}>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
           className="flex tg:pb-4 tg:max-h-[240px] tg:border-none tg:h-[400px] tg:p-3 tg:flex-col mx-auto border-2 border-black dark:border-white p-7 rounded-lg max-w-[1200px] h-[350px] items-center"
        >
          <div className="">
            <Image src={image3} alt="photo" width={500} height={700} />
          </div>
          <div className="md:hidden gap-y-7 tg:hidden tg:gap-y-3 flex flex-col justify-center items-center text-center w-[600px] ml-12 tg:ml-0 ">
            <h3 className="font-bold text-2xl">Portfolio</h3>
            <p className='text-lg font-bold'>
              `Many animations have been added to the portfolio and there is also a dark mode`,
            </p>
            <p className='text-lg font-bold'>[`React`, `Next.js`, `Typescript`, `Tailwind`, `Framer Motion`, `Javascript`]
            </p>
          </div>
        </motion.div>
      </Link>
      <Link href={'https://flagsall.vercel.app/'}>
        <motion.div
          whileHover={{ scale: 1.1 }}
whileTap={{ scale: 0.9 }}
           className="flex tg:pb-4 tg:max-h-[240px] tg:border-none tg:h-[400px] tg:p-3 tg:flex-col mx-auto border-2 border-black dark:border-white p-7 rounded-lg max-w-[1200px] h-[350px] items-center"
        >
         <div className="tg:hidden gap-y-7 tg:gap-y-3 flex flex-col justify-center items-center text-center w-[600px] mr-12 tg:ml-0 ">
            <h3 className="font-bold text-2xl tg:hidden">Flags_page</h3>
            <p className='text-lg font-bold'>
              This is a Flags page, there are all flags, you can find a lot of flags
            </p>
            <p className='text-lg font-bold'>[`HTMl`, `CSS`, `Javascript`]</p>
          </div>

          <div className="">
            <Image src={image4} alt="photo" width={500} height={700} />
          </div>

        </motion.div>
      </Link>

    </motion.div>
  )
}

export default Projects;