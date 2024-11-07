// src/apiConfig.js
import axios from "axios";

const OMDB_API_KEY = "3d939a64";
const BASE_URL = "https://www.omdbapi.com/";

export const fetchMoviesByType = async (type, titles) => {
  try {
    const requests = titles.map((title) =>
      axios.get(
        `${BASE_URL}?t=${encodeURIComponent(
          title
        )}&apikey=${OMDB_API_KEY}&type=${type}`
      )
    );
    const responses = await Promise.all(requests);
    return responses.map((response) => ({
      id: response.data.imdbID,
      title: response.data.Title,
      genre: response.data.Genre,
      rating: response.data.imdbRating,
      votes: response.data.imdbVotes,
      image:
        response.data.Poster !== "N/A"
          ? response.data.Poster
          : "https://via.placeholder.com/150x225?text=No+Image",
    }));
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw new Error("Failed to fetch movies. Please try again later.");
  }
};
