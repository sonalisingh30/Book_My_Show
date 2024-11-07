import { useEffect, useState } from "react";
import axios from "axios";
import { useSearch } from "../Context/SearchContext";
import { RecommendedStreams } from "../data/StaticData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// eslint-disable-next-line no-unused-vars
import { FaGreaterThan, FaLessThan, FaStar } from "react-icons/fa6";

function Stream() {
  const key = import.meta.env.VITE_API_KEY;
  const { searchTerm } = useSearch();
  const [streams, setStreams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStreams = async () => {
      setLoading(true);

      try {
        let streamData;

        if (searchTerm === "") {
          // If no search term, use recommended streams
          const streamPromises = RecommendedStreams.map((title) =>
            axios.get(
              `https://www.omdbapi.com/?t=${encodeURIComponent(
                title
              )}&apikey=3d939a64&type=series`
            )
          );

          const responses = await Promise.all(streamPromises);
          streamData = responses.map((response) => response.data);
        } else {
          // Fetch a single stream based on the search term
          const response = await axios.get(
            `https://www.omdbapi.com/?t=${encodeURIComponent(
              searchTerm
            )}&apikey=3d939a64&type=series`
          );
          streamData = [response.data];
        }

        // Filter out streams with unsuccessful responses
        const validStreams = streamData.filter(
          (data) => data.Response === "True"
        );
        setStreams(validStreams);
      } catch (error) {
        console.error("Failed to fetch streams:", error);
        setStreams([]);
      } finally {
        setLoading(false);
      }
    };

    fetchStreams();
  }, [searchTerm, key]);

  console.log(streams);
  return (
    <div className="stream-list">
      {loading ? (
        <p>Loading...</p>
      ) : streams.length > 0 ? (
        <div className="max-w-[1024px] mx-auto flex flex-col gap-y-2 mt-5">
          <h2 className="text-2xl font-semibold">Recommended Series</h2>
          <Swiper
            slidesPerView={4}
            breakpoints={{
              320: { slidesPerView: 1 },
              640: { slidesPerView: 2, spaceBetween: 15 },
              1024: { slidesPerView: 4, spaceBetween: 20 },
            }}
            centeredSlidesBounds={true}
            spaceBetween={30}
            navigation={true}
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
            {streams.map((stream, index) => (
              <SwiperSlide key={index}>
                <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-full h-[325px] relative">
                    <img
                      src={stream.Poster}
                      alt={stream.Title}
                      className="w-full h-auto max-h-full object-cover"
                    />
                    <div className="absolute bg-black  gap-x-2 py-2 bottom-0 flex items-center text-sm w-full text-gray-200">
                      <FaStar fill="rgb(220,52,75)" className="ml-2" />
                      <span>
                        {stream.imdbRating !== "N/A"
                          ? stream.imdbRating + "/10"
                          : "N/A"}{" "}
                      </span>
                      <span className="ml-2 text-black-500">
                        {stream.votes} Votes
                      </span>
                    </div>
                  </div>
                  <div className="p-3 flex-grow">
                    <h3 className="text-sm font-semibold truncate">
                      {stream.Title}
                    </h3>
                    <p className="text-xs text-gray-500">{stream.Genre}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <p>No stream found.</p>
      )}
    </div>
  );
}

export default Stream;
