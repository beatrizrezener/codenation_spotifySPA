import React from 'react';
import { BrowserRouter } from "react-router-dom";

import Routes from '../../routes';

import './App.scss';

const App = () => (
  <div className="app" data-testid="app">
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </div>
);

export default App;
