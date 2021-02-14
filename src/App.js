import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <>
          <Switch>
            <Route path="/">
              <h1>THis is a home page</h1>
            </Route>
          </Switch>
        </>
      </Router>
    </div>
  );
}

export default App;
