import { useFormWithValidation }  from '../../validation/useFormWithValidation';
import AuthForm from '../AuthForm/AuthForm'
import React from 'react';
import { useHistory } from 'react-router-dom'
function Register(props) {
  const { isError, isFormSent, setError, setIsFormSent} = props;
  const history = useHistory();
  const {values, handleChange, errors, isValid } = useFormWithValidation({
    email: '', password: '', name: ''
  })
  React.useEffect(() => {
    setError(false);
  }, [history])

  function handleSubmit(e) {
    setIsFormSent(true)
    e.preventDefault();
    props.onRegister(values.name, values.email, values.password)
  }
  return(
    <AuthForm 
    title={"Добро Пожаловать!"}
    name={"register"}
    buttonText={"Зарегистрироваться"}
    hintText={"Уже зарегистрированы?"}
    hintLink={"Войти"}
    path="/signin"
    onSubmit={handleSubmit}
    email={values.email}
    password={values.password}
    errorEmail={errors.email}
    errorPassword={errors.password}
    errorText='При регистрации произошла ошибка'
    onChange={handleChange}
    isValid={isValid}
    isError={isError}
    isFormSent={!isFormSent}
    autoComplete='off'

      >
      <p className="authorization__label">Имя</p>
      <input
      value={values.name}
      className="authorization__input"
      onChange={handleChange}
      required
      autoComplete='off'
      id="name"
      type="text"
      minLength="2"
      name="name"
      /> 
      { errors.name && (
      <span className="authorization__error">{errors.name}</span>
      )}
    </AuthForm>
  )
}
export default Register