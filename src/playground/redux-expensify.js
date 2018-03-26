import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

//
//   Expense action generators
//
//
//   Add expense
//
const addExpense = (
    {   description = '', 
        note = '', 
        amount = 0, 
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});

//
//   Remove expense
//
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//
//   Edit Expense
//
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});

//
//  Expenses Reducer
//
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,              // Object spread operator
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default: 
            return state;
    }
};

//
//   Filter Action generators
//
const setTextFilter = ( text = '' ) => ({
    type: 'SET_TEXT_FILTER',
    text
});

//
//   Sort by Amount Action Generator
//
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

//
//   Sort by Date Action Generator
//
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

//
//   Start Date Action Generator
//
const setStartDate = ( startDate = undefined ) => ({
    type: 'SET_START_DATE',
    startDate
});

//
//   End Date Action Generator
//
const setEndDate = ( endDate ) => ({
    type: 'SET_END_DATE',
    endDate
});

//
//  Filters Reducer
//
const filtersReducerDefaultState = {
    text      : '',
    sortBy    : 'date',
    startDate : undefined,
    endDate   : undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,           // Spread operator
                text: action.text
            };
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
        };
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
        };   
        case 'SET_START_DATE':
        return {
            ...state,           
            startDate: action.startDate
        };
        case 'SET_END_DATE':
        return {
            ...state,
            endDate: action.endDate
        };    
        default: 
            return state;
    }
};

//
//   Get visible expenses
//
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch   = typeof endDate   !== 'number' || expense.createdAt <= endDate;
        const textMatch      = typeof text      !== 'string' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount <= b.amount ? 1 : -1;
        }
    });
};

//
// Store creation
//
const store = createStore(
    combineReducers({
        expenses : expensesReducer,
        filters  : filtersReducer
    }) 
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expense1 = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -2000}));
const expense2 = store.dispatch(addExpense({ description: 'Coffee', amount: 300, createdAt: -1000}));
// store.dispatch(removeExpense({ id: expense1.expense.id }));
// store.dispatch(editExpense(expense2.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
store.dispatch(sortByAmount());
// store.dispatch(sortByDate());
//store.dispatch(setStartDate(-2000));
// store.dispatch(setStartDate());
//const endDate = store.dispatch(setEndDate(2000));


const demoState = {
    expenses: [{
        id          :  'asdasdasd',
        description : "January Rent",
        note        : 'This is a place for a note',
        amount      : 54500,
        createdAt   : 0
    }],
    filters: {
        text      : 'rent',
        sortBy    : 'amount',   //  date or amount
        startDate : undefined,
        endDate   : undefined
    }
};

// const user = {
//     name: 'Jen', 
//     age: 24
// };
// console.log({
//     ...user,
//     age: 27,
//     location: 'Mason'
// });
