import React from 'react'

// untuk style CSS
import styled from 'styled-components'

// IMPORT CONTEXT
import { ProductConsumer } from '../../context/context';

// IMPORT LOGO DAN ICON
import logo from '../../images/logo.png'
import { FaBars , FaCartPlus } from 'react-icons/fa';

const HeaderWrapper = styled.header`
    position         : -webkit-sticky;
    position         : sticky;
    top              : 0;
    width            : 100%;
    display          : table;
    /* padding          : 1rem 1.5rem; */
    background       : var(--mainGrey);
    border-bottom    : var(--primaryColor) solid 3px;
    border-top       : var(--mainBackground) solid 20px;
    border-right     : var(--mainBackground) solid 20px;
    border-left      : var(--mainBackground) solid 20px;

    .nav-center{
        display             : flex; /* agar jadi one line*/
        align-items         : center;
        justify-content     : space-between; /* membuat content menjadi rata kiri dan rata kanan dengan berjarak */
        /* height              : 155px;o */
        margin              : 0 auto;
        max-width           : 1650px;
        padding             : 60px 10% 0 10%;
        position            : relative;
        width               : 100%;
        z-index             : 1000;
    }

    .nav-icon{
        font-size           : xx-large;
        cursor              : pointer;
    }

    .nav-cart{
        position            : relative;
    }

    .cart-items{
        background          : var(--primaryColor);
        color               : var(--mainWhite);
        font-size           : medium ;
        position            : absolute;
        top                 : -12px;
        right               : -12px;
        padding             : 0 5px; /* mengatur padding top dan right */
        border-radius       : 100%;
    }

    .logo{
        height              : 9rem;
        width               : 9rem;
    }
`;

export default function Header() {
    return (
    <ProductConsumer>{
        value => {
            const { handleSidebar, cartItems, handleCart } = value
            return <HeaderWrapper>
                <div className="nav-center">
                    {/* untuk tampilan menu sidebar */}
                    <FaBars className="nav-icon" onClick={handleSidebar}/>
                    {/* untuk tampilan logo */}
                    <img className="logo" src={logo} alt="rimu kahfeh"/>
                    <div className="nav-cart">
                        {/* untuk tampilan cart sidebar */}
                        <FaCartPlus className="nav-icon" onClick={handleCart}/>
                        {/* untuk tampilan tambah angka cart */}
                        <div className="cart-items">{cartItems}</div>
                    </div>
                </div>
            </HeaderWrapper>
        }
    }
    </ProductConsumer>)
}
