import { useState } from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import '../UI/Expenses.css';


const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const getfilterYear = (selectedYear) => {    
    console.log(`Year => ${selectedYear}`);
    setFilteredYear(selectedYear);
  }

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onSelectYear={getfilterYear}/>
      {props.items.map(expense => (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />))}
    </Card>
  )
}

export default Expenses;
