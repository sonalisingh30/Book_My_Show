import { useEffect, useState } from "react";
import axios from "axios";
import { useSearch } from "../Context/SearchContext";
import { RecommendedMovies } from "../data/StaticData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// eslint-disable-next-line no-unused-vars
import { FaGreaterThan, FaLessThan, FaStar } from "react-icons/fa6";

function Movie() {
  const key = import.meta.env.VITE_API_KEY;
  const { searchTerm } = useSearch();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        let movieData;

        if (searchTerm === "") {
          // If no search term, use recommended movies
          const moviePromises = RecommendedMovies.map((title) =>
            axios.get(
              `https://www.omdbapi.com/?t=${encodeURIComponent(
                title
              )}&apikey=3d939a64&type=movie`
            )
          );

          const responses = await Promise.all(moviePromises);
          movieData = responses.map((response) => response.data);
        } else {
          // Fetch a single movie based on the search term
          const response = await axios.get(
            `https://www.omdbapi.com/?t=${encodeURIComponent(
              searchTerm
            )}&apikey=3d939a64&type=movie`
          );
          movieData = [response.data];
        }

        // Filter out movies with unsuccessful responses
        const validMovies = movieData.filter(
          (data) => data.Response === "True"
        );
        setMovies(validMovies);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchTerm, key]);

  console.log(movies);
  return (
    <div className="movie-list">
      {loading ? (
        <p>Loading...</p>
      ) : movies.length > 0 ? (
        <div className="max-w-[1024px] mx-auto flex flex-col gap-y-2 mt-5">
          <h2 className="text-2xl font-semibold">Recommended Movies</h2>
          <Swiper
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            centeredSlidesBounds={true}
            spaceBetween={30}
            navigation={{
              nextEl: ".custom-next-movie",
              prevEl: ".custom-prev-movie",
            }}
            modules={[Navigation]}
            loop={true}
            initialSlide={1}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            speed={800}
            className="mySwiper w-[1024px] grid grid-cols-4 gap-x-2 max-w-[80vw]"
          >
            {movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white  rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className=" w-full h-[325px] relative">
                    <img
                      src={movie.Poster}
                      alt={movie.title}
                      className="w-full h-auto max-h-full object-cover"
                    />
                    <div className=" absolute bg-black  gap-x-2 py-2 bottom-0 flex items-center text-sm w-full text-gray-200">
                      <FaStar fill="rgb(220,52,75)" className="ml-2" />
                      <span>
                        {movie.imdbRating !== "N/A"
                          ? movie.imdbRating + "/10"
                          : "N/A"}{" "}
                      </span>
                      <span className="ml-2 text-black-500">
                        {movie.votes} Votes
                      </span>
                    </div>
                  </div>
                  <div className="p-3 flex-grow">
                    <h3 className="text-sm font-semibold truncate">
                      {movie.Title}
                    </h3>
                    <p className="text-xs text-gray-500">{movie.Genre}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
            {/* Custom Navigation Buttons */}
            <div className="custom-next-movie custom-swiper-button absolute right-4 top-1/2 transform -translate-y-1/2">
              <FaGreaterThan />
            </div>
            <div className="custom-prev-movie custom-swiper-button">
              <FaLessThan />
            </div>
          </Swiper>
        </div>
      ) : (
        <p>No movie found.</p>
      )}
    </div>
  );
}

export default Movie;
