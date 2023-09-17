import React from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';

import './Detections.css';
import Detection from '../../components/Detection/Detection';

/**
 * The Detections component represents the page for displaying the latest detections.
 * @returns {JSX.Element} The Detections page content.
 */
const Detections = () => {
  return (
    <div id='detections'>
      {/* Render the SideMenu component */}
      <SideMenu />
      {/* Page title */}
      <h3 className='pageTitle'>Latest Detections</h3>
      <div className='detectionsGrid'>
        {/* Render multiple Detection components */}
        <Detection />
        <Detection />
        <Detection />
        <Detection />
        <Detection />
        <Detection />
      </div>

      {/* Message indicating that the feature is under development */}
      <div className='underDevelopment'>
        <h1>This feature is still under development</h1>
      </div>
    </div>
  );
}

export default Detections;
