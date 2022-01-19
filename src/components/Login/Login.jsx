import AuthForm from "../AuthForm/AuthForm";

function Login() {
  return(
    <AuthForm
    title={"Рады видеть!"}
    name={"login"}
    buttonText={"Войти"}
    hintText={"Ещё не зарегистрированы?"}
    hintLink={"Регистрация"}
    path="/signup"/>
  )
}
export default Login