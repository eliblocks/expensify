import { setStartDate, setEndDate, sortBy, setTextFilter } from '../../actions/filters';
import moment from 'moment';

test('should generate set set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    date: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    date: moment(0)
  })
});

test('should generate sort by date action object', () => {
  const action = sortBy('date');
  expect(action).toEqual({
    type: 'SORT_BY',
    field: 'date'
  });
});

test('should generate sort by amount action object', () => {
  const action = sortBy('amount');
  expect(action).toEqual({
    type: 'SORT_BY',
    field: 'amount'
  });
});

test('should generate filter by text action object with text value', () => {
  const action = setTextFilter('rent');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'rent'
  });
});

test('should generate filter by text action object with empty string', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
});

