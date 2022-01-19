import MoviesCard from "../MoviesCard/MoviesCard"
import movie from "../../images/movie.jpg"
import { useLocation } from "react-router"

function MoviesCardList() {
  const {pathname} = useLocation()
  return(
    <section className="moviesCardList">
      <div className="moviesCardList__container">
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
        <MoviesCard url={movie} alt="movie" title="33 слова о дизайне" duration="1ч 42м"/>
      </div>
      {pathname === "/movies" && (
        <button className="moviesCardList__button" type="button">Ещё</button>
      )}
    </section>
 )
}
export default MoviesCardList