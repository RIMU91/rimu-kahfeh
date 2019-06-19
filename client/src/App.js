import React from 'react';
import { Switch, Route } from "react-router-dom";
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

// IMPORT PAGES
import Home from "./pages/users/Home";
import About from "./pages/users/About";
import Contact from "./pages/users/Contact";
import Products from "./pages/users/Products";
import SingleProduct from "./pages/users/SingleProduct";
import Cart from "./pages/users/Cart";
import Default from "./pages/users/Default"

// IMPORT COMMPONENTS
import Header from "./components/users/Header"
import Sidebar from "./components/users/Sidebar"
import SideCart from "./components/users/SideCart"
import Footer from "./components/users/Footer"

function App() {
  return (
    <div>
        <Header/>
        <Sidebar/>
        <SideCart/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/products' component={Products}/>
          <Route path='/products:id' component={SingleProduct }/>
          <Route path='/cart' component={Cart}/>
          <Route component = {Default}/>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
