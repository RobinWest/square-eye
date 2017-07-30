// import React, { Component } from 'react';

import Model from './Model';

class VideoModel extends Model{
	constructor(data){
		super();

		this.id           = '';
		this.title        = '';
		this.author       = '';
		this.created      = 0;
		this.subreddit    = '';
		this.domain       = '';
		this.thumbnail    = '';
		this.permalink    = '';
		this.url          = '';
		this.num_comments = '';
		this.media_embed  = {};

		if(data)
			this.load(data);
	}

	load(data){
		if(!data)
			throw new Error('No data provided to model');

		var keys = Object.keys(data);

		for(var i = 0; i < keys.length; i++){
			var key = keys[i];

			switch(key){
				// Convert YT url into an embedable url
				case 'url':
						var source = data[key];

						// TODO this needs to process a YT url into a YT video ID
						var videoSplit = source.split('v='),
							videoId = videoSplit[1];

						if(videoSplit.length === 1)
							videoSplit = source.split('youtu.be/');

						if(videoSplit.length > 1)
							videoId = videoSplit[1];


						console.log(source.split('v='));
						console.log(source.split('youtu.be/'));
						console.log(videoId);
						console.log('-------');

						this[key] = 'https://www.youtube.com/embed/' + videoId + '?autoplay=0&origin=http://squareeye'

					break;

				default:
					if(this[key] !== undefined)
						this[key] = data[key];
					break;
			}
		}

		return this;
	}
}

export default VideoModel;
