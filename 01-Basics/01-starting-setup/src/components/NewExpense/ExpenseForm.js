import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  //Instead of having 3 seperate states, we can have a single state which contains all the constants as properties of an object
  //   const [userInput, setUserInput] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });
  //a method when assigned to onClick event will automatically gets event as a parameter
  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);

    // setUserInput({
    //   ...userInput, //this way we can ensure that the other values(here enteredAmount, enteredDate) are not thrown away, but they're also part of the new state
    //   enteredTitle: e.target.value,
    // });
    //whenever we update a state(enteredTitle: e.target.value) and we depend on previous state(...userInput) like the above is technically fine but it may fail in niche cases
    //So instead whenever our state depends on previous state, we use the below code
    // setUserInput((prevState)=>{
    //     return{...prevState, enteredTitle: e.target.value}
    // });
  };
  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
  };
  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: e.target.value,
    // });
  };
  const submitHandler = (event) => {
    event.preventDefault(); //to avoid requests
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, //extra '+' to convert the string to number
      date: new Date(enteredDate),
    };
    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            onChange={amountChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};
export default ExpenseForm;
