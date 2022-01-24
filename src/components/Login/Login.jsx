import AuthForm from "../AuthForm/AuthForm";
import { useFormWithValidation }  from '../../validation/useFormWithValidation';
import React from "react";
import { useHistory } from 'react-router-dom'; 
function Login(props) {
  const history = useHistory();
  const { isError, setError, isFormSent, setIsFormSent } = props
  const { values, handleChange, errors, isValid } = useFormWithValidation({
    email: '', password: '' });
    
    React.useEffect(() => {
      setError(false)
    }, [history])
  
  function handleSubmit(e) {
    e.preventDefault();
    setIsFormSent(true)
    props.onLogin(values.email, values.password);
  }     
  return(
    <AuthForm
    title={"Рады видеть!"}
    name={"login"}
    buttonText={"Войти"}
    hintText={"Ещё не зарегистрированы?"}
    hintLink={"Регистрация"}
    path="/signup"
    onSubmit={handleSubmit}
    email={values.email}
    password={values.password}
    onChange={handleChange}
    errorEmail={errors.email}
    errorPassword={errors.password}
    errorText="При авторизации произошла ошибка"
    isValid={isValid}
    isFormSent={!isFormSent}
    isError={isError}
    />
  )
}
export default Login