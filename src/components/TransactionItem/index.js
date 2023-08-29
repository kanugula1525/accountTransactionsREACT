// Write your code here
import './index.css'

const TransitionItem = props => {
  const {onDeleteItem, eachTransaction} = props
  const {id, title, amount, transaction} = eachTransaction
  const deletItem = () => {
    onDeleteItem(id)
  }

  return (
    <li className="transactionItemStyle">
      <div className="order2">
        <p>{title}</p>
      </div>
      <div className="order2">
        <p>Rs {amount}</p>
      </div>
      <div className="order2">
        <p>{transaction}</p>
      </div>
      <button
        data-testid="delete"
        className="deleteButton"
        onClick={deletItem}
        type="button"
      >
        <img
          className="deleteImage"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default TransitionItem
