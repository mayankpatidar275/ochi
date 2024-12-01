import React from "react";

const marqueeText = "We are ochi";

function Marquee() {
  return (
    <div className="bg-[#004d43] py-20 rounded-tr-2xl rounded-tl-2xl">
      <div className="border-y-2">
        <h1 className="text-[24vw] leading-none font-FoundersGroteskXCond-Bold uppercase pt-4 -mb-4 lg:pt-8 lg:-mb-[5.5rem] md:pt-6 md:-mb-14">
          {marqueeText}
        </h1>
      </div>
    </div>
  );
}

export default Marquee;
