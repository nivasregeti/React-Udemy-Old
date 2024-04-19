import { useState } from "react";

const useBasicForm = (validateValue) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = validateValue(value);
  const hasError = !isValid && isTouched;

  const updateHandler = (event) => {
    setValue(event.target.value);
    setIsTouched(true);
  };
  const blurHandler = () => {
    setIsTouched(true);
  };
  const reset = () => {
    setValue("");
    setIsTouched(false);
  };
  return {
    value,
    isValid,
    hasError,
    updateHandler,
    blurHandler,
    reset,
  };
};

export default useBasicForm;
