import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import ButtonAppBar from './components/ButtonAppBar';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalogue from './components/Catalogue';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          <ButtonAppBar />
        </header>
        <Route path="/" exact component={Welcome} />
        <Route path="/Catalogue" exact component={Catalogue} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
      </Router>
    </div>
  );
}

export default App;
