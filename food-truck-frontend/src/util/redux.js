import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    // Add your reducers here
});

export const buildStore = (initialState) => {
    return configureStore({
        preloadedState: initialState,
        reducer: reducers,
        middleware: [thunk],
        devTools: process.env.NODE_ENV !== 'production'
    });
};