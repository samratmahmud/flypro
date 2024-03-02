/* eslint-disable @next/next/no-img-element */
"use client";
import Button from "@/components/common/Button";
import Link from "next/link";
import React, {useEffect, useState} from "react";

const navLink = [
   {
      name: "Home",
      href: "/",
   },
   {
      name: "Features",
      href: "#features",
   },
   {
      name: "Screenshots",
      href: "#screenshot",
   },
   {
      name: "Pricing",
      href: "#pricing",
   },
   {
      name: "Reviews",
      href: "#reviews",
   },
];

function Navbar() {
   const [isVisible, setIsVisible] = useState(false);
   const [show, setShow] = useState(false);
   const toggle = () => setShow((prev) => !prev);

   useEffect(() => {
      const handelScroll = () => {
         if (window.scrollY >= 10) {
            setIsVisible(true);
         } else {
            setIsVisible(false);
         }
      };

      handelScroll();

      window.addEventListener("scroll", () => {
         handelScroll();
      });
   }, []);

   return (
      <nav
         id="navbar"
         className={`fixed left-0 right-0 z-[9999] duration-300 max-h-20 ${
            isVisible ? "shadow-md py-0 bg-primary" : "py-2.5"
         }`}
      >
         <div className="container">
            <div className="flex justify-between items-center gap-3">
               <Link href="/" className="py-1.5">
                  <img src="/images/logo (1).png" alt="" />
               </Link>
               <div className="flex items-center gap-5">
                  <div className="hidden md:flex items-center gap-5">
                     {navLink.map(({name, href}, index) => (
                        <Link
                           href={href}
                           key={index}
                           className="lg:text-7xl text-6xl text-white font-semibold relative group"
                        >
                           {name}
                           <span
                              className={`absolute bottom-6 left-0 h-0.5 bg-white duration-500 ease-in w-full max-w-0 group-hover:max-w-[300px]`}
                           />
                        </Link>
                     ))}
                  </div>
                  <div className="flex items-center gap-5">
                     <Link href="/">
                        <Button name="Buy Now" color="blue" />
                     </Link>
                     <button
                        onClick={toggle}
                        className="py-[25px] px-1 md:hidden"
                     >
                        <img
                           className="w-5 aspect-square"
                           src="/images/icons8-menu-50.png"
                           alt=""
                        />
                     </button>
                  </div>
               </div>
            </div>
            <div className="relative md:hidden">
               <div
                  className={`flex flex-col bg-gray-200 w-full duration-300 right-0 top-0 left-0 absolute overflow-hidden ${
                     show ? "max-h-screen ease-in" : "max-h-0 ease-out"
                  }`}
               >
                  {navLink.map(({name, href}, index) => (
                     <Link
                        href={href}
                        key={index}
                        className="text-sm leading-[22px] px-[15px] py-2.5 font-semibold"
                     >
                        {name}
                     </Link>
                  ))}
               </div>
            </div>
         </div>
      </nav>
   );
}

export default Navbar;
