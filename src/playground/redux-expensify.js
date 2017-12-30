// import { createStore, combineReducers } from 'redux';
// import uuid from 'uuid';

// const addExpense = (
//   { 
//     description = '', 
//     note = '', 
//     amount = 0, 
//     createdAt = 0 
//   } = {}
// ) => ({
//   type: 'ADD_EXPENSE',
//   expense: {
//     id: uuid(),
//     description,
//     note,
//     createdAt,
//     amount
//   }
// });

// const removeExpense = ( { id } ) => ({
//   type: 'REMOVE_EXPENSE',
//   id
// });

// const editExpense = (expense) => ({
//   type: 'EDIT_EXPENSE',
//   expense
// });

// const expensesReducerDefaultState = []

// const expensesReducer = (state = expensesReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'ADD_EXPENSE':
//       return [...state, action.expense];
//     case 'REMOVE_EXPENSE':
//       return state.filter(expense =>  expense.id !== action.id );
//     case 'EDIT_EXPENSE':
//       return state.map((expense) => {
//         if (expense.id === action.expense.id) {
//           return {...expense, ...action.expense}
//         } else {
//           return expense
//         }
//       })
//     default: 
//       return state;
//   }
// };

// const setTextFilter = (text = '') => ({
//   type: 'SET_TEXT_FILTER',
//   text
// });

// const sortByAmount = () => ({
//   type: 'SORT_BY_AMOUNT'
// });

// const sortByDate = () => ({
//   type: 'SORT_BY_DATE'
// });

// const sortBy = (field) => ({
//   type: 'SORT_BY',
//   field
// });

// const setStartDate = (date) => ({
//   type: 'SET_START_DATE',
//   date
// });

// const setEndDate = (date) => ({
//   type: 'SET_END_DATE',
//   date
// });

// const filtersReducerDefaultState = { 
//   text: '',
//   sortBy: 'date',
//   startDate: undefined,
//   endDate: undefined
// };

// const filtersReducer = (state = filtersReducerDefaultState, action) => {
//   switch (action.type) {
//     case 'SET_TEXT_FILTER':
//       return { ...state, text: action.text };
//     case 'SORT_BY_AMOUNT':
//       return { ...state, sortBy: 'amount' };
//     case 'SORT_BY_DATE':
//       return { ...state, sortBy: 'date' };
//     case 'SORT_BY':
//       return { ...state, sortBy: action.field };
//     case 'SET_START_DATE':
//       return { ...state, startDate: action.date };
//     case 'SET_END_DATE':
//       return { ...state, endDate: action.date };
//     default: 
//       return state;
//   }
// };

// const getVisibleExpenses = (expenses, {text, startDate, endDate, sortBy}) => {
//   return expenses.filter((expense) => {
//     const startDateMatch = startDate === undefined || expense.createdAt > startDate;
//     const endDateMatch = endDate === undefined || expense.createdAt < endDate;
//     const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
//     return startDateMatch && endDateMatch && textMatch;
//   }).sort((a, b) => {
//     if (sortBy === 'date') {
//       return a.createdAt < b.createdAt ? 1 : -1;
//     }

//     if (sortBy === 'amount') {
//       return a.amount < b.amount ? 1 : -1;
//     }
//   });
// };


// const store = createStore(
//   combineReducers({
//     expenses: expensesReducer,
//     filters: filtersReducer
//   })
// );

// store.subscribe(() => {
//   const state = store.getState();
//   const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//   console.log(visibleExpenses);
// });


// const expense1 = store.dispatch(addExpense({ description: 'rent', amount: 500, createdAt: 3000 }));
// const expense2 = store.dispatch(addExpense({ description: 'coffee', amount: 300, createdAt: 1000 }));

// // store.dispatch(removeExpense({ id: expense1.expense.id }));
// // store.dispatch(editExpense({ id: expense2.expense.id, amount: 500 }));
 
// // store.dispatch(setTextFilter('rent'));
// // store.dispatch(setTextFilter('Fee'));
// // store.dispatch(sortByAmount());
// // store.dispatch(sortByDate());

// store.dispatch(sortBy('amount'));

// // store.dispatch(setStartDate(-2000));
// // store.dispatch(setEndDate(2000));

// const demoState = {
//   expenses: [{
//     id: 'dsvsd',
//     description: 'January rent',
//     note: 'this was the final payment for that address',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount',
//     startDate: undefined,
//     endDate: undefined
//   }
// };


