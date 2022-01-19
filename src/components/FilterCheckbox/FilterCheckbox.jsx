import React from "react"
function FilterCheckbox() {
  return(
    <div className='FilterCheckbox__container'>
      <label className="FilterCheckbox__label">
        <input 
          type="checkbox" 
          className="FilterCheckbox" 
          />
        <span className='FilterCheckbox__slider'></span>
      </label>
      <p className="FilterCheckbox__text">Короткометражки</p>
    </div>
  )
}
export default FilterCheckbox