import React from "react"
import { useFormWithValidation} from '../../validation/useFormWithValidation'
function SearchForm({handleSubmit, searchFormStorage}) {
  const [inputValue, setInputValue] = React.useState(searchFormStorage);
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    key: inputValue,
  });
  const [searchError, setSearchError] = React.useState('');

  function handleSearchSubmit(evt) {
    evt.preventDefault();
    if (isValid) {
      setSearchError('');
      handleSubmit(values.key);
    } else if (values.key.length > 0) {
      setSearchError(errors.key);
    } else {
      setSearchError('Нужно ввести ключевое слово');
    }
  }
  return(
  <section className="searchForm">
    <form className="searchForm__container" noValidate onSubmit={handleSearchSubmit}>
      <input 
      className="searchForm__input" 
      maxLength="40" 
      type="text" 
      placeholder="Фильм" 
      required
      name="key"
      value={values.key || ''}
      onChange={(e) => {
        setInputValue(e.target.value)
        handleChange(e)
      }}
      id="key-input"
      />
      <button className="searchForm__button" type="submit" />
    </form>
    <span className="searchForm__error" id="key-input-error">
      {searchError}
    </span>
  </section>
  )
}
export default SearchForm