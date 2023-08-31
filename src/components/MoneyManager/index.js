import {Component} from 'react'

import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails/index'
import TransitionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transaction: 'INCOME',
    balance: 0,
    income: 0,
    expenses: 0,
    title: '',
    amount: '',
    transactionList: [],
  }

  transactionType = event => {
    this.setState({transaction: event.target.value})
  }

  setTitle = event => {
    this.setState({title: event.target.value})
  }

  setAmount = event => {
    this.setState({amount: event.target.value})
  }

  transactionForm = event => {
    event.preventDefault()
    const {title, transaction, amount} = this.state

    const newTransactionItem = {
      id: uuidv4(),
      title,
      amount,
      transaction,
    }

    if (amount !== '' && title !== '') {
      this.setState(prevState => ({
        transactionList: [...prevState.transactionList, newTransactionItem],
      }))
      this.setState({
        title: '',
        amount: '',
        transaction: 'INCOME',
      })

      if (transaction === 'INCOME') {
        this.setState(prevState => ({
          balance: parseInt(prevState.balance) + parseInt(amount),
          income: parseInt(prevState.income) + parseInt(amount),
        }))
      } else {
        this.setState(prevState => ({
          balance: parseInt(prevState.balance) - parseInt(amount),
          expenses: parseInt(prevState.expenses) + parseInt(amount),
        }))
      }
    }
  }

  onDeleteItem = ID => {
    const {transactionList} = this.state
    const modifiedList = transactionList.filter(eachTransaction => {
      if (eachTransaction.id !== ID) {
        return eachTransaction
      }
      if (eachTransaction.transaction === 'INCOME') {
        this.setState(prevState => ({
          balance:
            parseInt(prevState.balance) - parseInt(eachTransaction.amount),
          income: parseInt(prevState.income) - parseInt(eachTransaction.amount),
        }))
      } else {
        this.setState(prevState => ({
          balance:
            parseInt(prevState.balance) + parseInt(eachTransaction.amount),
          expenses:
            parseInt(prevState.expenses) - parseInt(eachTransaction.amount),
        }))
      }
      return ''
    })

    this.setState({transactionList: modifiedList})
  }

  render() {
    const {
      transaction,
      balance,
      income,
      expenses,
      title,
      amount,
      transactionList,
    } = this.state
    return (
      <div className="mainContainer">
        <div className="headerStyle">
          <p className="nameStyle">Hi Richard</p>
          <div className="message">
            <p>Welcome back to your</p>
            <p className="caption"> Money Manager</p>
          </div>
        </div>

        <MoneyDetails balance={balance} income={income} expenses={expenses} />

        <div className="bottomContainer">
          <form
            onSubmit={this.transactionForm}
            className="transactionContainer"
          >
            <h1 className="transactionTitleStyle">Add Transaction</h1>
            <div className="inputContainer">
              <label className="inputTitle" htmlFor="title">
                TITLE
              </label>
              <input
                value={title}
                onChange={this.setTitle}
                placeholder="TITLE"
                className="inputStyle"
                id="title"
              />
            </div>
            <div className="inputContainer">
              <label className="inputTitle" htmlFor="amount">
                AMOUNT
              </label>
              <input
                value={amount}
                onChange={this.setAmount}
                placeholder="AMOUNT"
                className="inputStyle"
                id="amount"
              />
            </div>

            <div className="inputContainer">
              <label className="inputTitle" htmlFor="type">
                TYPE
              </label>
              <select
                onChange={this.transactionType}
                value={transaction}
                id="type"
                className="inputStyle"
              >
                {transactionTypeOptions.map(eachItem => (
                  <option
                    key={eachItem.optionId}
                    className="optionStyle"
                    value={eachItem.optionId}
                  >
                    {eachItem.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button className="addButtonStyle" type="submit">
              Add
            </button>
          </form>
          <div className="transactionHistoryContainer">
            <h1 className="transactionTitleStyle">History</h1>
            <div>
              <div className="TransactionHeaderStyle">
                <div className="order1">
                  <p>Title</p>
                </div>
                <div className="order1">
                  <p>Amount</p>
                </div>
                <div className="order1">
                  <p>Type</p>
                </div>
              </div>
              <ul className="transactionListCon">
                {transactionList.map(eachTransaction => (
                  <TransitionItem
                    onDeleteItem={this.onDeleteItem}
                    key={eachTransaction.id}
                    eachTransaction={eachTransaction}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
