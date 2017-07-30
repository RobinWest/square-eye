// import React, { Component } from 'react';

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

		// if(data instanceof RotaStaffCollection)
		// 	return this.collection = data.collection;

		for(var i = 0; i < data.length; i++){
			var model = new Model(data[i].data);

			this.add(model);
		}

		return this;
	};
}

export default VideoCollection;
