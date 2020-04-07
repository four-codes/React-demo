import React from 'react';
// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import { Container } from 'react-bootstrap';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Details from './components/Details/Details';
import Edit from './components/Edit/Edit';
import Transaction from './components/Transaction/Transaction';


const App = () => {
  return (
    <Router>
            
    <div className="App">
    <Container>
    <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/Login" component={Login} />
        <Route  path="/Register" component={Register} />
        <Route  path="/Details" component={Details} />
        <Route  path="/Transaction" component={Transaction} />
        <Route path="/Edit/:id" render={props => (
          <Edit {...props} />
        )}/>
          <Route component={Home} />
        </Switch>
    </Container>
    </div>
    </Router>
  );
}

export default App;


// Norma Function ES5

// function () {
//   return ();
// };