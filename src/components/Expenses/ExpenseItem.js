import { useState } from 'react';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import '../UI/ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const updateTitle = () => {
    setTitle('Hello');
  };
  
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item__title">{title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
      <button onClick={updateTitle}>Hello</button> 
    </Card>
  )
}

export default ExpenseItem;
