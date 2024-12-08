import { motion, useAnimation } from "framer-motion";
import CS_Project from "../assets/images/projects/CS_Website_1-663x551.png";
import Trawa_Project from "../assets/images/projects/Frame-3875-663x551.jpg";
import AH2_Project from "../assets/images/projects/Frame-481692-1-663x551.png";
import Fyde_Project from "../assets/images/projects/Fyde_Illustration_Crypto_2-663x551.png";
import Bean_Project from "../assets/images/projects/PB-Front-4-663x551.png";
import Visa_Project from "../assets/images/projects/Vise_front2-663x551.jpg";
import TagButton from "./ui/TagButton";
import WaveButton from "./ui/WaveButton";

const projects = [
  {
    title: "Cardboard Spaceship",
    imageSource: CS_Project,
    links: [
      { title: "Branded Template", to: "" },
      { title: "Sales Deck", to: "" },
      { title: "Social Media Templates", to: "" },
    ],
  },
  {
    title: "AH2 & Matt Horn",
    imageSource: AH2_Project,
    links: [{ title: "Pitch deck", to: "" }],
  },
  {
    title: "Fyde",
    imageSource: Fyde_Project,
    links: [
      { title: "Audit", to: "" },
      { title: "Copywriting", to: "" },
      { title: "Sales Deck", to: "" },
      { title: "Slides design", to: "" },
    ],
  },
  {
    title: "Visa",
    imageSource: Visa_Project,
    links: [
      { title: "Agency", to: "" },
      { title: "Company Presentation", to: "" },
    ],
  },
  {
    title: "Trawa",
    imageSource: Trawa_Project,
    links: [
      { title: "Brand Identity", to: "" },
      { title: "Design Research", to: "" },
      { title: "Investor Deck", to: "" },
    ],
  },
  {
    title: "Premium Blend",
    imageSource: Bean_Project,
    links: [{ title: "Branded Template", to: "" }],
  },
];

function Featured() {
  const cards = [
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
    useAnimation(),
  ];

  const handleHover = (index: number) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index: number) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="0"
      className="w-full py-20 bg-zinc-900 text-zinc-200 rounded-tr-2xl rounded-tl-2xl"
    >
      <div className="featured-heading px-6">
        <h1 className="mb-8 font-NeueMontreal-Regular text-3xl lg:text-5xl">
          Featured Projects
        </h1>
      </div>
      <hr className="absolute left-0 w-full border border-t-zinc-200" />
      <div className="projects px-6 py-20 w-full flex justify-between flex-wrap">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project mb-16 w-[90vw] md:w-[46vw] lg:w-[47vw]"
          >
            <div className="project-title flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
              <div className="font-NeueMontreal-Regular uppercase">
                {project.title}
              </div>
            </div>
            <div className="project-image mb-5 w-full">
              <motion.div
                onHoverStart={() => {
                  handleHover(index);
                }}
                onHoverEnd={() => {
                  handleHoverEnd(index);
                }}
                className="group relative"
              >
                <div className="overflow-hidden rounded-xl w-full group-hover:scale-90 transition-transform duration-1000">
                  <img
                    className="rounded-xl w-full group-hover:scale-125 transition-all duration-1000"
                    src={project.imageSource}
                    alt="project_image"
                  />
                </div>

                <div
                  className={`center-title overflow-hidden z-10 flex absolute top-1/2 ${
                    index % 2 === 0
                      ? "md:left-full md:right-0"
                      : "md:left-0 md:right-0"
                  } md:-translate-x-1/2 -translate-y-1/2  w-[100vw] justify-center pointer-events-none`}
                >
                  <div className="masker overflow-hidden -mb-3 lg:-mb-6 flex items-start justify-center w-fit font-FoundersGroteskXCond-Bold text-5xl md:text-5xl lg:text-8xl uppercase">
                    <h1 className="flex items-center text-[#cdea68]">
                      {project.title.split("").map((item, idx) => (
                        <motion.span
                          initial={{ y: "100%" }}
                          transition={{
                            ease: [0.22, 1, 0.36, 1],
                            delay: idx * 0.02,
                          }}
                          animate={cards[index]}
                          className="inline-block"
                        >
                          {item}
                        </motion.span>
                      ))}
                    </h1>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="project-tags flex flex-wrap gap-4">
              {project.links.map((link, index) => (
                <TagButton key={index} link={link} />
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex justify-center items-center">
        <WaveButton
          primaryColor={"#f4f4f5"} //text-zinc-200
          secondaryColor={"#18181b"} //text-zinc-900
          text={"Read More"}
        />
      </div>
    </div>
  );
}

export default Featured;
