import React from 'react';
import './MenuItem.css';
import { Link, useLocation } from 'react-router-dom';

/**
 * MenuItem component for displaying a menu item.
 *
 * @param {Object} props - Component props
 * @param {string} props.title - The title of the menu item.
 * @param {string} props.icon - The icon for the menu item.
 * @param {string} props.route - The route associated with the menu item.
 * @param {function} props.setSelectedTab - Function to set the selected tab.
 * @param {string} props.selectedTab - The currently selected tab.
 */
const MenuItem = ({ title, icon, route, setSelectedTab, selectedTab }) => {
  const location = useLocation();

  return (
    <div id='menuItem'>
      <Link
        onClick={() => setSelectedTab(title)}
        className={location.pathname.substring(1) === title.toLowerCase() ? 'link selected' : 'link'}
        to={'/' + route}
      >
        <img id='icon' src={icon} alt={`${title} Icon`} />
        <p id='linkText'>{title}</p>
      </Link>
    </div>
  );
}

export default MenuItem;
