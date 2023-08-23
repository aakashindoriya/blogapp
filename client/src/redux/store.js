import thunk from 'redux-thunk';

import {
    legacy_createStore as createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import authReducer from './reducers/auth.reducer';
import { blogReducer } from './reducers/blog.reducer';



let root = combineReducers({
    auth: authReducer,
    blog: blogReducer
})


export const store = createStore(
    root,
    applyMiddleware(thunk)
);