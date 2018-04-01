import uuid from 'uuid';
import database from '../firebase/firebase';

//  without firebase:
//  component calls action generator
//  action generator returns object
//  component dispatches object
//  redux store changes

//  with firebase:
//  component calls action generator
//  action generator returns function
//  component dispatches function (?)
//  functions runs (has the ability to dispatch other actions and do whatever it wants)

//
//   Expense action generators
//
//
//   Add expense action
//
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '', 
            note = '', 
            amount = 0, 
            createdAt = 0
        } = expenseData;


        const expense = { description, note, amount, createdAt }
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

//
//   Remove expense action
//
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//
//   Edit Expense action
//
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id, 
    updates
});