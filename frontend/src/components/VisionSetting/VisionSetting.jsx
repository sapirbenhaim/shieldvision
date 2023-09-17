import React from 'react';
import './VisionSetting.css';
import ai from '../../img/ai.png';
import settings from '../../img/settings.png';

/**
 * VisionSetting component for displaying a tutorial.
 */
const VisionSetting = () => {
  return (
    <div className='item item1'>
      <div id='leftTutorial'>
        <img id='settingsIcon' src={settings} alt="Settings Icon" />
        <h2 id='tutorialTitle'>Get Started with our Easy to Use Tutorial</h2>
        <p id='tutorialText'>Begin your journey with ShieldVision HUB and gain the knowledge and skills needed to effectively utilize its powerful features and capabilities. Please take a moment to leave us feedback using the tab on the right</p>
      </div>
      <div className='rightTutorial'>
        <img id='aiIcon' src={ai} alt="AI Icon" />
      </div>
    </div>
  );
}

export default VisionSetting;
