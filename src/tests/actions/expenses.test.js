import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('Remove Expense Action Generator', () => {
   const action = removeExpense( {id: '123abc'} );
   expect(action).toEqual({
       type: 'REMOVE_EXPENSE',
       id: '123abc'
   }); 
});

test('Edit Expense Action Generator', () => {
    const action = editExpense( '123abc', { description: 'Hello', 
                                            note: 'MyNote', 
                                            amount: 12345.67,  
                                            createdAt: 12345});
    expect(action).toEqual({
        type   : 'EDIT_EXPENSE',
        id     : '123abc', 
        updates: { description: 'Hello', 
                   note: 'MyNote', 
                   amount: 12345.67,  
                   createdAt: 12345 
                }});
});

test('Add Expense Action Generator (provided values)', () => {
    const expenseData = {description: 'Rent', 
                         note: 'MyRent', 
                         amount: 109599, 
                         createdAt: 12345 };
    
    const action = addExpense(expenseData);
    expect(action).toEqual( {
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    });
});

test('Add Expense Action Generator (default values)', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description:  '',
            note: '',
            amount: 0,
            createdAt: 0,
            id: expect.any(String)
        }   
    });
});