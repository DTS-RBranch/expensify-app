import { createStore } from 'redux';

// const add = ({a, b}, c) => {
//     return a + b + c;
// }
// console.log(add({ a:1, b: 12}, 100));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy: decrementBy
});

const resetCount = () => ({
    type: 'RESET'
});

const setCount = ({count = 0 } = {}) => ({
    type: 'SET',
    count: count
});

//
//   Reducer
//   1.   Reducers are PURE functions (outputs ONLY depend on inputs)
//   2.   NEVER change state or action
//
const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
                const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            };  
        case 'RESET':
            return {
                count: state.count = 0
            } 
        case 'SET':
        const count = typeof action.count === 'number' ? action.count : 0;
        return {
                count: count
            }        
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unSubscribe = store.subscribe(() => {
    console.log(store.getState());
});

console.log(store.getState());

//
// Increment examples
//
store.dispatch({
    type: 'INCREMENT'
});
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 4
});
store.dispatch(incrementCount({incrementBy: 5}))
store.dispatch(incrementCount());

//
//   Stop calling the subscribe function
//
//unSubscribe();

//
//   Decrement Examples
//
store.dispatch(decrementCount());
store.dispatch({
    type: 'DECREMENT'
});
store.dispatch({
    type: 'DECREMENT',
    decrementBy: 4
});
store.dispatch(decrementCount({decrementBy: 4}));


//
//   Reset examples
//
store.dispatch({
    type: 'RESET'
});
store.dispatch(resetCount());

//
//   Set Examples
//
store.dispatch ({
    type: 'SET'
});
store.dispatch ({
    type: 'SET',
    count: 100
});
store.dispatch(setCount({count: 99}));
store.dispatch(setCount());
