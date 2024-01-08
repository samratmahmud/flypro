import Button from "@/components/common/Button";
import Link from "next/link";
import React from "react";

function Cameradetails() {
  return (
    <section className="bg-gray-200">
      <div className="container flex items-center justify-between lg:gap-14 gap-7">
        <div className="md:w-[50%] py-24">
          <h2 className="mb-2.5">
            Integrated Flypro camera <br /> Stabilizes every single pixel <br />{" "}
            in the image.
          </h2>
          <p className="mb-4">
            Flypro camera includes a processor that calculates and compensates
            ad-ditional movements, and highly sensitive 3-axis gambal stabilizes
            up to2000 vibrations per second, ± 0.02° accuracy.
          </p>
          <Link href="/">
            <Button name="Get Your Cam" />
          </Link>
        </div>
        <div className="w-[50%] hidden md:block">
          <img src="/images/details.png" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Cameradetails;
