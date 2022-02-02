import headerLogo from '../../images/header-logo.svg';
import { useLocation, NavLink, Switch, Route } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
function Header(props) {
  const { loggedIn} = props;
  const {pathname} = useLocation();
    const isColorHead = pathname === '/' ? 'header' : 'header header__color';
  return(
    <header className={isColorHead}>
      <Switch>
        <Route exact path="/">
          { loggedIn ? (
            <Navigation/>
          ) : (
          <div className="header__container">
            <img src={headerLogo} alt="логотип" className="header__logo"/>
            <div className="header__main">
              <NavLink to="/signup" className="header__main-register">Регистрация</NavLink>
              <NavLink to="/signin" className="header__main-login">Войти</NavLink>
            </div>
          </div>
          )}
        </Route>
        <Route path={["/movies", "/saved-movies", "/profile"]}>
          <Navigation/>
        </Route>
      </Switch>
    </header>
  )
}
export default Header