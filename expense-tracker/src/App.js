import {useState} from 'react'

import Expenses from './Components/Expenses/Expenses'
import NewExpense from './Components/NewExpense/NewExpense'

const initialExpenses = [
  {id: '1', title: 'Car Insurance', date: new Date(2020, 1, 2), amount:'1200.00'},
  {id: '2', title: 'Phone recharge', date: new Date(2021, 3, 16), amount: '10.00'},
  {id: '3', title: 'Netflix subscription', date: new Date(2021, 11, 26), amount:'15.00'}
]

const App = () => {

  const [expenses, setExpenses] = useState(initialExpenses)

  const func = (newExpenseData) => {
    setExpenses(prevState => [newExpenseData, ...prevState])
  }

  return (
    <div>

      <NewExpense func={func}></NewExpense>

      <Expenses expenses={expenses}></Expenses>

    </div>
  );
}

export default App;
