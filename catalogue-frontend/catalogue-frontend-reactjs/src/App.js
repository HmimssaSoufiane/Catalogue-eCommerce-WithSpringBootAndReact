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
import Home from './components/Home';
import ArticleDetails from './components/ArticleDetails';
import Pannier from './components/Pannier';
import Commandes from './components/Commandes';





function App() {
  return (
    <div className="App">

      <Router>

        <NavBar />
        <Route path="/" exact component={Welcome} />
        <Route path="/Catalogue" exact component={Catalogue} />
        <Route path="/SignUp" component={SignUp} />
        <Route path="/SignIn" component={SignIn} />
        <Route path="/Home" component={Home} />
        <Route path="/Pannier" component={Pannier} />
        <Route path="/Commandes" component={Commandes} />
        <Route path="/ArticleDetails/:name" component={ArticleDetails} />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
