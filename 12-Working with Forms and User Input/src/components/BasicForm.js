import useBasicForm from "../hooks/use-basicForm";

const BasicForm = (props) => {
  const {
    value: firstName,
    isValid: isFirstNameValid,
    hasError: firstNameHasError,
    updateHandler: firstNameUpdateHandler,
    blurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useBasicForm((value) => value.trim() !== "");

  const {
    value: lastName,
    isValid: isLastNameValid,
    hasError: lastNameHasError,
    updateHandler: lastNameUpdateHandler,
    blurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useBasicForm((value) => value.trim() !== "");

  const {
    value: email,
    isValid: isEmailValid,
    hasError: emailHasError,
    updateHandler: emailUpdateHandler,
    blurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useBasicForm((value) => value.includes("@"));

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }
    resetFirstName();
    resetLastName();
    resetEmail();
  };

  const firstNameInputClasses = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClasses = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailHasError
    ? "form-control invalid"
    : "form-control";

  let formIsValid = isFirstNameValid && isLastNameValid && isEmailValid;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="control-group">
        <div className={firstNameInputClasses}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameUpdateHandler}
            onBlur={firstNameBlurHandler}
            value={firstName}
          />
          {firstNameHasError && (
            <p className="error-text"> First Name cannot be empty</p>
          )}
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameUpdateHandler}
            onBlur={lastNameBlurHandler}
            value={lastName}
          />
          {lastNameHasError && (
            <p className="error-text"> Last Name cannot be empty</p>
          )}
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="email"
          onChange={emailUpdateHandler}
          onBlur={emailBlurHandler}
          value={email}
        />
        {emailHasError && <p className="error-text">Email is invalid</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
