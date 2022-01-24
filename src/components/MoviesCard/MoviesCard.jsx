import { useLocation } from "react-router"
import React from "react";
import { HourDuration} from '../../utils/constants';

function MoviesCard(props) {
  const { movie, savedMoviesId, isSaved, deleteMovie, handleSaveMovie} = props;
  const {pathname} = useLocation();
  const handleIsLike = (moviesCard, savedCardsId) => {
    if (moviesCard.id) {
      return savedCardsId.some((el) => el === moviesCard.id);
    }
  };
  const isLiked = handleIsLike(movie, savedMoviesId);
  const cardLike = `moviesCard__like ${isLiked || isSaved ? 'moviesCard__like_active' : ''}`;
  const hours = Math.trunc(movie.duration / HourDuration);
  const minutes = movie.duration % HourDuration;
  const time = `${hours > 0 ? `${hours}ч ` : ''}${
    minutes > 0 ? `${minutes}м` : ''
  }`;
  const trailer = `${isSaved ? movie.trailer : movie.trailerLink}`;

  function handleSave() {
    if (isSaved) {
      deleteMovie(movie);
    } else if (isLiked) {
      deleteMovie(movie);
    } else {
      handleSaveMovie(movie);
    }
  }
  return(
    <div className="moviesCard">
      <a href={trailer.startsWith('https') ? trailer : 'https://www.youtube.com'}
       target="_blank"  
       rel="noopener noreferrer"
       >
        <img
        className="moviesCard__img"
        src={
          isSaved
            ? movie.image
            : `https://api.nomoreparties.co${movie.image.url}`
        }
        alt={movie.name}
        />
      </a>
      <div className="moviesCard__container">
        <p className="moviesCard__title">{movie.nameRU}</p>
        {pathname === '/movies' ? (
          <button 
            className={cardLike}
            type='button'
            onClick={handleSave}
          />
        ) : (
          <button
            type='button'
            className="moviesCard__delete"
            onClick={handleSave}
          />
        )}
      </div>
      <p className="moviesCard__duration">{time}</p>
    </div>
  )
}
export default MoviesCard