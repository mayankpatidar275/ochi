import React from "react";
import CS_Project from "../assets/images/projects/CS_Website_1-663x551.png";
import AH2_Project from "../assets/images/projects/Frame-481692-1-663x551.png";
import Fyde_Project from "../assets/images/projects/Fyde_Illustration_Crypto_2-663x551.png";
import Visa_Project from "../assets/images/projects/Vise_front2-663x551.jpg";
import Trawa_Project from "../assets/images/projects/Frame-3875-663x551.jpg";
import Bean_Project from "../assets/images/projects/PB-Front-4-663x551.png";

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
  return (
    <div className="w-full py-20 bg-zinc-900 text-zinc-200 rounded-tr-2xl rounded-tl-2xl">
      <div className="featured-heading px-6">
        <h1 className="mb-8 font-NeueMontreal-Regular text-3xl ">
          Featured Projects
        </h1>
      </div>
      <hr className="absolute left-0 w-full border border-t-zinc-200" />
      <div className="projects px-6 py-20 w-full  flex justify-between flex-wrap">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project mb-16 w-[90vw] md:w-[46vw] lg:w-[47vw] hover:scale-90"
          >
            <div className="project-title flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-zinc-200"></div>
              <div className="font-NeueMontreal-Regular uppercase">
                {project.title}
              </div>
            </div>
            <div className="project-image mb-5 relative w-full">
              <img
                className="rounded-xl w-full"
                src={project.imageSource}
                alt="project_image"
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                {project.title}
              </div>
            </div>
            <div className="project-tags flex flex-wrap gap-4">
              {project.links.map((link, index) => (
                <div key={index} className="mb-2 uppercase">
                  <a
                    href=""
                    className="border rounded-3xl py-2 px-3 border-zinc-200"
                  >
                    {link.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Featured;