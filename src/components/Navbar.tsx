import { useEffect, useRef, useState } from "react";
import splitStringByRegex from "../utils/splitString";

const navLinks = ["Services", "Our work", "About us", "Insights", "Contact us"];
const socials = [
  { name: "Instagram", link: "" },
  { name: "Behance", link: "" },
  { name: "Facebook", link: "" },
  { name: "Linkedin", link: "" },
];
const addresses = [
  "202-1965 W 4th Ave",
  "Vancouver, Canada",
  "",
  "30 Chukarina St",
  "Lviv, Ukraine",
];
const email = "hello@ochi.design";

function Navbar() {
  const [mouseEnteredNavItem, setMouseEnteredNavItem] = useState(-1);

  const [isNavOpen, setIsNavOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const prevScrollOffSetRef = useRef(0); // Use ref instead of state

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollOffset = window.scrollY;

      if (currentScrollOffset > prevScrollOffSetRef.current) {
        setScrollDirection("down");
      } else if (currentScrollOffset < prevScrollOffSetRef.current) {
        setScrollDirection("up");
      }

      prevScrollOffSetRef.current = currentScrollOffset; // Update ref value
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup listener
    };
  }, []);

  useEffect(() => {
    if (isNavOpen) {
      document.body.classList.add("body-no-scroll");
    } else {
      document.body.classList.remove("body-no-scroll");
    }
  }, [isNavOpen]);

  return (
    <header>
      <nav
        className={`${
          scrollDirection === "down"
            ? "lg:-translate-y-full"
            : "lg:translate-y-0"
        } ${
          !isNavOpen && "bg-zinc-900 bg-opacity-25 backdrop-blur-sm"
        } transition-all duration-500 fixed z-[999] w-full px-6 lg:px-14 py-6 font-NeueMontreal-Regular flex justify-between items-center`}
      >
        <div className="logo z-[999] cursor-pointer">
          <h3>
            <svg
              className={`${isNavOpen && "invert"}`}
              width="72"
              height="30"
              viewBox="0 0 72 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.8393 10.2032C4.22951 10.3257 -0.0459221 14.7356 0.000372391 20.2752C0.0412204 25.3548 4.57808 30.3608 10.6862 29.9226C15.5145 29.5768 19.9015 25.4119 19.8525 20.0057C19.8035 14.5995 15.1904 10.0916 9.8393 10.2032ZM9.89649 25.7005C6.87101 25.7005 4.39834 23.1144 4.40924 19.9839C4.39525 19.2507 4.52792 18.522 4.79947 17.8407C5.07102 17.1594 5.47597 16.5392 5.99056 16.0164C6.50515 15.4937 7.11902 15.0789 7.79613 14.7966C8.47324 14.5142 9.19995 14.3698 9.93362 14.372C10.6673 14.3742 11.3931 14.5228 12.0686 14.8092C12.744 15.0956 13.3554 15.514 13.8668 16.0398C14.3783 16.5656 14.7796 17.1882 15.0471 17.8711C15.3146 18.554 15.4429 19.2834 15.4246 20.0166C15.4409 23.1008 12.9111 25.7059 9.88832 25.7005H9.89649Z"
                fill="currentColor"
              ></path>
              <path
                d="M62.8086 29.4855H67.1222V10.6372H62.8086V29.4855Z"
                fill="currentColor"
              ></path>
              <path
                d="M67.6816 0.172852V6.13439H71.5322C71.6738 6.13439 71.8046 6.13439 72.0006 6.11534V0.172852H67.6816Z"
                fill="currentColor"
              ></path>
              <path
                d="M31.5648 25.7016C28.5393 25.7016 26.0667 23.1156 26.0776 19.9851C26.0936 18.5291 26.6764 17.1366 27.7023 16.1029C28.7282 15.0692 30.1166 14.4757 31.573 14.4482C32.4198 14.4541 33.2537 14.6557 34.0095 15.0373C34.7654 15.4188 35.4227 15.97 35.9301 16.6477L40.0667 15.0144C38.2884 12.0853 35.0669 10.1145 31.4995 10.1989C25.8897 10.3214 21.6142 14.7313 21.6605 20.2709C21.7014 25.3505 26.2382 30.3565 32.3464 29.9183C33.9908 29.7803 35.5761 29.2408 36.9631 28.347C38.3501 27.4532 39.4963 26.2326 40.3009 24.7924L36.2542 22.9931C35.7705 23.8086 35.0851 24.486 34.2638 24.9604C33.4426 25.4347 32.5132 25.69 31.5648 25.7016Z"
                fill="currentColor"
              ></path>
              <path
                d="M52.4097 10.1387C51.2512 10.1119 50.1066 10.3947 49.0941 10.958C48.0816 11.5212 47.2379 12.3445 46.6501 13.3427V0.172852H42.293V29.4688H46.6501C46.6501 29.1721 46.6501 18.7816 46.6501 18.7816C46.6501 15.6946 47.8619 13.4352 50.8084 13.4352C54.6046 13.4352 54.6209 17.4178 54.6209 19.6962C54.6209 22.9165 54.6209 25.5189 54.6209 28.7393V29.4987H59.0271C59.0271 29.3708 59.0488 29.2728 59.0488 29.1721C59.0488 25.5108 59.0951 21.8522 59.0325 18.1909C58.9916 15.6538 58.5015 10.1387 52.4097 10.1387Z"
                fill="currentColor"
              ></path>
            </svg>
          </h3>
        </div>
        <ul className="hidden lg:flex links gap-10">
          {navLinks.map((item, index) => (
            <li
              key={index}
              onMouseEnter={() => setMouseEnteredNavItem(index)}
              onMouseLeave={() => setMouseEnteredNavItem(-1)}
              className={`cursor-pointer flex text-lg font-light ${
                index === navLinks.length - 1 && "ml-32"
              }`}
            >
              <span className="nav-text-container pb-1 hover-underline-animation relative flex overflow-hidden">
                {splitStringByRegex(item).map((character, i) => (
                  <span
                    className={`${
                      i == 0 && "uppercase"
                    } char-container relative`}
                    key={i}
                  >
                    <span
                      // style={{ transitionDelay: `${i * 0.02}s` }}
                      className={` ${
                        mouseEnteredNavItem === index
                          ? "-translate-y-full"
                          : "translate-y-0"
                      } whitespace-pre inline-block transform ease-[cubic-bezier(.215,.61,.355,1)] duration-500`}
                    >
                      {character}
                    </span>
                    <span
                      // style={{ transitionDelay: `${i * 0.02}s` }}
                      className={`${
                        mouseEnteredNavItem === index
                          ? "-translate-y-full"
                          : "translate-y-0"
                      } transform duration-500 whitespace-pre inline-block absolute top-full w-full left-0`}
                    >
                      {character}
                    </span>
                  </span>
                ))}
              </span>
            </li>
          ))}
        </ul>
        <div
          className="lg:hidden z-[9999] h-[24px] w-[24px] flex items-center justify-center"
          onClick={() => setIsNavOpen(!isNavOpen)}
          aria-label="Toggle navigation"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && setIsNavOpen(!isNavOpen)}
        >
          <svg
            className="nav-toggle overflow-visible"
            width="24"
            height="9"
            viewBox="0 0 24 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              className={`${
                isNavOpen &&
                "origin-center transition-transform duration-[0.35s] ease-[cubic-bezier(.3,.86,.36,.95)] -rotate-45 -translate-y-[3px]"
              }`}
              x1="24"
              y1="8"
              x2="-4.37114e-08"
              y2="8"
              stroke={`${!isNavOpen ? "currentColor" : "black"}`}
            ></line>
            <line
              className={`${
                isNavOpen &&
                "origin-center transition-transform duration-[0.35s] ease-[cubic-bezier(.3,.86,.36,.95)] rotate-45 translate-y-[3px]"
              }`}
              x1="24"
              y1="1"
              x2="4.37114e-08"
              y2="1"
              stroke={`${!isNavOpen ? "currentColor" : "black"}`}
            ></line>
          </svg>
        </div>
      </nav>
      {/* Mobile Navigation Menue */}
      <div
        className={`z-[99] ${
          isNavOpen && "translate-y-0 opacity-100 duration-[0.35s] lg:hidden"
        }  -translate-y-full opacity-0 text-black fixed bg-zinc-100 inset-0 px-6 lg:px-14 py-6 pt-32 `}
      >
        <div className="max-h-full overflow-y-auto">
          <div className="mb-28">
            <hr className="absolute left-0 w-full border border-black" />
            <ul className="flex flex-col py-6 gap-12  pt-12 list-none">
              {navLinks.map((item, index) => (
                <li key={index} className="uppercase cursor-pointer ">
                  <a className="underline-animation font-FoundersGroteskXCond-Bold leading-[.75px] text-6xl md:text-7xl lg:text-8xl inline ">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="font-NeueMontreal-Regular flex flex-col gap-5">
            <div>
              <div>
                <p className="mb-3">S:</p>
                <ul>
                  {socials.map((item, index) => (
                    <li key={index}>
                      <a className="link-underline" href={item.link}>
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div>
                <p className="mb-3">L:</p>
                <address>
                  {addresses.map((item, index) => (
                    <>
                      <span
                        key={index}
                        className="link-underline cursor-pointer"
                      >
                        {item}
                      </span>
                      <br />
                    </>
                  ))}
                </address>
              </div>
            </div>
            <div>
              <div>
                <p className="mb-3">E:</p>
                <a className="link-underline" href={"mailto:" + email}>
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
