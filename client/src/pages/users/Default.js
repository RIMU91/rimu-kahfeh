import React from 'react'
import Main from '../../components/users/Main'
import defaultBG from '../../images/404.png'

export default function Default() {
    return (
        <div>
            <Main img={defaultBG} max="true"/>
        </div>
    )
}