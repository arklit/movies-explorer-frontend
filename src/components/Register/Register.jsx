import AuthForm from '../AuthForm/AuthForm'
function Register() {
  return(
    <AuthForm 
    title={"Добро Пожаловать!"}
    name={"register"}
    buttonText={"Зарегистрироваться"}
    hintText={"Уже зарегистрированы?"}
    hintLink={"Войти"}
    path="/signin"
      >
      <p className="authorization__label">Имя</p>
      <input
      className="authorization__input"
      required
      id="name"
      type="text"
      minLength="2"
      />
      <span className="authorization__error">текст ошибки</span>
    </AuthForm>
  )
}
export default Register