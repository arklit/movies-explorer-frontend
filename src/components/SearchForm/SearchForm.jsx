function SearchForm() {
  return(
  <section className="searchForm">
      <form className="searchForm__container">
        <input className="searchForm__input" minLength="1" maxLength="40" type="text" placeholder="Фильм" required/>
        <button className="searchForm__button" type="button" />
      </form>
  </section>
  )
}
export default SearchForm