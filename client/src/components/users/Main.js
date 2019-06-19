import React from 'react'

import styled from 'styled-components'
import bgHome from '../../images/MainBG.jpg'

const MainWrapper = styled.div`
    text-align      : center;
    display         : flex;
    align-items     : center;
    justify-content : center;
    min-height      : ${props => (props.max ? "100vh" : "68vh")};
    color           : var(--mainWhite);
    background      : linear-gradient(var(--primaryRGBA),var(--primaryRGBA)),
                      url(${props => props.img})
                      center/cover no-repeat;
    border-right    : var(--mainBackground) solid 20px;
    border-left     : var(--mainBackground) solid 20px;

    .title{
        padding-top     : 2rem;
        font-size       : 3.5rem;
        text-shadow     : 8px 4px 3px var(--primaryRGBA);
        text-transform  : capitalize;
        letter-spacing  : var(--mainSpacing);
    }
`;

Main.defaultProps = {
    img             : bgHome
}

export default function Main({img, title, max, children}) {
    return <MainWrapper max={max} img={img}>
                <div className="banner">
                    <h1 className="title">{title}</h1>
                    {children}
                </div>
           </MainWrapper>
}