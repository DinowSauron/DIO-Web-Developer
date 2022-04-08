import React from 'react';
import {createRoot} from 'react-dom/client';
import Routers from './pages/Routers';
import { createStore } from "redux";
import {reducer} from "./redux/reducers"
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import './styles/global.scss'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION && window.__REDUX_DEVTOOLS_EXTENSION()
)

const container = document.getElementById('root');
const root = createRoot(container);

root.render((
<BrowserRouter> 
  <Provider tab="/Counter" store={store}>
    <Routers/> 
  </Provider>
</BrowserRouter>
));

