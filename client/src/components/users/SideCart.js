import React from 'react'

// import consumer dari context
import { ProductConsumer } from "../../context/context";

import styled from 'styled-components'

const CartWrapper = styled.div`
    position    : fixed;
    top         : auto;
    right       : 0;
    width       : 100%;
    background  : var(--mainGrey);
    z-index     : 1;
    border-left : var(--primaryColor) solid 4px;
    transition  : var(--mainTransition);
    transform   : ${props => (props.show ? "translateX(0)" : "translateX(100%)")};
    @media (min-width : 576px) {
        width   : 20rem;
    }
`;

export default function SideCart() {
    return <ProductConsumer>
        {value => {
            const{cartOpen, closeCart, cart} = value;
            return <CartWrapper show={cartOpen} onClick={closeCart}>
                <p>cart items</p>
            </CartWrapper>
        }}
    </ProductConsumer>
}
