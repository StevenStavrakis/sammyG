import React from 'react'
import Tilt from 'react-tilt'
import logoChrome from '../assets/images/Sammy.webp'
import logoOther from '../assets/images/samLowerRes.png'

let logoStyles = {
    maxHeight: '500px'
}

const browserDetect = () => {

// Chrome 1+
var isChrome = false //!!window.chrome && !!window.chrome.webstore;

if (isChrome != true) {
    return <span className="logo"><img src={logoOther} style={logoStyles} alt="" /></span> 
} else {
    return <span className="logo"><img src={logoChrome} style={logoStyles} alt="" /></span> 
}


}

const Logo = (props) => {
    return (
    <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 500, width: 600, margin: 'auto' }} > 
            <div className="Tilt-inner"> 
                {browserDetect()}
            </div>
    </Tilt>
    )
}

export default Logo