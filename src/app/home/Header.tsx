import Link from "next/link";
import React from "react";

function Header() {
  return (
    <section className="relative">
      <div className="bg-cover bg-no-repeat bg-center">
        <img className="w-full" src="/images/hero-bg.png" alt="" />
      </div>
      <div className="absolute top-[200px] z-10 left-0 right-0">
        <div className="container">
          <h1 className="text-5xl text-center text-white mb-2.5 font-OpenSans">
            Flypro is the best landing <br /> page to showcause your product.
          </h1>
          <p className="text-white text-center mb-4">
            Explore a new perspective at your fingertips.
          </p>
          <Link
            href="https://www.youtube.com/"
            target="_blank"
            className="flex gap-2.5 items-center justify-center group mb-6"
          >
            <img
              className="group-hover:scale-125 duration-300"
              src="/images/icons8-video-48.png"
              alt=""
            />
            <span className="text-sm text-white font-medium">Watch Video</span>
          </Link>
          <div className="flex justify-center animation-bounce">
            <img src="/images/hero-cam.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
