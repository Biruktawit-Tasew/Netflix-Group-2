import { useEffect, useState } from "react";
import styles from "./banner.module.css";
import axiti from "../../Utils/axios";
import requests from "../../Utils/request";

const Banner = () => {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function dataSebsbie() {
      try {
        const response = await axiti.get(requests.originals);
        setMovie(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        );
      } catch (error) {
        console.log(error);
      }
    }
    dataSebsbie();
  }, []);
  const truncate = (Tstring, max_num) => {
    return Tstring?.length > max_num
      ? Tstring.substr(0, max_num - 1) + "..."
      : Tstring;
  };
  return (
    <div
      className={styles.banner}
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
      }}
    >
      <div className={styles.inner_banner}>
        <h1>{movie?.original_name || movie?.name}</h1>
        <div className={styles.banner_button}>
          <button className={`${styles.btn} ${styles.play}`}>Play</button>
          <button className={styles.btn}>My List</button>
        </div>
        <p className={styles.banner_desc}>{truncate(movie?.overview, 150)}</p>
      </div>
      <div className={styles.banner_fadeBottom} />
    </div>
  );
};

export default Banner;
