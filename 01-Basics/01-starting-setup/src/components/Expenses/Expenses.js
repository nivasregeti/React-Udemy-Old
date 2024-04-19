import React, { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  const labelChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const fileterdExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <div>
      <Card className="expenses">
        {/* selected here is our own property not a predefined on */}
        <ExpensesFilter
          selected={filteredYear}
          onLabelChanged={labelChangeHandler}
        />
        <ExpensesChart expenses={fileterdExpenses} />
        <ExpensesList items={fileterdExpenses} />
      </Card>
    </div>
  );
};
export default Expenses;
