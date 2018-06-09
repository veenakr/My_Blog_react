import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import 'normalize.css/normalize.css'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses'
import expenses from './reducers/expenses';
import { Provider } from 'react-redux';

const store = configureStore();

store.dispatch(addExpense( { description: 'Water Bill', amount: 4500 }));
store.dispatch(addExpense( { description: 'Gas Bill', amount: 7005, createdAt: 1000 }));
store.dispatch(addExpense( { description: 'Rent', amount: 109500 }));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

console.log(store.getState());

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));