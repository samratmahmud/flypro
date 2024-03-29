/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const footerLink = [
   {
      logo: "/images/logo (1).png",
      describtion:
         "Flypro camera is an optical for instrument for recording capturing more images may be transmitted to another location, or both.",
   },
   {
      title: "ABOUT US",
      link: [
         {
            name: "Warranty",
            href: "/",
         },
         {
            name: "Press & Media",
            href: "/",
         },
         {
            name: "User Agreement",
            href: "/",
         },
         {
            name: "Privacy Policy",
            href: "/",
         },
         {
            name: "User Guide",
            href: "/",
         },
      ],
   },
   {
      title: "SHOP AND LEARN",
      link: [
         {
            name: "Product Authentication",
            href: "/",
         },
         {
            name: "Flypro Blog",
            href: "/",
         },
         {
            name: "Other Products",
            href: "/",
         },
         {
            name: "Flypro ZxB3",
            href: "/",
         },
         {
            name: "Integrity & Compliance",
            href: "/",
         },
      ],
   },
   {
      title: "FOLLOW US ON",
      link: [
         {
            name: "Facebook",
            href: "https://www.facebook.com/",
         },
         {
            name: "Twitter",
            href: "https://twitter.com/",
         },
         {
            name: "Instagram",
            href: "https://www.instagram.com/",
         },
         {
            name: "Behance",
            href: "https://www.behance.net/",
         },
         {
            name: "Linkedin",
            href: "https://bd.linkedin.com/",
         },
      ],
   },
];

function Footer() {
   return (
      <section className="bg-slate-950 md:pt-20 pt-[60px]">
         <div
            aria-label="inputField"
            className="flex max-w-[450px] mx-auto md:-mt-[110px] -mt-[90px]"
         >
            <input
               className="text-sm py-3 text-gray-900 px-6 outline-none bg-gray-200 w-full rounded-s-[30px]"
               type="email"
               id="email"
               placeholder="Enter Your Email Address..."
            />
            <button className="bg-primary text-white text-xs font-semibold leading-[57px] px-4 rounded-e-[30px] focus:border-2 focus:border-black uppercase border-2 border-primary">
               Subscribe
            </button>
         </div>
         <div className="container mt-8 md:pb-20 pb-[60px]">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-[30px]">
               {footerLink.map(({logo, describtion, title, link}, index) => (
                  <div key={index} className="">
                     {logo && (
                        <div className="mb-4">
                           <img src={logo} alt="" />
                        </div>
                     )}
                     {describtion && (
                        <div className="text-gray-500">{describtion}</div>
                     )}
                     <h3 className="text-sm font-semibold mb-2.5 text-gray-200">
                        {title}
                     </h3>
                     <div className="flex flex-col gap-1">
                        {link?.map(({name, href}, index) => (
                           <Link
                              href={href}
                              key={index}
                              className="text-gray-500 text-sm leading-6 hover:text-white duration-500"
                              target="_blank"
                           >
                              {name}
                           </Link>
                        ))}
                     </div>
                  </div>
               ))}
            </div>
         </div>
         <div className="border border-gray-300" />
         <div className="text-sm leading-6 text-white text-center py-5">
            © 2019 Flypro Powered by ThemeEaster
         </div>
      </section>
   );
}

export default Footer;
