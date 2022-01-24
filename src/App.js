import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './redux/reducer';
import 'antd/dist/antd.css';

import Increase from './components/Increase';
import Decrease from './components/Decrease';
import Home from './pages/Home';

let store = createStore(reducer);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    </Provider>
  );
}

export default App;
