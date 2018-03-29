import  selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('should return total of 0 if no expenses', () => {
    const res = selectExpensesTotal(p[]);
    expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
    const res = selectExpensesTotal([expenses[0]]);
    expect(res).toBe(195)
});

test('should correctly add up a multiple expenses', () => {
    const res = selectExpensesTotal([expenses[0], expenses[2]]);
    expect(res).toBe(114195)
});
