import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import coursesReducer from './courses/reducer';
import authorsReducer from './authors/reducer';
import userReducer from './user/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
	courses: coursesReducer,
	authors: authorsReducer,
	user: userReducer,
});

const store = createStore(reducer, composeEnhancers(applyMiddleware()));

export default store;
