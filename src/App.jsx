import {
  BrowserRouter as Router,
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
          {/* Redirect root to /home */}
          <Route path="/" element={<Navigate replace to="/home" />} />

          {/* All public routes come under AppLayout */}
          <Route path="/" element={<AppLayout />}>
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
