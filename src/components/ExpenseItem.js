import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from './Card';

function ExpenseItem(props) { // the word props can be set to any other name //
    return (
        <Card className='expense-item'>
            <ExpenseDate tarehe={props.tarehe} />
            <div className='expense-item__description'>
                <h2>{props.kichwa}</h2>
                <div className='expense-item__price'>${props.bei}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;