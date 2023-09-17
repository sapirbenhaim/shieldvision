import React from 'react';
import './VideoPlayer.css';

/**
 * VideoPlayer component for displaying videos.
 * @param {string} video - The URL of the video to be displayed.
 */
const VideoPlayer = ({ video }) => {
  return (
    <div className='videoContainer'>
      {/* Video player with controls */}
      <video controls>
        {/* Video source with src and type */}
        <source src={video} type='video/mp4' />
      </video>
    </div>
  );
}

export default VideoPlayer;
