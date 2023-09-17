import React from 'react';
import './Services.css';
import NavBar from '../../components/NavBar/NavBar';
import servicesHeader from '../../img/servicesHeader.png';
import ProductInfo from '../../components/ProductInfo/ProductInfo';
import device from '../../img/device.png';
import brain from '../../img/brain.png';
import dashboard from '../../img/dashboard.png';

// Text descriptions for different services
const mobileText =
  "Introducing our mobile device, built with military-grade materials and designed to withstand extreme conditions. Our device utilizes advanced technology to detect potential weapon threats and quickly notifies users, ensuring safety in critical situations. Trust in our sturdy and reliable device for the best possible protection.";

const threatDetectionApi =
  "We offer an API for threat detection, allowing organizations to seamlessly integrate our cutting-edge technology into their existing security systems. Our advanced algorithms quickly identify potential weapon threats, providing real-time notifications to enhance safety and security. Trust in our commitment to innovation and safety for the best possible protection.";

const surveilanceSoftware =
  "Our surveillance software integrates with existing camera systems to detect threats, track suspects, and provide real-time notifications from anywhere. Trust in our commitment to innovation and safety for the best possible protection for your organization.";

/**
 * The Services component displays information about different services offered.
 * @returns {JSX.Element} The Services page content.
 */
const Services = () => {
  return (
    <div id='services'>
      {/* Render the services header image */}
      <img id='servicesHeaderImg' src={servicesHeader} alt="Services Header" />
      {/* Render the navigation bar */}
      <NavBar />
      {/* Render information about mobile security */}
      <ProductInfo isTop={true} img={device} title={'MOBILE SECURITY'} text={mobileText} backwards={false} />
      {/* Render information about threat detection API */}
      <ProductInfo isTop={false} img={brain} title={'THREAT DETECTION API'} text={threatDetectionApi} backwards={true} />
      {/* Render information about surveillance software */}
      <ProductInfo isTop={false} img={dashboard} title={'SURVEILLANCE SOFTWARE'} text={surveilanceSoftware} backwards={false} />
    </div>
  );
}

export default Services;
