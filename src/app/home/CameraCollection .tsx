"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Button from "@/components/common/Button";

const cameraGelary = [
  {
    thumbnail: "/images/pro-3 (1).jpg",
    title: "Flypro Light T201 camera",
    dolar: "$369",
  },
  {
    thumbnail: "/images/pro-4.jpg",
    title: "Flypro D421 camera",
    dolar: "$199",
  },
  {
    thumbnail: "/images/pro-5.jpg",
    title: "Flypro W820 camera",
    dolar: "$539",
  },
  {
    thumbnail: "/images/pro-1.jpg",
    title: "Flypro Y705 camera",
    dolar: "$499",
  },
  {
    thumbnail: "/images/pro-2.jpg",
    title: "Flypro X0205 Spycam",
    dolar: "$249",
  },
];

function CameraCollection() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };

  return (
    <section className="bg-gray-200 py-20">
      <div className="container">
        <h2 className="text-center mb-2.5">Collect your product.</h2>
        <p className="text-center mb-10">
          Flypro camera is an optical instrument for capturing super images.
        </p>
        <Slider {...settings}>
          {cameraGelary.map(({title, thumbnail, dolar}, index) => (
            <div key={index} className="group">
              <div className="bg-white text-center mx-2">
                <div className="relative overflow-hidden z-0">
                  <img
                    className="group-hover:scale-110 duration-300"
                    src={thumbnail}
                    alt=""
                  />
                  <Link
                    href="/"
                    className="absolute bottom-4 left-0 right-0 translate-y-20 z-30 group-hover:translate-y-0 duration-300"
                  >
                    <Button name="Add to Cart" />
                  </Link>
                </div>
                <div className="w-full h-[1px] bg-slate-600" />
                <div className="py-5 px-2.5">
                  <h3
                    role="button"
                    className="text-xl mb-1 hover:text-primary duration-300"
                  >
                    {title}
                  </h3>

                  <p className="mb-1.5">
                    Availity:{" "}
                    <span className="text-green-600 font-bold">In Stock</span>
                  </p>
                  <div className="flex gap-4 items-end justify-center">
                    <p className="text-red-500 font-bold">{dolar}</p>
                    <div className="-translate-y-1">
                      <div className="flex gap-0.5">
                        {[...Array(5)].map((_, index) => (
                          <img
                            key={index}
                            className="w-2.5"
                            src="/images/icons8-star-48.png"
                            alt=""
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CameraCollection;
