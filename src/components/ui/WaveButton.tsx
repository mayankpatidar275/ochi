function WaveButton({
  primaryColor,
  secondaryColor,
  text,
}: {
  primaryColor: string;
  secondaryColor: string;
  text: string;
}) {
  return (
    <a
      href=""
      className={`flex gap-10 rounded-[2rem] py-4 px-6 w-fit justify-center items-center group`}
      style={{ backgroundColor: primaryColor, color: secondaryColor }}
    >
      <div className="uppercase">{text}</div>
      <div
        className={`w-2 h-2 group-hover:scale-[5.75] transition-all duration-300 ease-[cubic-bezier(.215,.61,.355,1)] rounded-full flex justify-center items-center`}
        style={{ backgroundColor: secondaryColor }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke={primaryColor}
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-arrow-up-right hidden w-2/3 h-2/3 group-hover:block transition-all duration-300 ease-[cubic-bezier(.215,.61,.355,1)]"
        >
          <path d="M7 7h10v10" />
          <path d="M7 17 17 7" />
        </svg>
      </div>
    </a>
  );
}

export default WaveButton;
