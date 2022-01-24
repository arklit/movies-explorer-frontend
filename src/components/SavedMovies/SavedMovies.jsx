import FilterCheckbox from "../FilterCheckbox/FilterCheckbox"
import MoviesCardList from "../MoviesCardList/MoviesCardList"
import SearchForm from "../SearchForm/SearchForm"
import React from "react";

function SavedMovies(props) {
  return(
    <section className="savedMovies">
      <SearchForm handleSubmit={props.handleSubmit}/>
      <FilterCheckbox handleChangeRadio={props.handleChangeRadio}/>
      {props.movies === 'NotFound' ? (
        <p className="savedMovies-error">Ничего не найдено</p>
      ) : null}
      <MoviesCardList {...props} isSaved />
    </section>
  )
}
export default SavedMovies