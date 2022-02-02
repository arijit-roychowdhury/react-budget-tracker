import { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

let INITIAL_EXPENSES = [
  {
    id: 'e1',
    date: new Date(2021, 2, 25),
    title: 'Term Insurance',
    amount: 95.39,
  },
  {
    id: 'e2',
    date: new Date(2019, 6, 15),
    title: 'Car Insurance',
    amount: 201.99,
  },
  {
    id: 'e3',
    date: new Date(2021, 2, 25),
    title: 'Insurance',
    amount: 125.59,
  }
];

function App() {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);
  

  const addExpenseHandler = (enteredExpense) => {
    setExpenses((prevExpenses) => {
      return [enteredExpense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
