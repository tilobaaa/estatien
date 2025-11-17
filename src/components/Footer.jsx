import React from "react";
import logoSvg from "../assets/SVGs/logo.svg";
import messageSvg from "../assets/SVGs/message.svg";
import sendSvg from "../assets/SVGs/send-arrow.svg";
import estText from "../assets/SVGs/est-text.svg";
import facebookSvg from "../assets/SVGs/facebook.svg";
import linkedInSvg from "../assets/SVGs/linkedin.svg";
import twitterSvg from "../assets/SVGs/twitter.svg";
import youtubeSvg from "../assets/SVGs/youtube.svg";

const Footer = () => {
  return (
    <div className="px-4">
       <div className="flex flex-col gap-[1.88rem] my-[3.12rem] py-[3.12rem] border-y border-y-grey-15">
          <div>
            <h2 className="text-[1.75rem] font-semibold leading-[150%] text-white">
              Start Your Real Estate Journey Today
            </h2>
            <p className="text-grey-60 text-sm font-medium leading-[150%]">
              Your dream property is just a click away. Whether you're looking
              for a new home, a strategic investment, or expert real estate
              advice, Estatein is here to assist you every step of the way. Take
              the first step towards your real estate goals and explore our
              available properties or get in touch with our team for
              personalized assistance.
            </p>
          </div>
          <button className="rounded-lg bg-purple-60 cursor-pointer w-full py-3.5 px-5 text-sm font-medium text-white">
            Explore Properties
          </button>
        </div>
      <div className="lg:flex gap-20">
        <div className="flex flex-col gap-5 ">
          <div className="flex items-center">
            <img
              className="w-[2.125rem] h-[2.125rem]"
              src={logoSvg}
              alt="logo"
            />
            <img className="h-[0.90856rem]" src={estText} alt="" />
          </div>
          <div className="flex gap-[0.38rem] items-center border border-grey-15 bg-grey-08 rounded-lg py-3.5 px-5">
            <img className="w-5 h-5" src={messageSvg} alt="" />
            <input
              className="w-full text-grey-60 focus:outline-none"
              type="text"
              placeholder="Enter your Email"
            />
            <img className="w-6 h-6 cursor-pointer" src={sendSvg} alt="" />
          </div>
        </div>
        {/* Home, about us, Properties, Services */}
        <div className="my-[3.12rem] grid grid-cols-2 lg:grid-cols-5 gap-5 lg:gap-20">
          {/* Home */}
          <div className="border-b border-b-grey-15 pb-5">
            <p className="text-grey-60 text-[1rem] font-medium leading-6 tracking-[-0.00675rem] mb-4">
              Home
            </p>
            <ul className="flex flex-col gap-2 text-white text-sm font-medium leading-6 tracking-[-0.006rem] cursor-pointer">
              <li>Hero Section</li>
              <li>Features</li>
              <li>Properties</li>
              <li>Testimonials</li>
              <li>FAQs</li>
            </ul>
          </div>
          {/* About */}
          <div className="border-b border-b-grey-15 pb-5">
            <p className="text-grey-60 text-[1rem] font-medium leading-6 tracking-[-0.00675rem] mb-4">
              About Us
            </p>
            <ul className="flex flex-col gap-2 text-white text-sm font-medium leading-6 tracking-[-0.006rem] cursor-pointer">
              <li>Our Story</li>
              <li>Our Works</li>
              <li>How It Works</li>
              <li>Our Team</li>
              <li>Our Clients</li>
            </ul>
          </div>
          {/* Properties */}
          <div className="border-b border-b-grey-15 pb-5">
            <p className="text-grey-60 text-[1rem] font-medium leading-6 tracking-[-0.00675rem] mb-4">
              Properties
            </p>
            <ul className="flex flex-col gap-2 text-white text-sm font-medium leading-6 tracking-[-0.006rem] cursor-pointer">
              <li>Portfolio</li>
              <li>Categories</li>
            </ul>
          </div>
          {/* Services */}
          <div className="border-b border-b-grey-15 pb-5">
            <p className="text-grey-60 text-[1rem] font-medium leading-6 tracking-[-0.00675rem] mb-4">
              Services
            </p>
            <ul className="flex flex-col gap-2 text-white text-sm font-medium leading-6 tracking-[-0.006rem] cursor-pointer">
              <li>Valuation Mastery</li>
              <li>Strategic Marketing</li>
              <li>Negotiation Wizardry</li>
              <li>Closing Success</li>
              <li>Property Management</li>
            </ul>
          </div>
          {/* Contact Us */}
          <div className="border-b border-b-grey-15 pb-5">
            <p className="text-grey-60 text-[1rem] font-medium leading-6 tracking-[-0.00675rem] mb-4">
              Contact Us
            </p>
            <ul className="flex flex-col gap-2 text-white text-sm font-medium leading-6 tracking-[-0.006rem] cursor-pointer">
              <li>Contact Form</li>
              <li>Our Offices</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row-reverse lg:justify-between flex-col gap-5 items-center -mx-4 bg-grey-10 px-4 py-5">
        <div className="flex gap-2">
          <div>
            <div className="p-5 bg-grey-08 w-fit rounded-full">
              <img className="w-4 h-4 " src={facebookSvg} alt="" />
            </div>
          </div>
          <div>
            <div className="p-5 bg-grey-08 w-fit rounded-full">
              <img className="w-4 h-4 " src={linkedInSvg} alt="" />
            </div>
          </div>
          <div>
            <div className="p-5 bg-grey-08 w-fit rounded-full">
              <img className="w-4 h-4 " src={twitterSvg} alt="" />
            </div>
          </div>
          <div>
            <div className="p-5 bg-grey-08 w-fit rounded-full">
              <img className="w-4 h-4 " src={youtubeSvg} alt="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-[0.62rem] lg:gap-5 text-sm leading-6 tracking-[-0.00525rem] font-medium text-center text-white">
          <p>@2023 Estatein. All Rights Reserved.</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
