import { NavLink } from "react-router-dom";
import {
  event_icon,
  home_res_logo,
  movies_icon,
  user_icon,
} from "../data/fileImports";

function MobileNav() {
  return (
    <div className="flex lg:hidden items-center relative bg-white w-[375px] md:w-[420px] h-full">
      <div className="flex items-center justify-between w-full mx-auto h-full px-5 bg-white py-2">
        <NavLink
          to="/home"
          className={({ isActive }) =>
            `flex flex-col justify-center items-center gap-y-0 size-[28px] ${
              isActive ? "font-bold text-red-500" : "text-gray-800"
            }`
          }
        >
          <img src={home_res_logo} alt="Home" />
          <p>Home</p>
        </NavLink>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            `flex flex-col justify-center items-center gap-y-0 size-[28px] ${
              isActive ? "font-bold text-red-500" : "text-gray-800"
            }`
          }
        >
          <img src={event_icon} alt="Events" />
          <p>Events</p>
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            `flex flex-col justify-center items-center gap-y-0 size-[28px] ${
              isActive ? "font-bold text-red-500" : "text-gray-800"
            }`
          }
        >
          <img src={movies_icon} alt="Movies" />
          <p>Movies</p>
        </NavLink>
        <NavLink
          to="/streams"
          className={({ isActive }) =>
            `flex flex-col justify-center items-center gap-y-0 size-[28px] ${
              isActive ? "font-bold text-red-500" : "text-gray-800"
            }`
          }
        >
          <img src={user_icon} alt="Streams" />
          <p>Streams</p>
        </NavLink>
      </div>
    </div>
  );
}

export default MobileNav;
