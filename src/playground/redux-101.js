import { createStore } from 'redux';


//Action Generators - functions that return action objects

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
    type: 'DECREMENT',
    decrementBy
});


const setCount = ( {count} ) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});



//Reducers - pure functions

const countReducer = (state = {count: 0}, action) => {
    switch (action.type) {
        case 'INCREMENT' : 
            return { count: state.count + action.incrementBy };

        case 'DECREMENT' :
            return { count: state.count - action.decrementBy };

        case 'RESET' :
            return { count: 0 };

        case 'SET' :
            return { count: action.count};

        default: return state;
    }
};



const store = createStore(countReducer);

const unsubscribe = store.subscribe( () => {
    console.log(store.getState());
})

//Action - Increment

// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5}));

// store.dispatch({
//     type: 'RESET'
// });

store.dispatch(resetCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(decrementCount());

store.dispatch(setCount({ count: 200}));