/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const photos = [
   "/images/gallery-4.jpg",
   "/images/gallery-5.jpg",
   "/images/gallery-1.jpg",
   "/images/gallery-2.jpg",
   "/images/gallery-3.jpg",
   "/images/gallery-4.jpg",
   "/images/gallery-5.jpg",
   "/images/gallery-1.jpg",
   "/images/gallery-2.jpg",
   "/images/gallery-3.jpg",
];

function Screenshots() {
   const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               dots: true,
            },
         },
      ],
   };

   return (
      <section id="screenshot" className="overflow-hidden">
         <div className="relative">
            <Slider {...settings}>
               {photos.map((items, index) => (
                  <img key={index} src={items} alt="" />
               ))}
            </Slider>
            <div className="flex justify-center">
               <div className="absolute bottom-0 hidden md:block">
                  <img src="/images/remote.png" alt="" />
               </div>
            </div>
         </div>
      </section>
   );
}

export default Screenshots;
