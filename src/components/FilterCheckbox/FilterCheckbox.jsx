import React from "react"
function FilterCheckbox({ handleChangeRadio}) {
  const checked = React.useRef();
  function onChange() {
    handleChangeRadio(checked.current.checked);
  }
  return(
    <div className='FilterCheckbox__container'>
      <label className="FilterCheckbox__label">
        <input 
          type="checkbox" 
          className="FilterCheckbox"
          ref={checked}
          onChange={onChange}
          defaultChecked={false}
          />
        <span className='FilterCheckbox__slider'></span>
      </label>
      <p className="FilterCheckbox__text">Короткометражки</p>
    </div>
  )
}
export default FilterCheckbox