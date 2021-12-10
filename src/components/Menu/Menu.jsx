import { Link } from 'react-router-dom';
import React from 'react';
function Menu(props) {
  return(
  <div className={`menu ${props.isOpen ? 'menu_opened' : ''}`}>
  <div className="menu__container" >
    <button className="menu__close" type="button" onClick={props.handleToggleMenu}></button>
      <div className="menu__box">
        <Link to='/' className="menu__link">Главная</Link>
        <Link to='/movies' className="menu__link" onClick={props.handleToggleMenu}>Фильмы</Link>
        <Link to='/saved-movies' className="menu__link" onClick={props.handleToggleMenu}>Сохраненные Фильмы</Link>
        <Link to='/profile' className="menu__link" onClick={props.handleToggleMenu}>Аккаунт</Link>
      </div>
  </div>
  </div>
  )
}
export default Menu