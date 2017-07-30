import React from 'react';

// import './App.css';

const Video = (props) => {
	return (
		<div className="video">
			<h2>{props.title}</h2>
			<iframe type="text/html" width="640" height="360" src={props.url} frameBorder="0"></iframe>
		</div>
	);
}

export default Video;
