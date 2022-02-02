import React, { useCallback } from "react";

export function useForm() {
  const [values, setValues] = React.useState({ search: ''});

  const handleChange = (event) => {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      setValues({...values, [name]: value});
  };

  return {values, handleChange, setValues};
}

export function useFormWithValidation(inputs) {
  const [values, setValues] = React.useState(inputs);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target
    setValues({...values, [name]: value});
    setErrors({...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm, setValues, setIsValid};
}