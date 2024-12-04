import React, { useEffect, useState } from "react";

function ReadyToStart() {
  const [rotate, setRotate] = useState(0);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const deltaX = mouseX - window.innerWidth / 2;
      const deltaY = mouseY - window.innerHeight / 2;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotate(angle - 180);
    });
  });
  return (
    <div className="w-full flex flex-col gap-32 lg:gap-52 items-center py-20 bg-[#cdea68] rounded-tr-2xl rounded-tl-2xl">
      <div className="heading justify-self-start text-zinc-900 font-FoundersGroteskXCond-Bold text-6xl md:text-7xl lg:text-9xl uppercase">
        <div className="masker -mb-3 lg:-mb-6 flex items-center justify-center w-full">
          <h1 className="flex items-center">Ready</h1>
        </div>
        <div className="masker -mb-3 lg:-mb-6 flex items-center justify-center w-full">
          <h1 className="flex items-center">To Start</h1>
        </div>
        <div className="masker -mb-3 lg:-mb-6 flex items-center justify-center w-full">
          <h1 className="flex items-center">The Project?</h1>
        </div>
      </div>
      <div className="eyes w-full my-auto ">
        <div className="relative  w-full">
          <div className="absolute flex justify-between w-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <div className="flex justify-center items-center rounded-full h-[22vw] w-[22vw] bg-white">
              <div className="relative rounded-full h-1/2 w-1/2 bg-black">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3`}
                >
                  <div className="bg-white h-4 w-4 rounded-full"></div>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center rounded-full h-[22vw] w-[22vw] bg-white">
              <div className="relative rounded-full h-1/2 w-1/2 bg-black">
                <div
                  style={{
                    transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                  }}
                  className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-3`}
                >
                  <div className="bg-white h-4 w-4 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <a
            href=""
            className="flex gap-10 bg-zinc-900 rounded-[2rem] py-4 px-5 w-fit justify-center items-center"
          >
            <div className="uppercase">Start the project</div>
            <div className="w-2 h-2 bg-zinc-200 rounded-full"></div>
          </a>
        </div>
        <div className="text-zinc-900 flex justify-center">
          <span>OR</span>
        </div>
        <div>
          <a
            href=""
            className="flex gap-10 bg-zinc-900 rounded-[2rem] py-4 px-5 w-fit justify-center items-center"
          >
            <div className="uppercase">Hello@ochi.design</div>
            <div className="w-2 h-2 bg-zinc-200 rounded-full"></div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ReadyToStart;