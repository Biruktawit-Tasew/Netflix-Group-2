import { useEffect, useState } from "react";
import styles from "./row.module.css";
import axios from "../../../Utils/axios";
import movieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'

const Row = ({ title, url, isLargeRow }) => {
  const [movie, setMovie] = useState();
  const [trailerUrl, setTrailerUrl] = useState("");
  const singleImage = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function data() {
      try {
        const response = await axios.get(url);
        setMovie(response.data.results);
      } catch (error) {
        console.log(error);
      }
    }
    data();
  }, [url]);
  console.log(movie);
   const handleClick = (movie) => {
     if (trailerUrl) {
       setTrailerUrl("");
     } else {
       movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
         (url) => {
           const urlParams = new URLSearchParams(new URL(url).search);

           setTrailerUrl(urlParams.get("v"));
         }
       );
     }
   };
     const opts = {
       height: "390",
       width: "100%",
       playerVars: {
         autoplay: 1,
       },
     };
  return (
    <div className={styles.row}>
      <h1>{title}</h1>
      <div className={styles.rowPoster}>
        {movie?.map((movie, index) => (
          <img
            key={index}
            className={`${styles.rowImage} ${
              isLargeRow && styles.row_posterLarge
            }`}
            src={`${singleImage}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}

            onClick={()=>{handleClick(movie)}}
          />
        ))}
      </div>
      <div>
        {trailerUrl && (
          <YouTube
            style={{ padding: "40px" }}
            videoId={trailerUrl}
            opts={opts}
          />
        )}
      </div>
    </div>
  );
};

export default Row;
