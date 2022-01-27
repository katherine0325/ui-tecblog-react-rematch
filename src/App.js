import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import DefaultLayout from './layout/Default';
import 'antd/dist/antd.css';

import Home from './pages/Home';
import Article from './pages/Article';

let store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        {/* <Route exact path="/" component={Home} />
        <Route path="/article" component={Article} /> */}
        <DefaultLayout exact path="/" component={Home} />
        <DefaultLayout path="/article" component={Article} />
      </Router>
    </Provider>
  );
}

export default App;
