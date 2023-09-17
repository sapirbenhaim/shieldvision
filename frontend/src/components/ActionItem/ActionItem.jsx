import React from 'react';
import './ActionItem.css';
import { Link } from 'react-router-dom';

/**
 * Represents an action item component.
 * @param {Object} props - The component props.
 * @param {string} props.icon - The icon image source.
 * @param {string} props.title - The title of the action item.
 * @param {string} props.text - The text description of the action item.
 * @param {string} props.link - The link to navigate to.
 * @param {string} props.linkText - The text for the link.
 */
const ActionItem = ({ icon, title, text, link, linkText }) => {
  return (
    <div className='item actionItem'>
      {/* Action item icon */}
      <img className='actionIcon' src={icon} alt="" />
      {/* Action item title */}
      <h3 className='actionTitle'>{title}</h3>
      {/* Action item text */}
      <p className='actionText'>{text}</p>
      {/* Action item link */}
      <Link className='actionLink' to={`/${link}`}>
        {/* Action item link text */}
        <p className='actionLinkText'>{linkText}</p>
      </Link>
    </div>
  );
}

export default ActionItem;
