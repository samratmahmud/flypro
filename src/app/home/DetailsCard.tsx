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

function DetailsCard() {
  return (
    <section>
      <div className="container mt-[200px] mb-20">
        <div className="flex gap-[30px]">
          {cards.map(({icon, title, describtion}, index) => (
            <div
              key={index}
              className="bg-gray-200 py-9 px-4 flex flex-col items-center rounded-md"
            >
              <i className="mb-4">
                <img className="w-12" src={icon} alt="" />
              </i>
              <h3 className="text-lg font-semibold text-gray-900 mb-1.5">
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

export default DetailsCard;
