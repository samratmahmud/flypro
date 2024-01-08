import React from "react";

function Testimonial() {
  return (
    <section className="max-w-[1920px] mx-auto bg-testmonial-bg bg-cover bg-no-repeat lg:py-[180px] md:py-36 sm:py-24 py-[60px]">
      <div className="container">
        <h2 className="lg:text-4xl md:text-8xl text-xl text-white text-center">
          Relax and enjoy the ride
        </h2>
        <p className="text-white text-center">
          Uses GPS + GLONASS positioning, sets pinned location faster and more
          accurately, <br className="hidden md:block" /> making hover more
          stable.
        </p>
      </div>
    </section>
  );
}

export default Testimonial;
