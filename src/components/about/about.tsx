"use client"
import React from 'react';
import { motion } from 'framer-motion';
import Hello from "@/components/formotion";
import Najot from './najot';
const About = () => {
  return (
    <div>
    <motion.div
      className="items-center justify-between max-w-[1180px] flex mx-auto text-center leading-8 mt-24 scroll-mt-28 xl:justify-evenly ig:flex-col ig:mt-10 px-10"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    
    >
      
      <div className="max-w-[600px] flex flex-col gap-y-6">
        <h2 className='font-bold text-3xl '>About me</h2>
        <p className="mb-3 xl:max-w-[450px] xl:text-sm ig:text-base ig:max-w-[600px] mm:text-xs">
          Hello! I`m Kamola, a budding frontend developer eager to explore the exciting world of web development.
          I studied Frontend React at Najot Ta`lim education. While I may not have years of experience under my 
          belt just yet, my passion for creating engaging user interfaces and immersive digital 
          experiences knows no bounds. My journey into the realm of frontend development began with a 
          curiosity-driven dive into HTML and CSS, where I quickly fell in love with the art of crafting 
          visually stunning web pages. As I delved deeper into the world of JavaScript, I found myself faced 
          with challenges and moments of frustration, but each hurdle only fueled my determination to learn and grow.
        </p>
      </div>
      <div className="">
        <Hello/>
      </div>
      
    </motion.div>
    <Najot/>
    </div>
  );
};

export default About;