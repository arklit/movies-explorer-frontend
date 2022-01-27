import logo from '../../images/header-logo.svg'
import { Link } from 'react-router-dom';
import { pattern } from '../../utils/constants';
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
        name="form"
      >
        {props.children} 
        <p className="authorization__label">E-mail</p>
        <input
          className="authorization__input"
          required
          id="email"
          type="email"
          name="email"
          minLength="2"
          value={props.email}
          onChange={props.onChange}
          pattern={pattern}
        />
        {props.errorEmail && (
        <span className="authorization__error">{props.errorEmail}</span>
        )}
        <p className="authorization__label">Пароль</p>
        <input 
        className="authorization__input"
        required
        id="password"
        type="password"
        minLength="6"
        name='password'
        value={props.password}
        onChange={props.onChange}
        />
        {props.errorPassword && (
        <span className="authorization__error">{props.errorPassword}</span>
        )}
        {props.isError ? ( 
          <span className="authorization__error" id="login-error">
            {props.isError ? props.isError : props.errorText}
          </span>
        ) : null}
        <button 
        className={`authorization__submit ${
          props.isValid && props.isFormSent
          ? ''
          : 'authorization__submit_disabled'
        }`} 
        type={props.isValid && props.isFormSent ? 'submit' : 'button'}
        >{props.buttonText}
        </button>
        <div className="authorization__hint">
          <p className="authorization__hint-text">{props.hintText}</p>
          <Link to={props.path} className="authorization__hint-link">{props.hintLink}</Link>
        </div>
      </form>
    </section>
  )
}
export default AuthForm