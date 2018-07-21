import React from 'react'
import Link from 'gatsby-link'
import Back from './Back.js'
import Tilt from 'react-tilt'
import logo from '../assets/images/Sammy.webp'
import Logo from './Logo.js'



const Header = (props) => (
    <header id="header" className="alt" style={{maxHeight: '1vh'}}>
        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 500, width: 600, margin: 'auto' }} > 
            <Logo/>
        </Tilt>
        <Back/>
    </header>
)

export default Header
