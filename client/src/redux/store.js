import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import filmSet from './filmsRedux';

const rootReducer = combineReducers({
    films: filmSet
});

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk)
    )
);

export default store;