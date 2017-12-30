import { addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const expense = { id: '123abc', description: 'electric bill', amount: 2500, note: '' }
  const action = editExpense(expense);
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    expense: expense
  });
});

test('should setup add expense action object with provided values', () => {
  const expenseData = { description: 'Rent', amount: 5000, createdAt: 1000, note: 'this was last month rent'};
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  const emptyExpense = { description: '', amount: 0, createdAt: 0, note: '', id: expect.any(String) }
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: emptyExpense
  });

});