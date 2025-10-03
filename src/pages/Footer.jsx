import React from "react";
import { GoArrowUp } from "react-icons/go";

function Footer() {
  return (
    <>
      <div className="bg-white ">
        <div className="main-container font-heading ">
          <div className="flex justify-between items-center py-15 lg:py-30 text-black">
            <h1>@ 2025</h1>
            <div className="flex gap-4 items-center">
              <h1>back to top </h1>
              <div className="bg-black  h-10 w-10 rounded-full flex justify-center items-center">
                <a href="">
                  <GoArrowUp className="text-white " />
                </a>
              </div>
            </div>
          </div>

          <div className="uppercase font-heading">
            <p className="text-lg lg:ml-4 leading-[0.1] text-black">
              have a project in mind?
            </p>
            <h1 className="text-[58px] lg:text-[225px] tracking-tight text-[#EAEAEA] leading-[1.2] lg:leading-[0.8]">
              let's talk
            </h1>
          </div>

          <div className="lg:flex justify-between py-10 lg:py-20">
            <div className=" flex justify-center items-center lg:flex gap-4">
              <a href="" className="bg-black py-2 px-5 rounded-full">
                Linkedin
              </a>
              <a href="" className="bg-black py-2 px-5 rounded-full">
                GitHub
              </a>
            </div>
            <h1 className="text-[10px] py-5 lg:text-xl text-[#d0d0d0] text-center">
              Design and Development:
              <span className="text-black">Prathmesh Chougule</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
