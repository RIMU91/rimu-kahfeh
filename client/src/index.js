import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// IMPORT PAGE
import { ProductProvider } from "./context/context"; //IMPORT PAGE CONTEXT
import App from './App';

// ### ### ###
// ### ### ###
// ### ### ###

ReactDOM.render(
    <ProductProvider>
        <Router> <App/> </Router>  
    </ProductProvider>, document.getElementById('root'));

