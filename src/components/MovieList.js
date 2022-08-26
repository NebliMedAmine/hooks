
import MovieCard from "./MovieCards";
const MoviesList = ({ moviesList, nameSearch, }) => {
  return (
    <div>
      {moviesList
        .filter(
          (el) =>
            el.title.toLowerCase().includes(nameSearch.toLowerCase())    
        )
        .map((el, i) => (
          <MovieCard el={el} />
        ))}
    </div>
  );
};
export default MoviesList;