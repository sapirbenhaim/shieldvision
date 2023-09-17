import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import DetectionVideo from '../../videos/test.mp4';
import CloseIcon from '../../img/close.png';
import './StaticVideo.css';

/**
 * StaticVideo component for displaying a static video.
 *
 * @param {boolean} videoIsVisible - Indicates whether the video is visible.
 * @param {function} setVideoIsVisible - Callback function to set the video's visibility state.
 */
const StaticVideo = ({ videoIsVisible, setVideoIsVisible }) => {
  return (
    <div className={videoIsVisible ? "staticVidContainer" : "none"}>
      <div>
        {/* Close button to hide the video */}
        <img onClick={() => setVideoIsVisible(false)} id="btnClose" src={CloseIcon} alt="Close" />
        {/* VideoPlayer component to play the video */}
        <VideoPlayer video={DetectionVideo} />
      </div>
    </div>
  );
}

export default StaticVideo;
