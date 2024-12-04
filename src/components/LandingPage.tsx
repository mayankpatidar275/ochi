import { motion } from "framer-motion";
import React from "react";
import contentImg from "../assets/images/content-image01.jpg";

const heroHeading = ["We Create", "Eye-Opening", "Presentations"];
const subHeading = [
  "For public and private companies",
  "From the first pitch to IPO",
];

function LandingPage() {
  return (
    <div className="px-6 lg:px-14 w-full h-full bg-zinc-900">
      <div className="heading pt-44 pb-48 font-FoundersGroteskXCond-Bold text-6xl md:text-7xl lg:text-9xl uppercase">
        {heroHeading.map((item, index) => (
          <div
            key={index}
            className="masker -mb-3 lg:-mb-6 flex items-start justify-center w-fit"
          >
            {index == 1 && (
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "9vw" }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: "1" }}
                className=" bg-green-400 overflow-hidden rounded-md h-[2.4rem] w-16 md:h-[2.9rem] md:w-20 lg:h-[5.1rem] lg:w-32 mr-2 md:mr-3 lg:mr-5"
              >
                <img src={contentImg} alt="contentImg" />
              </motion.div>
            )}
            <h1 className="flex items-center">{item}</h1>
          </div>
        ))}
      </div>
      <hr className="absolute left-0 w-full border border-t-zinc-200" />
      <div className="sub-heading flex flex-col pb-36 md:flex-row md:gap-4 justify-between">
        {subHeading.map((item, index) => (
          <div key={index} className=" my-6 ">
            {item}
          </div>
        ))}
        <div className="my-6 uppercase">
          <a href="" className="border rounded-3xl py-2 px-3 border-zinc-200">
            Start The Project
          </a>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
