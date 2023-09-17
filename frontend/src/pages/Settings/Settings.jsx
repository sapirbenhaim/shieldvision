import React from 'react';
import './Settings.css';
import SideMenu from '../../components/SideMenu/SideMenu';

/**
 * The Settings component provides a page for configuring user settings.
 * @returns {JSX.Element} The Settings page content.
 */
const Settings = () => {
  return (
    <div id='settings'>
      {/* Render the side menu */}
      <SideMenu />
    </div>
  );
}

export default Settings;
