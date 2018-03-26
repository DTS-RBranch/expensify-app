import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import { EditExpensePage } from '../../components/EditExpensePage';

let editExpense, removeExpense, history, wrapper;

beforeEach(() => {
    editExpense = jest.fn();
    removeExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(
        <EditExpensePage 
            editExpense={editExpense} 
            removeExpense={removeExpense} 
            history={history}
            expense={expenses[2]}
        />
    );
});

test('Render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Render EditExpensePage onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2]);
});

test('Render EditExpensePage onRemove', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(removeExpense).toHaveBeenCalledWith({
        id: expenses[2].id
    });
});