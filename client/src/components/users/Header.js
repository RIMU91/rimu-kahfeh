import React from 'react'
import { Link } from "react-router-dom";

// untuk style CSS
import styled from 'styled-components'
// IMPORT CONTEXT
import { ProductConsumer } from '../../context/context';
// IMPORT LOGO DAN ICON
import logo from '../../images/logo.png'
import { FaBars , FaCartPlus } from 'react-icons/fa';
import { FiShoppingBag } from "react-icons/fi";

const HeaderWrapper = styled.header`
    position         : -webkit-sticky;
    position         : sticky;
    top              : 0;
    width            : 100%;
    display          : table;
    /* padding          : 1rem 1.5rem; */
    background       : var(--mainGrey);
    border-top       : var(--mainBackground) solid 20px;
    border-right     : var(--mainBackground) solid 20px;
    border-left      : var(--mainBackground) solid 20px;
    padding-bottom   : 20px;
    z-index          : 1;


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
        /* margin-left         : 3.5rem;         */
    }

    .nav-cart{
        position            : relative;
    }

    .cart-items{
        background          : var(--primaryColor);
        color               : var(--mainWhite);
        font-size           : medium ;
        position            : absolute;
        top                 : -8px;
        right               : -8px;
        padding             : 0 5px; /* mengatur padding left dan right */
        border-radius       : 100%;
    }

    .logo{
        height              : 9rem;
        width               : 9rem;
    }

    label{
        margin-right        : 3.5rem;
    }
`;

export default function Header() {
    return (
    <ProductConsumer>{
        value => {
            const { handleSidebar, cartItems, handleCart } = value
            return <HeaderWrapper>
                <div className="nav-center">
                    {/* <div className="nav-left">
                        <button>SHOP</button> */}
                        {/* untuk tampilan menu sidebar */}
                        <FaBars className="nav-icon" onClick={handleSidebar}/>
                    {/* </div> */}
                    {/* untuk tampilan logo link ke Home */}
                    <Link to="/">
                        <img className="logo" src={logo} alt="rimu kahfeh"/>
                    </Link>
                    <div className="nav-cart">
                        {/* <label>ACCOUNT</label> */}
                        {/* untuk tampilan cart sidebar */}
                        <FiShoppingBag className="nav-icon" onClick={handleCart}/>
                        {/* untuk tampilan tambah angka cart */}
                        <div className="cart-items">{cartItems}</div>
                    </div>
                </div>
            </HeaderWrapper>
        }
    }
    </ProductConsumer>)
}
