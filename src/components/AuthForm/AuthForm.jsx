import logo from '../../images/header-logo.svg'
import { Link } from 'react-router-dom';
function AuthForm(props) {
  return(
    <section className="authorization">
      <Link className="authorization__logo" to="/">
        <img  src={logo} alt='лого'/>
      </Link>
      <h1 className="authorization__title">{props.title}</h1>
      <form
        className="authorization__form"
        onSubmit={props.onSubmit}
        name={`${props.name}-form`}
      >
        {props.children} 
        <p className="authorization__label">E-mail</p>
        <input
          className="authorization__input"
          required
          id="email"
          type="email"
          minLength="2"
        />
        <span className="authorization__error">текст ошибки</span>
        <p className="authorization__label">Пароль</p>
        <input 
        className="authorization__input"
        required
        id="password"
        type="password"
        minLength="2"
        />
        <span className="authorization__error">текст ошибки</span>
        <button className="authorization__submit" type="submit">{props.buttonText}</button>
        <div className="authorization__hint">
          <p className="authorization__hint-text">{props.hintText}</p>
          <Link to={props.path} className="authorization__hint-link">{props.hintLink}</Link>
        </div>
      </form>
    </section>
  )
}
export default AuthForm