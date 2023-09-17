import React from 'react';
import './About.css';
import AboutHeader from '../../components/AboutHeader/AboutHeader';
import InfoSection from '../../components/InfoSection/InfoSection';
import AboutRegister from '../../components/authentication/AboutRegister/AboutRegister';
import NavBar from '../../components/NavBar/NavBar';

/**
 * The About component renders the About page, which includes various sections and navigation.
 * @returns {JSX.Element} The About page content.
 */
const About = () => {
  return (
    <div>
      {/* Render the navigation bar */}
      <NavBar />

      {/* Render the AboutHeader component */}
      <AboutHeader />

      {/* Render the InfoSection component */}
      <InfoSection />

      {/* Render the AboutRegister component */}
      <AboutRegister />
    </div>
  );
}

export default About;
