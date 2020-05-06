import {createStore,applyMiddleware} from 'redux';
import bookReducer from './book/bookReducer';
import logger from 'redux-logger';

const store=createStore(bookReducer,applyMiddleware(logger));

export default store;