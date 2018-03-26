import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Expenses Reducer default settings', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test('Expenses Reducer Remove Expense (valid id)', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: expenses[2].id
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1]]);
});

test('Expenses Reducer Remove Expense (invalid id)', () => {
    const action = {
        type: 'REMOVE_EXPENSE', 
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Expenses Reducer Add Expense', () => {
    const expense = {
        description: 'Coffee',
        note: '',
        amount: 495,
        createdAt: moment(0)
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
    //
    //   Another way to use expect
    //
    expect(state).toEqual([expenses[0], expenses[1], expenses[2], expense]);
});

test('Expenses Reducer Edit Expense (valid id)', () => {
    const amount = 120000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});

test('Expenses Reducer Edit Expense (invalid id)', () => {
    const amount = 120000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

