function filterMoviesByTitle(movies, searchString) {
  const filteredMovies = movies.filter((movie) => {
      const targetMovie = movie.nameRU.toLowerCase();
      const search = searchString.toLowerCase();
      return targetMovie.includes(search);
  })

  return filteredMovies;
}

function filterMoviesByShortType(movies) {
  return movies.filter((movie) => {
      return movie.duration <= 40;
  });
}

export function complexMoviesFilter(movies, searchString, isOnlyShortMovies) {
  const filteredMoviesByTitle = filterMoviesByTitle(movies, searchString);

  if (isOnlyShortMovies) {
      const filteredMoviesByShortFilms = filterMoviesByShortType(filteredMoviesByTitle);
      return filteredMoviesByShortFilms;
  }

  return filteredMoviesByTitle;
}