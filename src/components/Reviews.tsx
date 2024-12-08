import { useState } from "react";
import PlanetlyPImg from "../assets/images/clientsProfiles/Nina.jpg.png";
import WorkizPImg from "../assets/images/clientsProfiles/Tomer.png";
import {
  default as KVPImg,
  default as PremiumPImg,
} from "../assets/images/clientsProfiles/William-Barnes-1-300x300.png";
import logoOchi from "../assets/images/logos/logo001.svg";
import logoClutch from "../assets/images/logos/logo002.svg";
import logoAcademy from "../assets/images/logos/logo003.png";
import TagButton from "./ui/TagButton";

const clientData = [
  {
    clientName: "Karman Ventures",
    servicesLinkes: [
      { title: "Sales Deck", to: "" },
      { title: "Investor Deck", to: "" },
    ],
    personName: "William Barnes",
    personImage: KVPImg,
    reviewMessage:
      "They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5",
  },
  {
    clientName: "Planetly",
    servicesLinkes: [
      { title: "Sales Deck", to: "" },
      { title: "Investor Deck", to: "" },
      { title: "Product ", to: "" },
      { title: "Agency", to: "" },
      { title: "Big News Deck", to: "" },
      { title: "Branded Template", to: "" },
      { title: "Startup Pitch", to: "" },
    ],
    personImage: PlanetlyPImg,
    personName: "Nina Walloch",
    reviewMessage:
      "Ihor and his team tackled the projects with great professionalism and creativity. They understood our brand value and turned this into excellent slide designs. The process was seamless and very effective, so we decided to roll this out across all our presentation decks. Furthermore, their understanding, professionalism, and creativity have secured a continued partnership.",
  },
  {
    clientName: "Workiz Easy",
    servicesLinkes: [
      { title: "Company ", to: "" },
      { title: "Onboarding", to: "" },
      { title: "Policy Deck", to: "" },
      { title: "Redesign", to: "" },
      { title: "Sales Deck", to: "" },
    ],
    personImage: WorkizPImg,
    personName: "Tomer Levy",
    reviewMessage:
      "OCHI brought a certain level of professionalism into our presentations that we were lacking before. When I showed our management and HR teams the presentations OCHI developed, they were amazed — the final product was exactly what we needed to create a better experience for new employees and our clients.",
  },
  {
    clientName: "Premium Blend",
    servicesLinkes: [
      { title: "Branded Templates", to: "" },
      { title: "Illustrations", to: "" },
    ],
    personImage: PremiumPImg,
    personName: "Ellen Kim",
    reviewMessage:
      "They are truly changing the landscape of presentations!! Fast, effective, and nice humans that listened to every detail of our needs. Creating a deck with their template brings so much joy and ease. We proudly showcase their design in our calls and presentations.",
  },
];

function Reviews() {
  const [expandedReview, setExpandedReview] = useState("");

  return (
    <div className="w-full -mt-4 py-20 bg-zinc-900 text-zinc-200 rounded-tr-2xl rounded-tl-2xl">
      <div className="reviews-heading px-6">
        <h1 className="mb-8 font-NeueMontreal-Regular text-3xl lg:text-5xl">
          Client's Reviews
        </h1>
      </div>
      <hr className="absolute left-0 w-full border border-t-zinc-200" />

      <div className="reviews px-6 w-full flex justify-between flex-wrap">
        {clientData.map((item, index) => (
          <div key={index} className="review flex flex-col w-full">
            <div className="review-top-bar py-6 flex lg:justify-between  w-full">
              <div className="title w-full lg:flex lg:flex-1">
                {item.clientName}
              </div>
              <div className="services hidden lg:flex lg:flex-1">Services:</div>
              <div className="name hidden lg:flex lg:flex-1">
                {item.personName}
              </div>
              <div
                className="lg:flex lg:flex-1 text-right lg:justify-end w-full underline cursor-pointer"
                onClick={() =>
                  setExpandedReview(
                    expandedReview == item.clientName ? "" : item.clientName
                  )
                }
              >
                Read
              </div>
            </div>

            <hr className="absolute left-0 w-full border border-t-zinc-200" />

            <div
              className={`collapsable w-full flex flex-col gap-6 lg:gap-0 h-0 p-0 overflow-hidden lg:flex-row ${
                expandedReview == item.clientName && "h-fit py-6"
              } `}
            >
              <div className="hidden title w-full lg:flex lg:flex-1"></div>
              <div className="lg:flex lg:flex-1">
                <div className="mb-6 lg:hidden">Services</div>
                <div className="flex flex-wrap lg:flex-col lg:mt-2 h-fit">
                  {item.servicesLinkes.map((link, index) => (
                    <div key={index} className="mb-6 lg:mb-6 mr-2 uppercase">
                      <TagButton key={index} link={link} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:flex lg:flex-[2]">
                <div className="lg:flex lg:flex-[2] lg:flex-col">
                  <div className="mb-6 lg:hidden">{item.clientName}</div>
                  <div className="w-28 h-28 mb-6 rounded-lg overflow-hidden">
                    <img src={item.personImage} alt="personImage" />
                  </div>
                  <div>{item.reviewMessage}</div>
                </div>
                <div className="hidden lg:flex lg:flex-1 text-right lg:justify-end w-full underline"></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="absolute left-0 w-full border border-t-zinc-200" />

      <div className="px-6 lg:px-12 py-20 md:flex-row flex w-full flex-col gap-5">
        <div className="bg-[#004d43] relative overflow-hidden flex justify-center items-center w-[90vw] h-[70vw] lg:h-[25vw] lg:w-[25vw] md:h-[30vw] md:w-[30vw]  lg:flex-[2] rounded-xl">
          <img src={logoOchi} alt="ochilogo" />
          <div className="absolute left-0 bottom-0 m-4 mb-5 uppercase">
            <a
              href=""
              className="border rounded-3xl py-2 px-3 border-[#cdea68] text-[#cdea68]"
            >
              &copy; 2019-2022
            </a>
          </div>
        </div>
        <div className="bg-[#000000] relative overflow-hidden flex justify-center items-center w-[90vw] h-[70vw] lg:h-[25vw] lg:w-[25vw] md:h-[30vw] md:w-[30vw] lg:flex-1 rounded-xl">
          <img src={logoClutch} alt="clutchlogo" />
          <div className="absolute left-0 bottom-0 m-4 mb-5 uppercase">
            <a href="" className="border rounded-3xl py-2 px-3">
              5.0 on clutch
            </a>
          </div>
        </div>
        <div className="bg-[#000000] mix-blend-hard-light relative overflow-hidden flex justify-center items-center w-[90vw] h-[70vw] lg:h-[25vw] lg:w-[25vw] md:h-[30vw] md:w-[30vw] lg:flex-1 rounded-xl">
          <img className="w-32 h-32" src={logoAcademy} alt="logoAcademy" />
          <div className="absolute left-0 bottom-0 m-4 mb-5 uppercase">
            <a href="" className="border rounded-3xl py-2 px-3">
              Bootcamp alumni
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
