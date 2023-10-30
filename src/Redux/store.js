import { applyMiddleware, combineReducers, legacy_createStore } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './Auth/reducer';
import { chatReducer } from './Chat/reducer';
import { messageReducer } from './Messages/reducer';

const rootReducer = combineReducers({
    auth: authReducer,
    chat: chatReducer,
    msg: messageReducer

});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));