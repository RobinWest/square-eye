import React, { Component } from 'react';

import Video from '../components/Video';

// import './App.css';

class VideoContainer extends Component {
	// constructor(){
	// 	super();

	// 	// this.setActiveArrow = this.setActiveArrow.bind(this);

	// 	// this.state = {
	// 	// 	url: 'https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=0&origin=http://example.com'
	// 	// };
	// }

	render() {
		return (
			<div className="video-container">
				<Video title={this.props.videoModel.title} url={this.props.videoModel.url} />
			</div>
		);
	}
}

export default VideoContainer;
