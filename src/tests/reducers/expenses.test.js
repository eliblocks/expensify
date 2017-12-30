import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import uuid from 'uuid';

test('should set default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = { 
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
  const action = { 
    type: 'REMOVE_EXPENSE',
    id: '500'
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = { id: uuid(), description: 'big bill', amount: 10000 }
  const action = { type: 'ADD_EXPENSE', expense}
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
  let expense = expenses[1];
  expense.amount = 700
  const action = { type: 'EDIT_EXPENSE', expense }
  const state = expensesReducer(expenses, action)
  expect(state[1].amount).toBe(700);
});

test('should not edit expenses id id not found', () => {
  let expense = expenses[1];
  expense.id = uuid();
  expense.amount = 7000;
  const action = { type: 'EDIT_EXPENSE', expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});


