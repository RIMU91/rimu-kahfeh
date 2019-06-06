import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'

// IMPORT HALAMAN
import Header from './components/users/Header'
import Home from './components/users/Home'
import Coffee from './components/users/Coffee'
import Equipment from './components/users/Equipment'
import Cart from './components/users/Cart'
import Profile from './components/users/Profile'
import Login from './components/users/Login'
import Register from './components/users/Register'
import Footer from './components/users/Footer'

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header/>
                    <Route path="/" exact Component={Home}/>
                    <Route path="/Coffee" Component={Coffee}/>
                    <Route path="/Equipment" Component={Equipment}/>
                    <Route path="Cart" Component={Cart}/>                   
                    <Route path="Profile" Component={Profile}/>
                    <Route path="Login" Component={Login}/>
                    <Route path="Register" Component={Register}/>
                    <Footer/>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
