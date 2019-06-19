import React from 'react'
import Info from '../../components/users/AboutPage/Info';
import Main from "../../components/users/Main";
import bg_about from "../../images/bg_about.jpg";
import styled from 'styled-components';



export default function About() {
    return (
        <div>
            <Main img={bg_about}/>
            <Info/>
        </div>
    )
}

