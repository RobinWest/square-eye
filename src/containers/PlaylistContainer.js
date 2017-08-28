import React, { Component } from 'react';

import PlaylistItem from '../components/PlaylistItem';
import '../css/Playlist.css';


class PlaylistContainer extends Component {
	constructor(props){
		super(props);

		console.log(props);

		// this.setActiveArrow = this.setActiveArrow.bind(this);

		this.state = {
		};
	}

	render() {
		return (
			<div className="playlist-container">
				<p>playlist container</p>
				{this.props.videoCollection.collection.map(function(videoModel, index){
					return <PlaylistItem key={'playlist-item-' + index} videoModel={videoModel} title={videoModel.title}></PlaylistItem>;
				})}
			</div>
		);
	}
}

export default PlaylistContainer;
