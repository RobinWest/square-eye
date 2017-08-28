// import React, { Component } from 'react';

import urlParser from 'js-video-url-parser';
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
		this.provider     = false;
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
					var sourceUrl = data['url'],
						parsedUrl = urlParser.parse(sourceUrl);

					if(parsedUrl && parsedUrl.provider === 'youtube'){
						console.log('+++++++++++++++++++++', parsedUrl);
						this['provider'] = parsedUrl.provider;
						this[key]        = 'https://www.youtube.com/embed/' + parsedUrl.id + '?autoplay=0&origin=http://squareeye'
					}

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
