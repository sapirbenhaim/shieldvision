import React from 'react'
import Example from '../../img/detection_example.jpeg'

/**
 * Represents a component for displaying detection examples.
 */
const Detection = () => {
  return (
    <img className='detectionImage' src={Example} alt="Detection Example" />
  )
}

export default Detection
