import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { AddExpensePage } from '../../components/AddExpensePage';

let addExpense, history, wrapper;

beforeEach(() => {
    addExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history} />);
});

test('Render AddExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Render AddExpensePage onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(addExpense).toHaveBeenCalledWith(expenses[1]);
});