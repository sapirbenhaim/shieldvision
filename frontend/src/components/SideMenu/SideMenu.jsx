import React, { useEffect, useState } from 'react';
import Line from '../../img/line.png';
import Camera from '../../img/security-camera.png';
import Menu from '../../img/menu.png';
import Help from '../../img/help.png';
import Settings from '../../img/settings.png';
import Logo from '../../img/logo_white.png';
import MenuItem from '../../components/MenuItem/MenuItem';
import SmartVision from '../../img/smartVision.png';
import Detections from '../../img/detections.png';
import Account from '../../img/account.png';
import Admin from '../../img/admin.png';
import { useLocation } from 'react-router-dom';
import { getUserObject } from '../../managers/authManager';
import { logError } from '../../utils/logger';

/**
 * SideMenu component for displaying the side menu.
 */
const SideMenu = () => {
  // Get the current location
  const location = useLocation();
  // State to track the selected tab
  const [selectedTab, setSelectedTab] = useState(location.pathname.substring(1));
  // State to determine if the user is an admin
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Fetch user data and check for admin status
    const fetchUser = async () => {
      try {
        const user = await getUserObject();
        setIsAdmin(user.isAdmin);
      } catch (error) {
        logError(error.message);
      }
    };

    fetchUser();
  }, []);

  return (
    <div id='sideMenu'>
      <h3><img id='logoImg' src={Logo} alt="logo" /></h3>
      <MenuItem title={'Dashboard'} icon={Menu} route={'dashboard'} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <img className='line' src={Line} alt="line" />
      <MenuItem title={'Cameras'} icon={Camera} route={'cameras'} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <MenuItem title={'SmartVision'} icon={SmartVision} route={'smartvision'} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <MenuItem title={'Detections'} icon={Detections} route={'detections'} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <img className='line' src={Line} alt="line" />
      <MenuItem title={'Support'} icon={Help} route={'support'} selectedTab={selectedTab} setSelectedTab={setSelectedTab}/>
      <MenuItem title={'Account'} icon={Account} route={'account'} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <img className='line' src={Line} alt="line" />
      {isAdmin && <MenuItem title={'Admin Panel'} icon={Admin} route={'admin'} selectedTab={selectedTab} setSelectedTab={setSelectedTab} />}
    </div>
  );
}

export default SideMenu;
