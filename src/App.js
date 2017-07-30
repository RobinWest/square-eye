import React, { Component } from 'react';

import VideoCollection from './models/VideoCollection';
import VideoModel from './models/VideoModel';

import PlaylistContainer from './containers/PlaylistContainer';
import VideoContainer from './containers/VideoContainer';
import VideoControlsContainer from './containers/VideoControlsContainer';

import './App.css';

class App extends Component {
	constructor(){
		super();

		this.setVideo = this.setVideo.bind(this);

		this.state = {
			video: new VideoModel(),
			playlist: new VideoCollection()
		};

	}

	componentDidMount(){
		return fetch('https://api.reddit.com/r/videos')
			.then((response) => { return response.json() })
			.then((response) => {
				console.log(response);

				var videoCollection = new VideoCollection(response.data.children),
					firstVideo      = videoCollection.collection[0];

				this.setState({
					video: firstVideo,
					playlist: videoCollection
				});

				console.log(this.state.playlist);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	setVideo(videoModel){
		// TODO validate

		this.setState({
			video: videoModel
		});
	};


	render() {
		return (
			<div className="App">
				<h1>square eye - {this.state.video.id}</h1>

				<PlaylistContainer videoCollection={this.state.playlist} />

				<VideoContainer videoModel={this.state.video} />
				<VideoControlsContainer videoModel={this.state.video} videoCollection={this.state.playlist} setVideo={this.setVideo} />
			</div>
		);
	}
}

export default App;
