"use client";
import Link from "next/link";
import React, {useEffect, useState} from "react";

function UpButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    handleScroll();

    window.addEventListener("scroll", () => {
      handleScroll();
    });
  });

  return visible ? (
    <Link
      href="#navbar"
      className="w-11 h-11 flex items-center justify-center bg-primary hover:bg-blue-600 duration-300 fixed bottom-12 right-12 rounded-full z-50"
    >
      <img src="/images/icons8-arrow-up-24.png" alt="" />
    </Link>
  ) : null;
}

export default UpButton;
