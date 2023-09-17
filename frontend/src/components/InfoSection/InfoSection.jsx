import React from 'react';
import './InfoSection.css';
import verified from '../../img/verified.png';
import vision from '../../img/vision.png';
import nanotec from '../../img/nanotec.png';
import InfoItem from '../InfoItem/InfoItem';

/**
 * InfoSection component to display information items.
 */
const InfoSection = () => {
  // Info item details
  const itemOneTitle = 'SMART SECURITY';
  const itemOneText =
    "Our compact smart device quickly notifies soldiers and security forces of potential threats, ensuring swift response and action. Stay safe with our advanced technology.";

  const itemTwoTitle = 'COMPUTER VISION';
  const itemTwoText =
    "Our device utilizes cutting-edge computer vision technology to detect potential threats and provide accurate notifications. This allows for quick responses to critical situations.";

  const itemThreeTitle = 'MILITARY GRADE';
  const itemThreeText =
    "Built with military-grade materials, our smart device ensures reliability and durability in the toughest environments. Trust in our quality for mission-critical operations.";

  return (
    <div>
      {/* Section Title */}
      <h2 id='infoSectionTitle'>
        MADE BY SOLDIERS FOR THE PEOPLE
      </h2>

      {/* Info Items */}
      <div id='infoContainer'>
        <InfoItem img={verified} title={itemOneTitle} text={itemOneText} />
        <InfoItem img={vision} title={itemTwoTitle} text={itemTwoText} />
        <InfoItem img={nanotec} title={itemThreeTitle} text={itemThreeText} />
      </div>
    </div>
  );
}

export default InfoSection;
