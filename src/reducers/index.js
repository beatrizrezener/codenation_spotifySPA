import { combineReducers } from 'redux'

import authReducer from './auth';
import userReducer from './user';
import jukeboxReducer from './jukebox';

const appReducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  jukebox: jukeboxReducer,
})

export default appReducers;
