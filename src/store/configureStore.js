import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers/root';
import thunk from 'redux-thunk';

const configureStore = () => {
  return createStore(rootReducer, compose(applyMiddleware(thunk)));
};

export default configureStore;
