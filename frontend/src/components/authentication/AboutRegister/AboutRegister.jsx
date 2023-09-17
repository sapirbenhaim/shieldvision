import React from 'react'
import { Link } from 'react-router-dom'
import './AboutRegister.css'
import chip from '../../../img/chip.png'

/**
 * Represents a component for creating a user account.
 */
const AboutRegister = () => {
  return (
    <div id='aboutRegisterMain'>
        <h2 id='aboutRegisterTitle'>CREATE ACCOUNT</h2>
        <div id='aboutRegister'>
            <div id='leftContainer1'>
                {/* Text explaining the purpose of the company */}
                <p id='leftText'>
                    ShieldVision is a cutting-edge AI company that creates state-of-the-art devices to provide added protection for military personnel during critical operations. Our revolutionary product utilizes advanced object detection technology and algorithms to detect and identify potential threats, keeping our soldiers safe. Trust in our commitment to innovation and safety for the best possible protection.
                </p>
                <div id='btnDemo'>
                    {/* Link to the registration page */}
                    <Link to='/register' className='whiteLink'>CREATE ACCOUNT</Link>
                </div>
            </div>
            <div id='rightContainer1'>
                {/* Image of the AI chip */}
                <img id='imgChip' src={chip} alt="" srcset="" />
            </div>
        </div>
    </div>
  )
}

export default AboutRegister
