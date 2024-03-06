import React from "react";

const Footer = () => {
  return (
    <>
      <div className="h-[300px] bg-black text-white flex justify-between gap-5 items-center p-14">
        <div className="h-[200px] w-[200px]   p-4">
          <ul>
            <li className="cursor-pointer  m-2">Udemy buisness</li>
            <li className="cursor-pointer  m-2">Teach on udemy</li>
            <li className="cursor-pointer  m-2">Get the app</li>
            <li className="cursor-pointer  m-2">About us</li>
            <li className="cursor-pointer  m-2">Contact us</li>
          </ul>
        </div>
        <div className="h-[200px] w-[200px]  ">
          <div className="h-[200px] w-[200px]  p-4">
            <ul>
              <li className="cursor-pointer  m-2">Career</li>
              <li className="cursor-pointer  m-2">Blog</li>
              <li className="cursor-pointer  m-2">Help and support</li>
              <li className="cursor-pointer  m-2">Affiliate</li>
              <li className="cursor-pointer  m-2">Investors</li>
            </ul>
          </div>
        </div>
        <div className="h-[200px] w-[200px]  ">
          <div className="h-[200px] w-[200px]   p-4">
            <ul>
              <li className="cursor-pointer m-2">Terms</li>
              <li className="cursor-pointer m-2">Privacy policy</li>
              <li className="cursor-pointer m-2">Cookie and setting</li>
              <li className="cursor-pointer m-2">Sitemap</li>
              <li className="cursor-pointer m-2">Accesibility statment</li>
            </ul>
          </div>
        </div>
        <div>@2024 shiksha sutra,Inc</div>
      </div>
    </>
  );
};

export default Footer;
