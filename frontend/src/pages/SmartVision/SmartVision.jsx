import React, { useEffect, useState } from 'react';
import SideMenu from '../../components/SideMenu/SideMenu';
import './SmartVision.css';
import SubscriptionPicker from '../../components/SubscriptionPicker/SubscriptionPicker';
import MobileMenu from '../../components/MobileMenu/MobileMenu';
import HamburgerMenu from '../../img/menu-hamburger.png';
import { getSubscriptionPackages } from '../../managers/subscriptionManager';
import { logError } from '../../utils/logger';

/**
 * The SmartVision component provides a page for managing subscription plans.
 * It fetches and displays available subscription plans.
 * @returns {JSX.Element} The SmartVision page content.
 */
const SmartVision = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  // State to store subscription plans
  const [subscriptionPlans, setSubscriptionPlans] = useState(null);

  useEffect(() => {
    const getSubscriptions = async () => {
      try {
        // Fetch subscription plans from the server
        const plans = await getSubscriptionPackages();
        
        // Set the fetched plans in the state
        setSubscriptionPlans(plans);
      } catch (error) {
        logError('Error fetching subscription plans:', error);
      }
    };

    // Fetch subscription plans when the component mounts
    getSubscriptions();
  }, []);

  return (
    <div id='smartVision'>
      {/* Render the side menu */}
      <SideMenu />
      {/* Render the mobile menu if active */}
      {mobileMenu && <MobileMenu setMobileMenu={setMobileMenu} />}
      {/* Render the hamburger menu button */}
      <img onClick={() => setMobileMenu(!mobileMenu)} className='menuButton' src={HamburgerMenu} alt="menu button" />
      {/* Render the SubscriptionPicker component with subscription plan data */}
      <SubscriptionPicker subscriptionPlansData={subscriptionPlans} />
    </div>
  );
}

export default SmartVision;
