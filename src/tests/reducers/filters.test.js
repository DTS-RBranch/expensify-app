import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('Filters Reducer defeult settings', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text      : '',
        sortBy    : 'date',
        startDate : moment().startOf('month'),
        endDate   : moment().endOf('month')
    });
});

test('Filters Reducer sortBy Amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'amount', 
        startDate : moment().startOf('month'),
        endDate   : moment().endOf('month')    
    });
});

test('Filters Reducer sortBy Date', () => {
    const currentState = {
        text: '', 
        sortBy: 'amount',
        startDate : moment().startOf('month'),
        endDate   : moment().endOf('month') 
    };
    const action = {
        type: 'SORT_BY_DATE'
    };
    const state = filtersReducer(currentState, action);
    expect(state).toEqual({
        text: '',
        sortBy: 'date', 
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')    
    });

    //
    //   Another way to assert the test.
    //
    expect(state.sortBy).toBe('date');
});

test('Filters Reducer set Text Filter', () => {
    const text = 'Bill';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('Filters Reducer set Start Date', () => {
    const startDate = moment().subtract(3, 'days');
    const action = {
        type: 'SET_START_DATE',
        startDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('Filters Reducer set End Date', () => {
    const endDate = moment().add(6, 'days');
    const action = {
        type: 'SET_END_DATE',
        endDate
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});