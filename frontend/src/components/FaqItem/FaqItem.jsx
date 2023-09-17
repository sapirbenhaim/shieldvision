import React from 'react'
import './FaqItem.css'
import ai from '../../img/ai.png'
import settings from '../../img/settings.png'

/**
 * Represents an FAQ item in the Frequently Asked Questions (FAQ) section.
 *
 * @param {string} question - The question being answered.
 * @param {string} answer - The answer to the question.
 */
const FaqItem = ({ question, answer }) => {
  return (
    <div className='item item1'>
      <div id='leftTutorial'>
        <img id='settingsIcon' src={settings} alt="Settings Icon" />
        <h2 id='tutorialTitle'>{question}</h2>
        <p id='tutorialText'>{answer}</p>
      </div>
      <div className='rightTutorial'>
        <img id='aiIcon' src={ai} alt="AI Icon" />
      </div>
    </div>
  )
}

export default FaqItem
