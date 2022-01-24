import MoviesCard from "../MoviesCard/MoviesCard"
import React from "react"
import { debounce } from 'lodash';
import { desktopWidth, tabletWidth, mobileWidth } from '../../utils/constants'

function MoviesCardList(props) {
  const { movies, isSaved, handleSaveMovie, savedMoviesId, deleteMovie} = props
  const [filteredMovies, setFilteredMovies] = React.useState([]);
  const [windowSize, setWindowSize] = React.useState(window.innerWidth);

  function moviesCount() {
    if (windowSize >= desktopWidth) return { count: 12, more: 4 };
    if (windowSize >= tabletWidth) return { count: 8, more: 2 };
    if (windowSize >= mobileWidth) return { count: 5, more: 1 };
  }

  const handler = React.useCallback(
    debounce(function () {
      setWindowSize(window.innerWidth);
    }, 500),
    []
  );
  const onChange = () => {
    handler();
  };

  React.useEffect(() => {
    const newMovies = movies.slice(0, moviesCount().count);
    setFilteredMovies(newMovies);
  }, [movies, windowSize]);

  React.useEffect(() => {
    window.addEventListener('resize', onChange);
  }, []);

  const onMoreButtonClick = () => {
    setFilteredMovies(
      movies.slice(0, (filteredMovies.length += moviesCount().more))
    );
  };
  return(
    <section className="moviesCardList">
      <div className="moviesCardList__container">
        {movies ==='NotFound' 
        ? '' 
        : movies.reduce((filmsbatch, movie) => {
            if (filmsbatch.length < filteredMovies.length) {
              filmsbatch.push(
                <MoviesCard
                  movie={movie}
                  isSaved={isSaved}
                  key={isSaved ? movie._id : movie.id}
                  handleSaveMovie={handleSaveMovie}
                  savedMoviesId={savedMoviesId}
                  deleteMovie={deleteMovie}
                />
              );
            }
            return filmsbatch
        }, [])}
      </div>
      {movies.length > filteredMovies.length ? (
        <button className="moviesCardList__button" onClick={onMoreButtonClick} type="button">Ещё</button>
      ) : null}
    </section>
 )
}
export default MoviesCardList