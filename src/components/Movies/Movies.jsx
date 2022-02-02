import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import Preloader from '../Preloader/Preloader'
import React from "react";
function Movies(props) {
  return(
    <section className="movies">
      <SearchForm handleSubmit={props.handleSubmit} searchFormStorage={props.searchFormStorage}/>
      <FilterCheckbox 
      handleChangeRadio={props.handleChangeRadio}
      checked={props.checked} />
      {props.isNotFound ? (
        <p className="movies-error">Ничего не найдено</p>
      ): null}
      {props.isLoading ? <Preloader /> : null}
      <MoviesCardList isSaved={false} {...props}/>
    </section>
  )
}
export default Movies