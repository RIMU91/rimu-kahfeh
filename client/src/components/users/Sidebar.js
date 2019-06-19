import React from 'react'

import styled from 'styled-components'
import { Link } from "react-router-dom";
import { ProductConsumer } from '../../context/context';

const BurgerWrapper = styled.nav`
    position            : fixed;
    top                 : auto/*20px*/;
    left                : 0;
    width               : 100%;
    height              : 100%;
    background          : var(--mainGrey);
    z-index             : 1;
    border-right        : 4px var(--primaryColor) solid;
    transition          : var(--mainTransition);
    transform           : ${props => (props.show ? "translateX(0)" : "translateX(-100%)")};

    ul{
        list-style-type : none;
        padding         : 0 !important;
    }

    .burger-link{
        display         : block;
        font-size       : 1.5rem;
        text-transform  : capitalize; /* membuat huruf depan menjadi kapital */
        color           : var(--mainBlack);
        padding         : 0.5rem 1.5rem;
        background      : transparent;
        transition      : var(--mainTransition);
    }

    .burger-link:hover{
        background      : var(--primaryColor);
        color           : var(--mainWhite);
        padding         : 0.5rem 1.5rem 0.5rem 2.5rem;
        text-decoration : none;
    }

    @media (min-width : 576px) {
        width           : 20rem;
    }
`;

export default function Sidebar() {
    return <ProductConsumer>
        {value => {
            const {links, sidebarOpen, handleSidebar} = value;
                return <BurgerWrapper show={sidebarOpen}>
                    <ul>
                        {links.map(link => {
                            return (
                                <li urutan = {link.id}>
                                    <Link to = {link.path} className="burger-link" onClick={handleSidebar}>
                                        {link.text}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </BurgerWrapper>
        }}
    </ProductConsumer>
}
