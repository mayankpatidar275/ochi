import WaveButton from "./ui/WaveButton";
import AboutImage from "../assets/images/Homepage-Photo-663x469.jpg";

const socials = [
  { name: "Instagram", link: "" },
  { name: "Behance", link: "" },
  { name: "Facebook", link: "" },
  { name: "Linkedin", link: "" },
];

function About() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".04"
      className="-mt-12 bg-[#cdea68] p-6 lg:pt-14 py-20 rounded-2xl"
    >
      <div className="pb-20">
        <h2 className="custom-heading max-w-screen-xl">
          <p className="font-NeueMontreal-Regular text-3xl md:text-5xl lg:text-5xl text-zinc-900">
            Ochi is a strategic presentation agency for forward-thinking
            businesses that need to <u>raise funds</u>, <u>sell prod­ucts</u>,{" "}
            <u>explain complex ideas</u>, and <u>hire great peo­ple</u>.
          </p>
        </h2>
      </div>

      <hr className="absolute left-0 w-full border border-t-zinc-900" />

      <div className="text-zinc-900 flex flex-col gap-8 mt-6 mb-28 lg:flex-row lg:justify-between max-w-screen-sm lg:max-w-full">
        <div>What you can expect:</div>
        <div className="flex flex-col gap-8 lg:flex-row lg:w-1/2">
          <div className="flex flex-col gap-8 lg:w-1/2">
            <p>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether it's live or digital,
              delivered for one or a hundred people.
            </p>
            <p>
              We believe the mix of strategy and design (with a bit of coffee)
              is what makes your message clear, convincing, and captivating.
            </p>
          </div>
          <div className="lg:mt-auto lg:ml-auto">
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
      </div>

      <hr className="absolute left-0 w-full border border-t-zinc-900" />

      <div className="pt-6 flex flex-col gap-10 lg:flex-row">
        <div className="lg:w-1/2">
          <h1 className="mb-8 font-NeueMontreal-Regular text:3xl lg:text-5xl text-zinc-900">
            Our approach
          </h1>
          <WaveButton
            primaryColor={"#18181b"} //text-zinc-900
            secondaryColor={"#f4f4f5"} //text-zinc-200
            text={"Read More"}
          />
        </div>
        <div>
          <img
            className="rounded-3xl"
            src={AboutImage}
            alt="About-Page-Photo"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
