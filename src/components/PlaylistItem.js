import React from 'react';

// import './App.css';

const PlaylistItem = (props) => {
	return (
		<div className="playlist-item">
			<h4>{props.title}</h4>
			<span>{props.videoModel.author}</span>
			<img src={props.videoModel.thumbnail} alt={props.videoModel.title} />
		</div>
	);
}

export default PlaylistItem;
