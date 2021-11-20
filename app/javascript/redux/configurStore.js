import {
  createStore, applyMiddleware, compose,
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import messagesReducer from './messages/messages'

// Line to use redux-dev-tools extension on chrome
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  messagesReducer,
  composeEnhancers(
    applyMiddleware(thunk, logger),
  ),
);

export default store;