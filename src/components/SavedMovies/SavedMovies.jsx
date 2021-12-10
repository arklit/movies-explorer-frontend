import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"

function SavedMovies(props) {
  return(
    <section className="savedMovies">
      <SearchForm />
      <FilterCheckbox />
      <MoviesCardList/>
    </section>
  )
}
export default SavedMovies