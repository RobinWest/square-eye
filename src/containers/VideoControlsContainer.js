import React, { Component } from 'react';

import VideoControls from '../components/VideoControls';
// import './App.css';

class VideoControlsContainer extends Component {
	constructor(props){
		super(props);

		this.selectVideo = this.selectVideo.bind(this);

		this.state = {
		};
	}

	selectVideo(event, offset){
		var videoCollection = this.props.videoCollection.collection,
			selectedIndex = videoCollection.indexOf(this.props.videoModel);

		var newIndex = selectedIndex + offset;

		if(newIndex < 0)
			newIndex = 0;

		var newSelectedVideo = videoCollection[newIndex];

		this.props.setVideo(newSelectedVideo);
	}

	render() {
		return (
			<div className="video-controls-container">
				<p>video controls</p>
				<VideoControls 
					selectVideo={this.selectVideo}
				/>

			</div>
		);
	}
}

export default VideoControlsContainer;
