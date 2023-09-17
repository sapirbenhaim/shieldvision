import React from 'react';
import './Home.css';
import testVideo from '../../videos/test.mp4';
import line from '../../img/line.png';
import { Link } from 'react-router-dom';
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer';
import NavBar from '../../components/NavBar/NavBar';

/**
 * The Home component represents the landing page of the application.
 * @returns {JSX.Element} The Home page content.
 */
const Home = () => {
  return (
    <div id='homePage'>
      {/* Render the navigation bar */}
      <NavBar />
      <div id='header'>
        <div id='leftContainer'>
          <div className='headerText'>
            <h1>VisionEye</h1>
            <p id='infoText'>
              Get ready to experience advanced AI security.<br />
              Our technology easily recognizes dangerous<br />
              situations and can contact the emergency<br />
              services when needed.
            </p>
            {/* Render a line image */}
            <img id='lineImg' src={line} alt="Line" />
            <div className='bthDemo'>
              {/* Link to the sign-in page */}
              <Link to='/signin' className='LinkButton'>DEMONSTRATION</Link>
            </div>
          </div>
        </div>
        <div id='rightContainer'>
          {/* Render a video player component */}
          <VideoPlayer video={testVideo} />
        </div>
      </div>
    </div>
  );
}

export default Home;
