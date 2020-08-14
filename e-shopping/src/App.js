import React from 'react';
import Navbar from "./components/Navbar"
import {Route,Switch} from "react-router-dom"
import Home from "./pages/home";
import ShoppingCart from "./pages/Shopping"
import Login from "./pages/Login"
import Register from "./pages/Register"
import './App.css';
import {Provider} from 'react-redux';
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar/>
        <br/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/ShoppingCart" component={ShoppingCart}/>
          <Route exact path="/Login" component={Login}/>
          <Route exact path="/Register" component={Register}/>
          
        </Switch>
        
      </div>
    </Provider>
  );
}

export default App;
