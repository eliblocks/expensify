import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters';

let setTextFilter, sortBy, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortBy = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(<ExpenseListFilters 
                    filters={filters}
                    setTextFilter={setTextFilter}
                    sortBy={sortBy}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}/>);

});

test('should render expense list filter correctly', () =>{
  expect(wrapper).toMatchSnapshot();
})

test('should render expense list filter with alt data correctly', () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
})

test("should handle text change", () => {
  wrapper.find('input').simulate('change', {target: {value: 'b'}});
  expect(setTextFilter).toHaveBeenLastCalledWith('b');
});

test('should sort by date', () => {
  const option = wrapper.find('select').simulate('change', {target: { value: 'date'}});
  expect(sortBy).toHaveBeenLastCalledWith('date');
});

test('should sort by amount', () => {
  const option = wrapper.find('select').simulate('change', {target: { value: 'amount'}});
  expect(sortBy).toHaveBeenLastCalledWith('amount');
});


test('should shandle date changes', () => {
  wrapper
  .find('DateRangePicker')
  .prop('onDatesChange')({startDate: altFilters.startDate, endDate: altFilters.endDate});

  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test('should handle date focus changes', () => {
  wrapper
  .find('DateRangePicker')
  .prop('onFocusChange')('endDate');

  expect(wrapper.state('calendarFocused')).toBe('endDate');
});
