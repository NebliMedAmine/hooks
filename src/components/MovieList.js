
import MovieCard from "./MovieCards";
const MoviesList = ({ moviesList, nameSearch,ratingSearch }) => {
  return (
    <div>
      {moviesList
        .filter(
          (el) =>
            el.title.toLowerCase().includes(nameSearch.toLowerCase())  &&  el.rating >= ratingSearch  
        )
        .map((el, i) => (
          <MovieCard el={el} />
        ))}
    </div>
  );
};
export default MoviesList;