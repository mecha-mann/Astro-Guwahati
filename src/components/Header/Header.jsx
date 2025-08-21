import React from 'react'
import './Header.css'
import Logo from '../../assets/Logo.svg'


const Header = () => {
    return (
        <>
            <div className="container header">

                <div className="nav-bar">
                    <div className="brand"><img src={Logo} alt="" /></div>

                    <ul className="nav-wrapper">
                        <li className="nav-link">Home</li>
                        <li className="nav-link">About</li>
                        <li className="nav-link">Rides</li>
                        <li className="nav-link">Offers</li>
                        <li className="nav-link">Restaurant</li>
                        <li className="nav-link">Events</li>
                    </ul>

                    <div className='btn-wrapper'>
                        <button className='button' type="button">Get Started</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Header