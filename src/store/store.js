import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger/src';

import { rootReducer } from './root-reducer';

const middleWares = [process.env.NODE_ENV === 'development' && logger].filter(
	Boolean
);

const composeEnhancers = compose(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composeEnhancers);