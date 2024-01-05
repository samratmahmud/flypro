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
          <Link href="/">
            <img src="/images/logo (1).png" alt="" />
          </Link>
          <div className="flex items-center gap-5">
            {navLink.map(({name, href}, index) => (
              <Link
                href={href}
                key={index}
                className="text-sm leading-[70px] text-white font-semibold"
              >
                {name}
              </Link>
            ))}
            <Link href="/">
              <Button name="Buy Now" color="blue" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
