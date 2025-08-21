import React from 'react'
import './Hero.css'
import Kicker from '../Kicker/Kicker'
import HeroImage from '../../assets/images/heroImage.png'
``
const Hero = () => {
    return (
        <div className="hero-container">
            <div className="container hero">

                <div className='hero-left'>
                    <Kicker text="Astro Guwahati"/>

                    <h1>The Best Astrologer <br />in <span className='text-highlight'>Guwahati</span></h1>
                    <p>Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo.</p>
                    <button className='btn-primary' type="button">Get Started</button>
                </div>

                <div className='hero-right'>
                    <img src={HeroImage} alt="Astrologer Sailyajit portrait" />
                </div>


            </div>
        </div>
    )
}

export default Hero