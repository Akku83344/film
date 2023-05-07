import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed flex top-0 w-full flex-wrap items-center justify-between bg-[#393646] py-2 text-neutral-500 shadow-lg lg:py-4">
      <div className="flex w-full flex-wrap items-center justify-between px-16">
        <Link to="/" className="flex flex-row items-center gap-2 text-secondary ">
          <PlayCircleIcon className="w-14 h-14"/>
          <h1 className="text-3xl"
          >
            MovieFlix
          </h1>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
