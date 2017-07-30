import React from 'react';

// import './App.css';

const VideoControls = (props) => {
	return (
		<div className="video-controls">
			<button onClick={(e) => props.selectVideo(e, -1)}>Previous</button>
			<button onClick={(e) => props.selectVideo(e, 1)}>Next</button>
		</div>
	);
}

export default VideoControls;
