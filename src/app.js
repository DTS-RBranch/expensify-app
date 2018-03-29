import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
import { addExpense, removeExpense, editExpense } from './actions/expenses';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from './actions/filters';
import  getVisibleExpenses from './selectors/expenses';

import 'normalize.css/normalize.css';     // CSS Reset - All browsers start in the same place stylewise.
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

console.log(require('os').tmpdir());

// store.subscribe(() => {
//     const state = store.getState();
//     const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
//     console.log(visibleExpenses);
// });

// store.dispatch(addExpense({ description: 'Water bill', amount: 101, createdAt: 4500}));
// store.dispatch(addExpense({ description: 'Gas bill', amount: 200, createdAt: 1000}));
// store.dispatch(addExpense({ description: 'Rent', amount: 109500}));
//store.dispatch(setTextFilter('bill'));
//store.dispatch(sortByAmount());

// setTimeout(()=> {
//     store.dispatch(setTextFilter('bill'));
// }, 3000);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));