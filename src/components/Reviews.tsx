import React, { useState } from "react";
import KVPImg from "../assets/images/clientsProfiles/William-Barnes-1-300x300.png";
import PlanetlyPImg from "../assets/images/clientsProfiles/Nina.jpg.png";
import WorkizPImg from "../assets/images/clientsProfiles/Tomer.png";
import PremiumPImg from "../assets/images/clientsProfiles/William-Barnes-1-300x300.png";

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
      { title: "Product Presentation", to: "" },
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
      { title: "Company Presentation", to: "" },
      { title: "Onboarding Presentation", to: "" },
      { title: "Policy Deck & Playbook", to: "" },
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
    <div className="w-full py-20 bg-zinc-900 text-zinc-200 rounded-tr-2xl rounded-tl-2xl">
      <div className="reviews-heading px-6">
        <h1 className="mb-8 font-NeueMontreal-Regular text-3xl ">
          Client's Reviews
        </h1>
      </div>
      <hr className="absolute left-0 w-full border border-t-zinc-200" />

      <div className="reviews px-6 w-full flex justify-between flex-wrap">
        {clientData.map((item, index) => (
          <div key={index} className="review flex flex-col w-full">
            <div className="review-top-bar py-6 flex lg:justify-between  w-full">
              <div className="animate-underlineAnimation2 title w-full lg:flex lg:flex-1">
                {item.clientName}
              </div>
              <div className="services hidden lg:flex lg:flex-1">Services:</div>
              <div className="name hidden lg:flex lg:flex-1">
                {item.personName}
              </div>
              <div
                className="lg:flex lg:flex-1 text-right lg:justify-end w-full underline"
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
                  {item.servicesLinkes.map((i, index) => (
                    <div key={index} className="mb-6 lg:mb-6 mr-2 uppercase">
                      <a
                        href=""
                        className="border rounded-3xl py-2 px-3 border-zinc-200"
                      >
                        {i.title}
                      </a>
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
    </div>
  );
}

export default Reviews;
