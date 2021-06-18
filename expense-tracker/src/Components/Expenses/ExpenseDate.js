import './ExpenseDate.css'

const ExpenseDate = (props) => {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"]

    return (
        <div className='expense-date'>
            <div className='expense-date__year'>{props.date.getFullYear()}</div>
            <div className='expense-date__month'>{monthNames[props.date.getMonth()]}</div>
            <div className='expense-date__day'>{props.date.getDate()}</div>
        </div>
    )
}

export default ExpenseDate
