import { Outlet } from "react-router-dom";

import MainNav from "../utils/MainNav";
import Nav from "../utils/Nav";
import ImageCoursel from "../components/ImageCoursel";
import MobileNav from "../utils/MobileNav";

function AppLayout() {
  return (
    <div className="h-screen w-screen flex flex-col justify-between">
      {/* Navigation Tab */}
      <header className="h-[64px] bg-white">
        <MainNav />
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Nav />
        <ImageCoursel />
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="h-[64px] flex items-center justify-center gap-x-5 w-screen bg-white">
        <MobileNav />
      </footer>
    </div>
  );
}

export default AppLayout;
