import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'

import Routes from '../../routes';
import { store, persistor } from '../../store';

import './App.scss';

// PersistGate delays the rendering of app's UI until the 
// persisted state has been retrieved and saved to redux.
const App = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <div className="app" data-testid="app">
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </div>
    </PersistGate>
  </Provider>
);

export default App;
