import React from 'react';
import './InfoItem.css';

/**
 * InfoItem component to display information with an image.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.img - Image source URL.
 * @param {string} props.title - Title text.
 * @param {string} props.text - Information text.
 */
const InfoItem = ({ img, title, text }) => {
  return (
    <div className='infoItem'>
      {/* Image */}
      <img id='infoImg' src={img} alt={title} />

      {/* Title */}
      <h3 id='infoItemTitle'>
        {title}
      </h3>

      {/* Information Text */}
      <p id='infoItemText'>
        {text}
      </p>
    </div>
  );
}

export default InfoItem;
