"use client"

import React from "react";
import Slider from "react-slick"; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { skills } from "@/app/const/data";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mx-auto my-10 max-w-[1000px]  tg:max-w-[400px] sm:w-[200px] text-center">
        <h3 className="font-bold text-2xl text-center mb-4 mt-20">My Skills</h3>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <div key={index} className="px-4 max-w-[500px] ">
            <div className="bg-white border mb-8 dark:bg-slate-600 border-gray-200 p-4 rounded-md shadow-md">
              <h3 className="text-lg font-semibold ">{skill}</h3>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;