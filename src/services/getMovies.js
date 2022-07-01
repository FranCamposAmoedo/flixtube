const apiKey = "1a5f9468a184dd2d1975baf240621ddd";
const baseUrl = "https://api.themoviedb.org/3";
const apiUrl = `${baseUrl}/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

export const getMovies = (props) => {
  return fetch(`${baseUrl}${props}${apiKey}`)
    .then((res) => res.json());
};

export const getSearch = (search) => {
  if (search !== "") {
    const searchUrl = `${baseUrl}/search/movie?api_key=${apiKey}&query=${search}`;
    return fetch(searchUrl)
      .then((res) => res.json())
      .then((response) => {
        const { results } = response;
        const movies = results.map((movie) => {
          const { poster_path, title, id } = movie;
          return { poster_path, title, id };
        });
        return movies;
      });
  }
};
