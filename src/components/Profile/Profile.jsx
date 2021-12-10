import { Link } from "react-router-dom"
import React from "react"

function Profile(props) {
  return(
    <section className="profile">
      <h2 className="profile__title"> Привет, Виталий!</h2>
      <div className="profile__container">
        <div className="profile__name">
          <p className="profile__value">Имя</p>
          <input 
            type="text" 
            name="name" 
            className="profile__input"
            required
            placeholder="Виталий"
            />
        </div>
        <div className="profile__email">
          <p className="profile__value">E-mail</p>
          <input
            name="email" 
            className="profile__input"
            required
            type="email"
            placeholder="pochta@yandex.ru"/>
        </div>
      </div>
      <button type="submit" className="profile__edit">Редактировать</button>
      <Link className="profile_signout" to="/signin">Выйти из аккаунта</Link>
    </section>
  )
}
export default Profile