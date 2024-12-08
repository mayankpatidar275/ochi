import { useEffect, useState } from "react";
import EyesBg from "../assets/images/Top-Viewbbcbv-1-1440x921.jpg";

function Eyes() {
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
    <div className="relative -mt-10 w-full overflow-hidden">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="-0.7"
        className="w-[100vw]"
      >
        <picture className="w-[100vw] flex justify-center items-center">
          <img className="w-full" src={EyesBg} alt="eyes bg image" />
        </picture>
      </div>
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
  );
}

export default Eyes;
