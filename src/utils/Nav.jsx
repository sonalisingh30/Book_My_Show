import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <div className="items-center justify-between lg:px-0 lg:w-[1024px] mx-auto bg-[rgb(245,245,245)] mt-2 px-5 hidden lg:flex">
      <div className="flex items-center justify-between gap-x-5">
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? "font-semibold text-black" : "text-black"
          }
        >
          Movies
        </NavLink>
        <NavLink
          to="/streams"
          className={({ isActive }) =>
            isActive ? "font-semibold text-black" : "text-black"
          }
        >
          Streams
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            isActive ? "font-semibold text-black" : "text-black"
          }
        >
          Events
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "font-semibold text-black" : "text-black"
          }
        >
          Plays
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "font-semibold text-black" : "text-black"
          }
        >
          Sports
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "font-semibold text-black" : "text-black"
          }
        >
          Activities
        </NavLink>
      </div>

      <div className="flex items-center justify-between gap-x-5">
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "font-semibold text-black" : "text-black"
          }
        >
          List Your Show
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "font-semibold text-black" : "text-black"
          }
        >
          Corporates
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "font-semibold text-black" : "text-black"
          }
        >
          Offers
        </NavLink>
        <NavLink
          to=""
          className={({ isActive }) =>
            isActive ? "font-semibold text-black" : "text-black"
          }
        >
          Gift Cards
        </NavLink>
      </div>
    </div>
  );
}

export default Nav;
