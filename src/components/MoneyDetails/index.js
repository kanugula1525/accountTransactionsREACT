// Write your code here
import './index.css'

// properties={(balance, income, expenses)}

const MoneyDetails = props => {
  const {balance, income, expenses} = props
  return (
    <div className="middleContainer">
      <div className="balanceContainer subContainerStyle">
        <img
          className="imageStyle"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div>
          <p className="containerTitleStyle">Your Balance</p>
          <p data-testid="balanceAmount" className="valueStyle">
            Rs {balance}
          </p>
        </div>
      </div>

      <div className="incomeContainer subContainerStyle">
        <img
          className="imageStyle"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div>
          <p className="containerTitleStyle">Your Income</p>
          <p data-testid="incomeAmount" className="valueStyle">
            Rs {income}
          </p>
        </div>
      </div>

      <div className="expensesContainer subContainerStyle">
        <img
          className="imageStyle"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div>
          <p className="containerTitleStyle">Your Expenses</p>
          <p data-testid="expensesAmount" className="valueStyle">
            Rs {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
