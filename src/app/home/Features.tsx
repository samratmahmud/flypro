import React from "react";

const cards = [
  {
    icon: "/images/icons8-camera-50.png",
    title: "Camera Resulation",
    describtion:
      "Flypro camera is an optical instrument for recording or capturing images",
  },
  {
    icon: "/images/icons8-clock-50.png",
    title: "High Speed Shooting",
    describtion:
      "Flypro camera is an optical instrument for recording or capturing images",
  },
  {
    icon: "/images/icons8-equalizer-60.png",
    title: "Powerful Control Panel",
    describtion:
      "Flypro camera is an optical instrument for recording or capturing images",
  },
  {
    icon: "/images/icons8-pull-up-bar-50.png",
    title: "Healthy Battery Life",
    describtion:
      "Flypro camera is an optical instrument for recording or capturing images",
  },
];

function Features() {
  return (
    <section>
      <div className="container mt-[200px] md:mb-20 mb-[60px]">
        <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-[30px]">
          {cards.map(({icon, title, describtion}, index) => (
            <div
              key={index}
              className="bg-gray-200 lg:py-9 py-[30px] lg:px-4 px-2.5 flex flex-col items-center rounded-md hover:scale-105 duration-300"
            >
              <i className="mb-4">
                <img className="w-12" src={icon} alt="" />
              </i>
              <h3 className="md:text-lg text-base font-semibold text-gray-900 mb-1.5">
                {title}
              </h3>
              <p className="text-center">{describtion}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="border border-slate-600" />
    </section>
  );
}

export default Features;
