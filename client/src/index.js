import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// IMPORT PAGE
import { ProductProvider as Provider } from "./context/context"; //IMPORT PAGE CONTEXT
import App from './App';

// ### ### ###
// ### ### ###
// ### ### ###

ReactDOM.render(
    <Provider>
        <Router> <App/> </Router>  
    </Provider>, document.getElementById('root'));

