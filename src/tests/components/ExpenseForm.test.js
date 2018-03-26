import React from 'react';
import { shallow } from 'enzyme';
import expenses from '../fixtures/expenses';
import ExpenseForm from '../../components/ExpenseForm';
import moment from 'moment';

test('Render ExpenseForm', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExpenseForm with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={ expenses[1] }/>);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExpenseForm with invalid form submission', () => {
    const wrapper = shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    
    wrapper.find('form').simulate('submit', { 
        preventDefault: () => { }
    });
    
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Render ExpenseForm with description on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm />);
    
    wrapper.find('input').at(0).simulate('change', { 
        target: { value }
    });
    
    expect(wrapper.state('description')).toBe(value);
});

test('Render ExpenseForm with note on textinput change', () => {
    const value = 'New Note';
    const wrapper = shallow(<ExpenseForm />);
    
    wrapper.find('textarea').simulate('change', { 
        target: { value }
    });
    
    expect(wrapper.state('note')).toBe(value);
});

test('Render ExpenseForm with valid amount on input change', () => {
    const value = '25.02';
    const wrapper = shallow(<ExpenseForm />);
    
    wrapper.find('input').at(1).simulate('change', { 
        target: { value }
    });
    
    expect(wrapper.state('amount')).toBe(value);
});

test('Render ExpenseForm with invalid amount on input change', () => {
    const value = '25.025';
    const wrapper = shallow(<ExpenseForm />);
    
    wrapper.find('input').at(1).simulate('change', { 
        target: { value }
    });
    
    expect(wrapper.state('amount')).not.toBe(value);

    //
    //   Another way to assert that the amount value did not change.  Since we did not pass 
    //   anything in, it should be the default values of an empty string.
    //
    expect(wrapper.state('amount')).toBe('');
});

test('Render ExpenseForm call onSubmit with valid prop(s)', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);

    wrapper.find('form').simulate('submit', { 
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description: expenses[0].description,
        amount: expenses[0].amount,
        note: expenses[0].note,
        createdAt: expenses[0].createdAt
    });
});

test('Render ExpenseForm set new date on onDateChange ', () => {
    const now = moment();
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now);
});

test('Render ExpenseForm setcalendarFocused to true ', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').prop('onFocusChange')( {focused} );
    expect(wrapper.state('calanderFocused')).toBe( focused );
});