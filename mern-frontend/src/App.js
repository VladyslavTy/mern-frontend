import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import {setCurrentUser} from "./actions/authActions";
import setAuthToken from "./utils/setAuthToken";

import './App.css';

import Navbar from './components/Navbar';
import Main from './components/Main';
import Register from './components/Register';
import Profile from './components/Profile';
import Login from  './components/Login';

if(localStorage.jwtToken){
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));
}

class App extends Component {
  render() {
    return (
        <Provider store={store}>
        <Router>
            <div className="App">
                <Navbar/>
                <Route exact path="/" component={Main} />
                <div className="container">
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/profile" component={Profile} />
                </div>
            </div>
        </Router>
        </Provider>
    )
  }
}

export default App;
