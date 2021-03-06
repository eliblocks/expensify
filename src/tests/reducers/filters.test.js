import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sort by to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
  expect(state.sortBy).toBe('amount');
});

test('should set sort by to date', () =>{
  const currentState = {
    text: '',
    sortBy: 'amount'
  };
  const action = {type: 'SORT_BY_DATE'};
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {

  const action = { text: 'rent', type: 'SET_TEXT_FILTER' }
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('rent');
});

test('should set start filter', () => {
  const startDate = moment();
  const action = {
    type: 'SET_START_DATE',
    date: startDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toEqual(startDate);
});

test('should set end filter', () => {
  const endDate = moment();
  const action = {
    type: 'SET_END_DATE',
    date: endDate
  }
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toEqual(endDate);
});



