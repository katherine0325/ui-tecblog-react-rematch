import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import 'antd/dist/antd.css';

import Increase from './components/Increase';
import Decrease from './components/Decrease';
import Home from './pages/Home';

let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      {/* <div className="routerDiv">
        <Route exact path="/" component={Increase} />
        <Route exact path="/increase" component={Increase} />
        <Route path="/decrease" component={Decrease} />

        <span className="routerLink"><Link to="/">加法页面</Link></span>
        <span className="routerLink"><Link to="/decrease">减法页面</Link></span>
      </div> */}
      <Route exact path="/" component={Home} />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
