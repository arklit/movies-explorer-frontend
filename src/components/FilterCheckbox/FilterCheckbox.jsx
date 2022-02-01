import React from "react"
function FilterCheckbox({ handleChangeRadio, checked}) {

  function onChange(event) {
    handleChangeRadio(event.target.checked);
  }
  return(
    <div className='FilterCheckbox__container'>
      <label className="FilterCheckbox__label">
        <input 
          type="checkbox" 
          className="FilterCheckbox"
          onChange={onChange}
          checked={checked}
          />
        <span className='FilterCheckbox__slider'></span>
      </label>
      <p className="FilterCheckbox__text">Короткометражки</p>
    </div>
  )
}
export default FilterCheckbox