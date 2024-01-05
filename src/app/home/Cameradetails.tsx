import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

function Cameradetails() {
  return (
    <section className="bg-gray-200">
      <div className="container flex items-center justify-between gap-14">
        <div className="max-w-[50%] py-24">
          <h2 className="max-w-[400px] mb-2.5">
            Integrated Flypro camera Stabilizes every single pixel in the image.
          </h2>
          <p className="mb-4">
            Flypro camera includes a processor that calculates and compensates
            ad-ditional movements, and highly sensitive 3-axis gambal stabilizes
            up to2000 vibrations per second, ± 0.02° accuracy.
          </p>
          <Link href="">
            <Button name="Get Your Cam" />
          </Link>
        </div>
        <div className="flex_0_[50%]">
          <img src="/images/details.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Cameradetails;
