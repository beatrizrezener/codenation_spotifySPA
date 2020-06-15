import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import appReducers from '../reducers';
import UserConstants from '../constants/user';

const rootReducer = (state, action) => {
  if (action.type === UserConstants.USER_LOGOUT) {
    state = undefined
  }
  return appReducers(state, action)
}

const persistConfig = {
  key: 'spotifyStorage',
  storage,
  blacklist: ['auth'], // auth will not be persisted
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const persistor = persistStore(store)

export { store, persistor };
