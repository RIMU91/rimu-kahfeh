import React from 'react'

// untuk style CSS
import styled from 'styled-components'

// IMPORT CONTEXT
import { ProductConsumer } from '../../context/context';

// IMPORT LOGO DAN ICON
import logo from '../../images/logo.png'
import { FaBars , FaCartPlus } from 'react-icons/fa';

const HeaderWrapper = styled.header`
    position        : -webkit-sticky;
    position        : sticky;
    top             : 0;
    width           : 100%;
    padding         : 1rem 1.5rem;
    background      : var(--mainGrey);
    border-bottom   : var(--primaryColor) solid 3px;

    .nav-center{
        display             : flex; /* agar jadi one line*/
        align-items         : center;
        justify-content     : space-between; /* membuat content menjadi rata kiri dan rata kanan dengan berjarak */
        max-width           : 1170px;
        margin              : auto 0;
    }

    .nav-icon{
        
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
                    <FaBars className="burger-icon" onClick={handleSidebar}/>
                    {/* untuk tampilan logo */}
                    <img src={logo} alt="rimu kahfeh"/>
                    {/* untuk tampilan cart sidebar */}
                    <FaCartPlus className="cart-icon" onClick={handleCart}/>
                    {/* untuk tampilan tambah angka cart */}
                    <div className="cart-items">{cartItems}</div>
                </div>
            </HeaderWrapper>
        }
    }
    </ProductConsumer>)
}
