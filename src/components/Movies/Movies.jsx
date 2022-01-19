import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
 function Movies(props) {
   return(
     <section className="movies">
       <SearchForm />
       <FilterCheckbox />
       <MoviesCardList />
     </section>
   )
}
export default Movies