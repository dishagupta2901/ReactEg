// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Header from './components/Header';
import ProductContainer from './components/ProductContainer';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <Header />
      <ProductContainer />
    </Provider>
  );
};

export default App;
