import React, { Component } from 'react'

// IMPORT LINK DATA
import { linkData } from "./linkData";

// crate context
const ProductContext = React.createContext();

// untuk Consumer
const ProductConsumer = ProductContext.Consumer;

class ProductProvider extends Component{
    state = {
        sidebarOpen : false,
        cartOpen    : false,
        cartItems   : 0,
        links       : linkData
    }

//SIDEBAR HANDLE 
handleSideBar = () => {
    this.setState({ sidebarOpen : !this.state.sidebarOpen })
}

//SIDECART HANDLE
handleCart = () => {
    this.setState(
        { cartOpen : !this.state.cartOpen }
    )
}

// Buka Side Cart
openCart = () => {
    this.setState(
        { cartOpen : true }
    )
}

//  Tutup Side Cart
closeCart = () => {
    this.setState(
        { cartOpen : false }
    )
}

    render(){
        return(
            <ProductContext.Provider 
            value={{
                    ...this.state,
                    handleSideBar : this.handleSideBar,
                    handleCart    : this.handleCart,
                    openCart      : this.openCart,
                    closeCart     : this.closeCart
                }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

export {ProductProvider, ProductConsumer};
