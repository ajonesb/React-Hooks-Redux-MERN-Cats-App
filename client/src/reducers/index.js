import { combineReducers } from 'redux';

import posts from './posts';

// Use all individual reducers you have below as an object
export const reducers = combineReducers({ posts });
