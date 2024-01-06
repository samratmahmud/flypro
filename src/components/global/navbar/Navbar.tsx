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
    href: "/",
  },
  {
    name: "Screenshots",
    href: "/",
  },
  {
    name: "Pricing",
    href: "/",
  },
  {
    name: "Reviews",
    href: "/",
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
      className={`fixed left-0 right-0 z-[9999] duration-300 ${
        isVisible ? "shadow-sm py-0 bg-primary" : "py-[5px]"
      }`}
    >
      <div className="container">
        <div className="flex justify-between items-center gap-3">
          <Link href="/" className="py-2.5">
            <img src="/images/logo (1).png" alt="" />
          </Link>
          <div className="flex items-center gap-5">
            <div className="hidden md:block">
              <div className="flex items-center gap-5">
                {navLink.map(({name, href}, index) => (
                  <Link
                    href={href}
                    key={index}
                    className="lg:text-sm text-6xl leading-[70px] text-white font-semibold"
                  >
                    {name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-5">
              <Link href="/">
                <Button name="Buy Now" color="blue" />
              </Link>
              <div
                onClick={toggle}
                role="button"
                className={`py-2 px-1 md:hidden relative ${
                  show ? "" : "overflow-hidden"
                }`}
              >
                <img
                  className="w-5 aspect-square"
                  src="/images/icons8-menu-50.png"
                  alt=""
                />
                <div
                  className={`flex flex-col gap-5 bg-gray-200 w-full duration-500 px-12 right-0  absolute top-12 ${
                    show ? "min-h-[250px]" : "h-[0px]"
                  }`}
                >
                  {navLink.map(({name, href}, index) => (
                    <Link
                      href={href}
                      key={index}
                      className="text-sm  font-semibold"
                    >
                      {name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
