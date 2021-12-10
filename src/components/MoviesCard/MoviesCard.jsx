import { useLocation } from "react-router"

function MoviesCard(props) {
  const {pathname} = useLocation();
  const swapLike = pathname === "/movies" ? "moviesCard__like" : 'moviesCard__delete'
  return(
    <div className="moviesCard">
      <img className="moviesCard__img" src={props.url} alt={props.alt} />
      <div className="moviesCard__container">
        <p className="moviesCard__title">{props.title}</p>
        <button className={swapLike}></button>
      </div>
      <p className="moviesCard__duration">{props.duration}</p>
    </div>
  )
}
export default MoviesCard