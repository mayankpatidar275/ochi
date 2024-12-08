import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";
import "./App.css";
import About from "./components/About";
import Eyes from "./components/Eyes";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import ReadyToStart from "./components/ReadyToStart";
import Reviews from "./components/Reviews";

function App() {
  const scrollRef = useRef(null);
  const locomotiveInstance = useRef<LocomotiveScroll | null>(null);

  useEffect(() => {
    // Tailwind `lg` breakpoint (1024px by default)
    const lgBreakpoint = window.matchMedia("(min-width: 1024px)");

    const initializeLocomotiveScroll = () => {
      if (lgBreakpoint.matches && scrollRef.current) {
        locomotiveInstance.current = new LocomotiveScroll();

        // console.log("LocomotiveScroll initialized.");
      }
    };

    // Initialize LocomotiveScroll if the breakpoint is matched
    initializeLocomotiveScroll();

    // Listen for changes in the viewport size
    const handleResize = () => {
      if (lgBreakpoint.matches) {
        if (!locomotiveInstance.current) {
          initializeLocomotiveScroll();
        }
      } else {
        // Destroy LocomotiveScroll if the viewport is smaller than `lg`
        if (locomotiveInstance.current) {
          locomotiveInstance.current.destroy();
          locomotiveInstance.current = null;
          // console.log("LocomotiveScroll destroyed.");
        }
      }
    };

    lgBreakpoint.addEventListener("change", handleResize);

    // Cleanup on component unmount
    return () => {
      if (locomotiveInstance.current) {
        locomotiveInstance.current.destroy();
        locomotiveInstance.current = null;
      }
      lgBreakpoint.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div
      ref={scrollRef}
      data-scroll-container
      className="w-full min-h-screen text-white bg-white"
    >
      <Navbar />
      <LandingPage />
      <Marquee />
      <About />
      <Eyes />
      <Featured />
      <Reviews />
      <ReadyToStart />
      <Footer />
    </div>
  );
}

export default App;
