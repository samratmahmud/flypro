import React from "react";

function Testimonial() {
  return (
    <section className="max-w-[1920px] mx-auto">
      <div className="relative">
        <div className="bg-cover bg-no-repeat">
          <img className="w-full" src="/images/cta-bg.jpg" alt="" />
        </div>
        <div className="absolute top-[100px] bottom-[100px] grid place-content-center w-full">
          <div className="container">
            <h2 className="text-4xl text-white text-center">
              Relax and enjoy the ride
            </h2>
            <p className="text-white text-center">
              Uses GPS + GLONASS positioning, sets pinned location faster and
              more accurately, <br /> making hover more stable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
