import './NewExpense.css'
import {useState} from 'react'

import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {

    const [editing, setEditing] = useState(false)

    const startEditing = () => {
        setEditing(true);
    }

    const stopEditing = () => {
        setEditing(false)
    }

    return (
        <div className='new-expense'>
            
            {!editing && <button onClick={startEditing}>Add New Expense</button>}

            {editing && <ExpenseForm func={props.func} stopEditing={stopEditing}/>}

        </div>
    )
}

export default NewExpense
