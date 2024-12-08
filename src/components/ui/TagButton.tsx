function TagButton({ link }: { link: { title: string; to: string } }) {
  return (
    <div className="mb-2 uppercase">
      <a
        href=""
        className="border rounded-3xl py-2 px-3 border-zinc-200 hover:bg-zinc-200 hover:text-zinc-900 transition-all duration-300 ease-[cubic-bezier(.215,.61,.355,1)]"
      >
        {link.title}
      </a>
    </div>
  );
}

export default TagButton;
