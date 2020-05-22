import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import {ShipsListing} from "./pages/ShipsListing";
import AddEditShip from "./pages/AddEditShip";
import {Home} from "./pages/home"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/add-edit-ship">
          <AddEditShip />
        </Route>
        <Route path="/ships-listing">
          <ShipsListing/>
        </Route>
        <Route path="/">
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;