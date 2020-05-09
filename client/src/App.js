import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, useLocation, Switch } from "react-router-dom";

import './App.css';
import { AdminLayout,DefaultLayout } from './layout';
import AddTodo from "./pages/todos";
// import Home from "./pages/home";
// import Admin from "./pages/admin";

import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import todos from './reducers'
// import App from './components/App'
import store from "../src/store"

function NoMatch() {
  let location = useLocation();

  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={DefaultLayout}>
          {/* <Route path="*">
            <NoMatch />
          </Route> */}
          </Route>
          
        </Router>
      </Provider>
    );
  }
}

export default App;