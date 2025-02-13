const api_key = import.meta.env.VITE_api_key;

const requests = {
  originals: `/discover/tv?api_key=${api_key}&language=en-US&with_networks=213`,
  trending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  top_rated: `/tv/top_rated?api_key=${api_key}&language=en-US&page=1`,
  Action: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=28`,
  Adventure: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=12`,
  Animation: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=16`,
  Documentary: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=99`,
  Drama: `/discover/movie?api_key=${api_key}&language=en-US&with_genres=18`,
};

export default requests
