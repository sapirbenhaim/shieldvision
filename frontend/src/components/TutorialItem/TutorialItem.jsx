import React from 'react';
import './TutorialItem.css';
import ai from '../../img/ai.png'; // Import AI image.
import settings from '../../img/settings.png'; // Import settings image.

/**
 * TutorialItem component for displaying a tutorial item with images and text.
 */
const TutorialItem = () => {
  return (
    <div className='item item1'>
      <div id='leftTutorial'>
        <img id='settingsIcon' src={settings} alt="Settings Icon" /> {/* Settings icon with alt description. */}
        <h2 id='tutorialTitle'>Welcome to ShieldVision</h2>
        <p id='tutorialText'>Begin your journey with ShieldVision HUB and start protecting and securing your environments with the latest in AI security.</p>
      </div>
      <div className='rightTutorial'>
        <img id='aiIcon' src={ai} alt="AI Icon" /> {/* AI icon with alt description. */}
      </div>
    </div>
  );
}

export default TutorialItem;
