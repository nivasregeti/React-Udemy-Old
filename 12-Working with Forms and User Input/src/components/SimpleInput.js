//#region maintaining seperate states
// import { useState } from "react";
// // useRef

// //if we want to implement some instant validation, then using state will be better as we update the state for every key stroke
// //but if we want to just have the values once at the time of submission, then it is better to use useRef
// const SimpleInput = (props) => {
//   // const nameInputRef = useRef();

//   const [eneteredName, setEnteredName] = useState("");
//   const [enteredNameIsTouched, setEnteredNameIsTouched] = useState(false);

//   const [eneteredEmail, setEnteredEmail] = useState("");
//   const [enteredEmailIsTouched, setEnteredEmailIsTouched] = useState(false);

//   const enteredNameIsValid = eneteredName.trim() !== "";
//   const nameInputIsInvalid = !enteredNameIsValid && enteredNameIsTouched;

//   const emailRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   const enteredEmailIsValid = eneteredEmail.trim().match(emailRegex);
//   const enteredEmailIsempty = eneteredEmail.trim() !== "";
//   const emailInputIsInvalid = !enteredEmailIsempty && enteredEmailIsTouched;

//   let formIsValid = false;

//   if (enteredNameIsValid && enteredEmailIsValid) {
//     formIsValid = true;
//   }

//   const nameInputChangeHandler = (event) => {
//     setEnteredName(event.target.value);

//     //instead of eneteredName, we have to use event.target.value
//     //bcoz the state function 'schedules', we may not get the latest
//     //enteredName as soon as we want.
//   };

//   const nameInputBlurHandler = () => {
//     setEnteredNameIsTouched(true);
//   };

//   const emailInputChangeHandler = (event) => {
//     setEnteredEmail(event.target.value);
//   };
//   const emailInputBlurHandler = () => {
//     setEnteredEmailIsTouched(true);
//   };

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();
//     setEnteredNameIsTouched(true);
//     if (!enteredNameIsValid) {
//       return;
//     }
//     setEnteredEmailIsTouched(true);
//     if (!enteredEmailIsValid) {
//       return;
//     }

//     console.log(eneteredName);

//     // const eneteredValue = nameInputRef.current.value;
//     // console.log(eneteredValue);

//     setEnteredName("");
//     setEnteredNameIsTouched(false);
//     setEnteredEmail("");
//     setEnteredEmailIsTouched(false);
//   };

//   const nameInputClasses = nameInputIsInvalid
//     ? "form-control invalid"
//     : "form-control";
//   const emailInputClasses = emailInputIsInvalid
//     ? "form-control invalid"
//     : "form-control";
//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           // ref={nameInputRef}
//           type="text"
//           id="name"
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//           value={eneteredName}
//         />
//         {nameInputIsInvalid && (
//           <p className="error-text">Name must not be empty</p>
//         )}
//       </div>
//       <div className={emailInputClasses}>
//         <label htmlFor="email">Email</label>
//         <input
//           type="eamil"
//           id="email"
//           onChange={emailInputChangeHandler}
//           onBlur={emailInputBlurHandler}
//           value={eneteredEmail}
//         />
//         {emailInputIsInvalid ? (
//           <p className="error-text">Email must not be empty</p>
//         ) : (
//           !enteredEmailIsValid &&
//           enteredEmailIsTouched && (
//             <p className="error-text">Entered email is invalid</p>
//           )
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;
//#endregion

//#region maintaining single state
// import { useState } from "react";

// const SimpleInput = (props) => {
//   const [enteredInput, setEnteredInput] = useState({ name: "", email: "" });
//   const [enteredInputisTouched, setEnteredInputIsTouched] = useState({
//     ofName: false,
//     ofEmail: false,
//   });

//   const enteredInputIsNonEmpty = {
//     ofName: enteredInput.name.trim() !== "",
//     ofEmail: enteredInput.email.trim() !== "",
//   };

//   const inputIsInvalid = {
//     ofName: !enteredInputIsNonEmpty.ofName && enteredInputisTouched.ofName,
//     ofEmail: !enteredInputIsNonEmpty.ofEmail && enteredInputisTouched.ofEmail,
//   };

//   const emailRegex =
//     /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
//   const enteredEmailIsValid = enteredInput.email.trim().match(emailRegex);

//   let formIsValid = false;

//   if (
//     enteredInputIsNonEmpty.ofName &&
//     enteredInputIsNonEmpty.ofEmail &&
//     enteredEmailIsValid
//   ) {
//     formIsValid = true;
//   }

//   const nameInputChangeHandler = (event) => {
//     setEnteredInput((prevState) => {
//       return {
//         ...prevState,
//         name: event.target.value,
//       };
//     });
//   };

//   const nameInputBlurHandler = () => {
//     setEnteredInputIsTouched((prevState) => {
//       return {
//         ...prevState,
//         ofName: true,
//       };
//     });
//   };

//   const emailInputChangeHandler = (event) => {
//     setEnteredInput((prevState) => {
//       return {
//         ...prevState,
//         email: event.target.value,
//       };
//     });
//   };
//   const emailInputBlurHandler = () => {
//     setEnteredInputIsTouched((prevState) => {
//       return {
//         ...prevState,
//         ofEmail: true,
//       };
//     });
//   };

//   const formSubmissionHandler = (event) => {
//     event.preventDefault();
//     setEnteredInputIsTouched({ ofName: true, ofEmail: false });
//     if (!enteredInputIsNonEmpty.ofName || !enteredInputIsNonEmpty.ofEmail) {
//       return;
//     }

//     setEnteredInput({ name: "", email: "" });
//     setEnteredInputIsTouched({ ofName: false, ofEmail: false });
//   };

//   const nameInputClasses = inputIsInvalid.ofName
//     ? "form-control invalid"
//     : "form-control";
//   const emailInputClasses = inputIsInvalid.ofEmail
//     ? "form-control invalid"
//     : "form-control";
//   return (
//     <form onSubmit={formSubmissionHandler}>
//       <div className={nameInputClasses}>
//         <label htmlFor="name">Your Name</label>
//         <input
//           type="text"
//           id="name"
//           onChange={nameInputChangeHandler}
//           onBlur={nameInputBlurHandler}
//           value={enteredInput.name}
//         />
//         {inputIsInvalid.ofName && (
//           <p className="error-text">Name must not be empty</p>
//         )}
//       </div>
//       <div className={emailInputClasses}>
//         <label htmlFor="email">Email</label>
//         <input
//           type="eamil"
//           id="email"
//           onChange={emailInputChangeHandler}
//           onBlur={emailInputBlurHandler}
//           value={enteredInput.email}
//         />
//         {inputIsInvalid.ofEmail ? (
//           <p className="error-text">Email must not be empty</p>
//         ) : (
//           !enteredEmailIsValid &&
//           enteredInputisTouched.ofEmail && (
//             <p className="error-text">Entered email is invalid</p>
//           )
//         )}
//       </div>
//       <div className="form-actions">
//         <button disabled={!formIsValid}>Submit</button>
//       </div>
//     </form>
//   );
// };

// export default SimpleInput;

//#endregion

//#region using custom hook
import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);

    // nameInputRef.current.value = ''; => NOT IDEAL, DON'T MANIPULATE THE DOM
    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = nameInputHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClasses = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {nameInputHasError && (
          <p className="error-text">Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor="email">Your E-Mail</label>
        <input
          type="email"
          id="email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {emailInputHasError && (
          <p className="error-text">Please enter a valid email.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
//#endregion
