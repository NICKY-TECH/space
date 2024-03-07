import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import selectCrew from './feature/selectCrew.js';
import selectTech from './feature/selectTechnology.js';
import overLay from './feature/overLay.js';
import mainNavActive from './feature/mainNavActive.js';
import subNav from './feature/subNav.js';

const store = configureStore({
  reducer: {
selectCrew,
selectTech,
overLay,
mainNavActive,
subNav
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
