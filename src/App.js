import React from 'react';
import Home from "./components/Home"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Menu from "./components/menu"
import './App.css';

function App() {
  return (
      <div className="App">
        <Router>
              <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/Menu" component={Menu} />
              </Switch>  
        </Router>
    </div>
  );
}

export default App;
