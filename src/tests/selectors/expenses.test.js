import selectExpenses from '../../selectors/expenses';
import moment from 'moment';
import expenses from '../fixtures/expenses';


test('should filter by text value', () => {
  const filters = { text: 'e', sortBy: 'date' }
  const visibleExpenses = selectExpenses(expenses, filters);
  expect(visibleExpenses).toEqual([expenses[2], expenses[1]]);
});

test('should filter by startDate', () => {
  const filters = { text: '', sortBy: 'date', startDate: moment(0) }
  const visibleExpenses = selectExpenses(expenses, filters);
  expect(visibleExpenses).toEqual([expenses[2], expenses[0]]);
});

test('shoud filter by end date', () => {
  const filters = { text: '', sortBy: 'date', endDate: moment(0) }
  const visibleExpenses = selectExpenses(expenses, filters);
  expect(visibleExpenses).toEqual([expenses[0], expenses[1]]);
});

test('shoud sort by date', () => {
  const filters = { text: '', sortBy: 'date' }
  const visibleExpenses = selectExpenses(expenses, filters);
  expect(visibleExpenses).toEqual([expenses[2], expenses[0], expenses[1]]);
});

test('shoud sort by amount', () => {
  const filters = { text: '', sortBy: 'amount' }
  const visibleExpenses = selectExpenses(expenses, filters);
  expect(visibleExpenses).toEqual([expenses[1], expenses[2], expenses[0]]);
});