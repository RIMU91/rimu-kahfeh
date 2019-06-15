import React, { Component } from 'react'

// IMPORT CONTEXT
import { ProductConsumer } from "../../context/context";

export default class Home extends Component {
    render() {
        return (
            <div>
                Hello Home Page
                <ProductConsumer>{
                    value => {
                        console.log(value)
                        return <h1>Hello Homepage</h1>
                    }}
                </ProductConsumer>
            </div>
        )
    }
}
