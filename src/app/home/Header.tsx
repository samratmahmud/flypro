import Link from "next/link";
import React from "react";

function Header() {
  return (
    <section className="relative z-0 bg-header-bg bg-no-repeat bg-cover bg-bottom lg:pt-[200px] md:pt-44 pt-36 lg:min-h-[650px] min-h-[570px]">
      <div className="container">
        <h1 className="lg:text-5xl md:text-4xl text-2xl text-center text-white mb-2.5 font-OpenSans">
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
      </div>
      <div className="bg-dron-camera absolute -bottom-[200px] bg-no-repeat [background-position:bottom_center] -z-10 w-full h-full animation-bounce" />
    </section>
  );
}

export default Header;
