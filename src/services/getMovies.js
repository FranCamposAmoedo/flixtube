const baseUrl = "https://api.themoviedb.org/3";
const accessToken = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTVmOTQ2OGExODRkZDJkMTk3NWJhZjI0MDYyMWRkZCIsInN1YiI6IjYyYmE0NmJjMTdiNWVmMDA1MjEzN2FmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.N024G2dn_bGT2kcNCmLLkQz_LaeyJqyidOh7Ddy0piM";

export const getMovies = (props) => {
  return fetch(`${baseUrl}${props}`, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json;charset=utf-8",
    },
  }).then((res) => res.json());
};

