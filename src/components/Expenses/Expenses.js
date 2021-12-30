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
      <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
      <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
      <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
    </Card>
  )
}

export default Expenses;
