import './Expenses.css'
import {useState} from 'react'

import ExpenseItem from './ExpenseItem'
import Card from '../UI/Card'
import ExpensesFilter from './ExpensesFilter'

const Expenses = (props) => {

    const [year, setYear] = useState('2020')

    const func = (event) => {
        setYear(event.target.value)
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year
    })

    return (
        <Card className='expenses'>

            <ExpensesFilter selectedYear={year} func={func}></ExpensesFilter>

            {
                filteredExpenses.length === 0 && <p>No Expenses Found</p>
            }

            { filteredExpenses.length > 0 && filteredExpenses.map(expense => <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date} />) }
            
        </Card>
    )
}

export default Expenses
