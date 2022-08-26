const MovieCard = ({ el }) => {
  return (
    <div className="movie-card-container">
      <div className="image-container">
      <div className="bg-image" style={{ backgroundImage: `url(${el.PosterUrl})` }}>
      </div>
      </div>
      <div className="movie-info">
      <h2>Movie Details</h2>          
      <h1 className="title">{el.title}</h1>
      <h4>Rating:{el.rating}</h4>
      <p className="u">{el.description}</p>
      <span>{el.date}</span>
      </div>
    </div>
  );
};
export default MovieCard;

