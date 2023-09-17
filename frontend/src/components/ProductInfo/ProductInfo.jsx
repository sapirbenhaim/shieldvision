import React from 'react';
import './ProductInfo.css';
import { Link } from 'react-router-dom';
import device from '../../img/device.png';
import line from '../../img/line.png';

/**
 * LeftContent component for rendering the left content of ProductInfo.
 * @param {string} title - The title to display.
 * @param {string} text - The text to display.
 */
const LeftContent = ({ title, text }) => {
  return (
    <div>
      <h2 id='productTitle'>{title}</h2>
      <p id='leftText'>{text}</p>
      <div id='btnInfo'>
        <Link to='/detection-device' className='whiteLink'>MORE INFO</Link>
      </div>
    </div>
  );
}

/**
 * RightContent component for rendering the right content of ProductInfo.
 * @param {string} img - The image source.
 */
const RightContent = ({ img }) => {
  return (
    <img id='imgDevice' src={img} alt="Device" />
  );
}

/**
 * ProductInfo component for displaying product information.
 * @param {boolean} isTop - Whether it's the top section.
 * @param {string} img - The image source.
 * @param {string} title - The title to display.
 * @param {string} text - The text to display.
 * @param {boolean} backwards - Whether to display content backwards.
 */
const ProductInfo = ({ isTop, img, title, text, backwards }) => {
  return (
    <div id='productInfo'>
      <div id={isTop ? 'topContainer' : 'infoContainer'}>
        <div id='wrapper'>
          <div id='leftContainer'>
            {backwards ? <LeftContent title={title} text={text} /> : <RightContent img={img} />}
          </div>

          <div id='rightContainer'>
            {backwards ? <RightContent img={img} /> : <LeftContent title={title} text={text} />}
          </div>
        </div>
        <img id='lineImg' src={line} alt="Line" />
      </div>
    </div>
  );
}

export default ProductInfo;
