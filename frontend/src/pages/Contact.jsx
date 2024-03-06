import React from "react";
import { IoMdCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
const Contact = () => {
  return (
    <div className=" h-auto relative ">
      <div className="absolute  top-20 left-[100px] w-[350px] bg-white z-10 p-4">
        <p className="font-bold text-2xl">Learn from their experience</p>
        <p>
          Our instructors have real-world knowledge to help you achieve your
          goals. Courses start at ₹499 through March 7.
        </p>
      </div>
      <img
        className=" object-cover w-full h-[50vh] brightness-75 p-4  "
        src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/b92831e1-1815-4c1d-9001-356c5b4fb0cc.jpg"
        alt="poster img"
      />
      <div className="grid grid-cols-3">
        <div className="p-4 flex items-center justify-center border-2 ">
          <iframe
            style={{ height: "400px", width: "400px" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.3542851823327!2d77.32167797498008!3d19.17972218204631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd1d6fbe138ad81%3A0x9e88bbe86ec52250!2sMGM&#39;s%20College%20Of%20Engineering!5e0!3m2!1sen!2sin!4v1709655751074!5m2!1sen!2sin"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="flex justify-evenly   items-center flex-col">
          <h1 className="mb-10 text-4xl ">Meet Us</h1>
          <div>
            <div className="flex">
              <IoMdCall size={20} />
              <p className="mb-2 ml-4">+40127894561</p>
            </div>
            <div className="flex">
              <IoMdMail size={20} />
              <p className="mb-2 ml-4">@Contact.co.in</p>
            </div>
            <div className="flex ">
              <IoLocationSharp size={20} />
              <p className="mb-2 ml-4">Mgm's College of enginnnering ,Nanded</p>
            </div>
          </div>
        </div>
        <div className="flex justify-evenly items-center flex-col border-2">
          <h1 className="text-4xl mb-10">Contact Us </h1>
          <div className="text-justify">
            <p>
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 mb-4 w-[250px] border-2 outline-none rounded-lg"
              />
            </p>
            <button className="p-2 border-2 w-24 rounded-lg bg-blue-600 text-white">
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
