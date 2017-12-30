import React from 'react';
import { shallow } from 'enzyme' 
import moment from 'moment';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('should render expense form correctly', () =>{
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('should render expense form with the expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} />)
  expect(wrapper).toMatchSnapshot();
});

test('should render error for invalid form submission', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error').length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
})

test('should set description on input change', () =>{
  const wrapper = shallow(<ExpenseForm />);
  const value = 'new description';
  wrapper.find('input').at(0).simulate('change', {
    target: { value: value }
  });
  expect(wrapper.state('description')).toBe(value);
});

test('should set note on input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = 'new note';
  wrapper.find('textarea').simulate('change', {
    target: { value: value }
  });
  expect(wrapper.state('note')).toBe(value);
});

test('should set amount on valid input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '23.50';
  wrapper.find('input').at(1).simulate('change', {
    target: { value: value }
  });
  expect(wrapper.state('amount')).toBe(value);
});

test('should not set amount on invalid input change', () => {
  const wrapper = shallow(<ExpenseForm />);
  const value = '12.111';
  wrapper.find('input').at(1).simulate('change', {
    target: { value: value }
  });
  expect(wrapper.state('amount')).toBe('');
});

test('should call onsubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy} />)
  wrapper.find('form').simulate('submit', {
    preventDefault: () => {}
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[1].description,
    amount: expenses[1].amount,
    note: expenses[1].note,
    createdAt: expenses[1].createdAt
  })
});

test('should set new date on date change', () => {
  const now = moment();
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onDateChange')(now);
  expect(wrapper.state('createdAt')).toEqual(now);
});

test('should set calendar focues on change', () =>{
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find('SingleDatePicker').prop('onFocusChange')({ focused: true });
  expect(wrapper.state('calendarFocused')).toBe(true);
});

 



