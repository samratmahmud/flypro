"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const peopleReview = [
  {
    picture: "/images/testi-1.jpg",
    describtion:
      "Flypro camera is an optical for instrument for recording capturing images, which may be transmitted to another location, or both. The images may be individual still photographs.",
    name: "Michel brown",
  },
  {
    picture: "/images/testi-2.jpg",
    describtion:
      "Flypro camera is an optical for instrument for recording capturing images, which may be transmitted to another location, or both. The images may be individual still photographs.",
    name: "Verra pamela",
  },
  {
    picture: "/images/testi-3.jpg",
    describtion:
      "Flypro camera is an optical for instrument for recording capturing images, which may be transmitted to another location, or both. The images may be individual still photographs.",
    name: "Angelina rose",
  },
];

function Reviews() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="overflow-hidden">
      <div className="container md:my-20 my-[60px]">
        <h2 className="text-center mb-2.5">What people says.</h2>
        <p className="text-center mb-10">
          Flypro camera is an optical instrument for capturing super images.
        </p>
        <Slider {...settings}>
          {peopleReview.map(({picture, name, describtion}, index) => (
            <div key={index} className="text-center">
              <i className="mb-5 flex justify-center">
                <img
                  className="w-[70px] aspect-square rounded-full"
                  src={picture}
                  alt=""
                />
              </i>
              <p className="max-w-[70%] mx-auto mb-4">{describtion}</p>
              <h3 className="text-base font-medium">{name}</h3>
              <div className="flex justify-center gap-0.5">
                {[...Array(5)].map((_, index) => (
                  <img
                    key={index}
                    className="w-3"
                    src="/images/icons8-star-48.png"
                    alt=""
                  />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Reviews;
