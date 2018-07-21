import React from 'react'
import Link from 'gatsby-link'
import Back from './Back.js'

import logo from '../assets/images/SamNoBg.png';

let logoStyles = {
    maxHeight: '500px'
}

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} style={logoStyles} alt="" /></span>
        <Back/>
        <p>Check back later he might be back then.</p>
    </header>
)

export default Header
