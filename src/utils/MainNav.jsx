import { Link } from "react-router-dom";
import { down_arrow, logo, search_bar } from "../data/fileImports";
import { IoMenuOutline } from "react-icons/io5";
import { useSearch } from "../Context/SearchContext";

function MainNav() {
  const { searchTerm, setSearchTerm } = useSearch();

  return (
    <nav className="h-full flex items-center justify-center w-screen gap-x-5 px-5 lg:px-0 lg:w-[1024px] mx-auto">
      <div className="flex gap-x-10 items-center w-full px-10 md:px-0 md:w-[60%]">
        <Link to="/" className="justify-center items-center hidden sm:flex">
          <img
            src={logo}
            alt="bookmyshow logo"
            loading="lazy"
            className="w-full h-full"
          />
        </Link>
        <div className="flex h-full items-center bg-white px-4 py-2 flex-grow rounded-[4px] border-[rgb(238,238,238)] border-[1px]">
          <img
            src={search_bar}
            alt="search bar"
            loading="lazy"
            className="size-[13px]"
          />
          <input
            type="text"
            value={searchTerm} // Bind to context state
            onChange={(e) => setSearchTerm(e.target.value)} // Update context state
            className="h-full outline-none px-2 font-roboto w-full"
            placeholder="Search for Movies, Events, Plays & more"
          />
        </div>
      </div>
      <div className="items-center gap-x-5 w-[40%] justify-end hidden md:flex">
        <div className="flex items-center gap-x-3">
          <h3>Bengalore</h3>
          <div>
            <img src={down_arrow} className="size-[18px]" />
          </div>
        </div>
        <button className="px-3 py-1 bg-[rgb(248,68,100)] text-white font-roboto h-[25px] text-sm rounded-[4px]">
          Sign in
        </button>
        <div className="flex items-center justify-center">
          <IoMenuOutline size={24} />
        </div>
      </div>
    </nav>
  );
}

export default MainNav;
