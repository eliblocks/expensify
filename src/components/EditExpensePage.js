import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {

  onSubmit = (expense) => {
    const newExpense = { ...this.props.expense, ...expense }
    this.props.editExpense(newExpense);
    this.props.history.push('/');
  };

  onClick = () => {
    this.props.removeExpense(this.props.expense);
    this.props.history.push('/');
  }
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
};


const mapStateToProps = (state, props) => {
  const found = state.expenses.find((expense) => expense.id === props.match.params.id);
  return { 
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  editExpense: (newExpense) => dispatch(editExpense(newExpense)),
  removeExpense: (expense) => dispatch(removeExpense(expense))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
