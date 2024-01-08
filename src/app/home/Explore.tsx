import React from "react";

const exploreCard = [
  {
    icon: "/images/icons8-camera-50.png",
    title: "Integrated Flypro camera",
    describtion:
      "Integrated Flypro camera Stabilizes every single pixelin the image.",
  },
  {
    icon: "/images/icons8-recycle-90.png",
    title: "3-axis stablization",
    describtion:
      "Integrated Flypro camera Stabilizes every single pixelin the image.",
  },
  {
    icon: "/images/icons8-video-100.png",
    title: "4K / 1080P video capture",
    describtion:
      "Integrated Flypro camera Stabilizes every single pixelin the image.",
  },
  {
    icon: "/images/icons8-equalizer-60.png",
    title: "Full HD low-distortion",
    describtion:
      "Integrated Flypro camera Stabilizes every single pixelin the image.",
  },
  {
    icon: "/images/icons8-image-gallery-50.png",
    title: "Real-time image transmission",
    describtion:
      "Integrated Flypro camera Stabilizes every single pixelin the image.",
  },
  {
    icon: "/images/icons8-my-location-50.png",
    title: "Wide angle lens",
    describtion:
      "Integrated Flypro camera Stabilizes every single pixelin the image.",
  },
];

function Explore() {
  return (
    <section>
      <div className="container md:my-20 my-[60px]">
        <h2 className="text-center mb-2.5">
          It's time to explore new horizons!
        </h2>
        <p className="text-center mb-10">
          Integrated Flypro camera Stabilizes every single pixelin the image.
        </p>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-[30px]">
          {exploreCard.map(({icon, title, describtion}, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-5 group"
            >
              <i className="bg-gray-200 rounded p-4 mb-2.5 max-w-20 aspect-square group-hover:scale-110 duration-300">
                <img src={icon} alt="" />
              </i>
              <h3 className="text-center mb-1.5">{title}</h3>
              <p className="text-center">{describtion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Explore;
