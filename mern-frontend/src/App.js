import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';


import { Provider } from 'react-redux';
import store from './store'

import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Register from './components/Register';
import Login from  './components/Login';

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
                </div>
            </div>
        </Router>
        </Provider>
    )
  }
}

export default App;
