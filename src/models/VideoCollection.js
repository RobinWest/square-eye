// import React, { Component } from 'react';

// import urlParser from 'js-video-url-parser';

import Collection from './Collection';
import Model from './VideoModel';

class VideoCollection extends Collection {
	constructor(data){
		super();

		this.collection   = [];

		if(data)
			this.load(data, Model);
	}

	load(data){
		if(!data.length)
			throw new Error('Wrong type provided to collection: ', typeof data);

		console.log(data);

		for(var i = 0; i < data.length; i++){
			var dataItem  = data[i].data,
				model     = new Model(dataItem);

			// Kick out any models that haven't got a provider set
			if(model.provider)
				this.add(model);
		}

		return this;
	};
}

export default VideoCollection;
