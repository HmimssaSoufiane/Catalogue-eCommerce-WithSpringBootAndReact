import React from 'react';
import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Catalogue from './components/Catalogue';
import SignIn from './components/SignIn';
import 'bootstrap/dist/css/bootstrap.min.css';

import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">

      <Router>
        <NavBar />
        <Route path="/" exact component={Welcome} />
        <Route path="/Catalogue" exact component={Catalogue} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/SignUp" component={SignUp} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
