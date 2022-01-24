import { Link } from "react-router-dom"
import React from "react"
import { CurrentUserContext } from "../../contexts/CurrentUserContext"
import {useFormWithValidation} from "../../validation/useFormWithValidation";

function Profile(props) {
  const { submitAuth, setIsSuccess, isSuccess, handleSignOut } = props;
  const currentUser = React.useContext(CurrentUserContext);
  const { values, handleChange, errors, isValid } =useFormWithValidation({
    name: currentUser.name, email: currentUser.email
  })

  const submitDisabled = values.email === '' || values.name === '' || 
  ( values.name === currentUser.name && values.email === currentUser.email )
  || !isValid || submitAuth;


  function handleSubmit(e) {
    e.preventDefault();
    setIsSuccess('');
    props.onEditProfile(values.name, values.email)
  }
  return(
    <section>
      <form className="profile" onSubmit={handleSubmit}>
        <h2 className="profile__title"> Привет, {currentUser.name}!</h2>
        <div className="profile__container">
          <div className="profile__name">
            <p className="profile__value">Имя</p>
            <input  
              name="name" 
              className="profile__input"
              required
              placeholder="Имя"
              type="text"
              id="name"
              value={values.name || ''}
              onChange={handleChange}
              />
          </div>
          <div className="profile__email">
            <p className="profile__value">E-mail</p>
            <input
              name="email" 
              className="profile__input"
              required
              type="email"
              placeholder="email"
              id="email"
              value={values.email || ''}
              onChange={handleChange}
              />
          </div>
        </div>
        { errors.email && (
          <span className="profile__error">{ errors.email }</span>
        )}
        { errors.name && (
          <span className="profile__error">{ errors.name }</span>
        )}
        {isSuccess && (
        <span className="profile__success">Профиль успешно обновился!</span>
        )}
        <button disabled={submitDisabled ? true : ''} type="submit" className={`profile__edit ${submitDisabled ? 'profile__edit-disabled' : ''}  `}>Редактировать</button>
        <Link onClick={handleSignOut} className="profile_signout" to="/signin">Выйти из аккаунта</Link>
      </form>
    </section>
  )
}
export default Profile