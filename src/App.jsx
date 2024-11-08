import {
  BrowserRouter as Router,
  // eslint-disable-next-line no-unused-vars
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Events from "./pages/Events";
import Stream from "./pages/Stream";
import Movie from "./pages/Movie";
import Home from "./pages/Home";

import AppLayout from "./pages/AppLayout";
import { SearchProvider } from "./Context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          {/* All public routes come under AppLayout */}
          <Route path="/" element={<AppLayout />}>
            {/* Set Movie as the default page under AppLayout */}
            <Route index element={<Movie />} />
            <Route path="home" element={<Home />} />
            <Route path="movies" element={<Movie />} />
            <Route path="streams" element={<Stream />} />
            <Route path="events" element={<Events />} />
          </Route>
        </Routes>
      </Router>
    </SearchProvider>
  );
}

export default App;
