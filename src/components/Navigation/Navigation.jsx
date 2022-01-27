import { NavLink } from 'react-router-dom';
import headerLogo from '../../images/header-logo.svg';
import React from 'react';
import Menu from '../Menu/Menu';
function Navigation(props) {
  const { loggedIn } = props;
  const [isOpen, setIsOpen] = React.useState(false);
  function handleToggleMenu() {
      setIsOpen(!isOpen)
  }
  const swapColor = `navigation__profile ${loggedIn ? 'navigation_logged' : ''}`
return (
  <>
    <Menu isOpen={isOpen} handleToggleMenu={handleToggleMenu}/>
      <div className="navigation">
        <NavLink to="/">
        <img className="header__logo" src={headerLogo} alt='лого'/>
        </NavLink>
        <button className="menu__open" onClick={handleToggleMenu} type="button"></button>
        <div className="navigation__container">
          <div className="navigation__box">
            <NavLink to="/movies" className="navigation__movies">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="navigation__saved">Сохранённые фильмы</NavLink>
          </div>
          <NavLink to="/profile" className={swapColor}>Аккаунт</NavLink>
        </div>
      </div>
  </>
)
}
export default Navigation