import React, { Component } from 'react'

// IMPORT MAIN
import Main from '../../components/users/Main'
//  IMPORT LINK
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <div>
                <Main title="Featured Products" max="true">
                    <Link to="/products" className="main-link"
                    style={{ margin : "2rem" }}>
                        Our Products 
                    </Link>
                </Main>
            </div>
        )
    }
}
