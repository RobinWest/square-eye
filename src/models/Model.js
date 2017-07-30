// import React, { Component } from 'react';

class Model {
	constructor(data){
		this.id   = 0;

		if(data)
			this.load(data);
	}

	load(data){
		if(!data)
			throw new Error('No data provided to model');

		var keys = Object.keys(data);

		for(var i = 0; i < keys.length; i++){
			var key = keys[i];

			if(this[key] !== undefined)
				this[key] = data[key];
		}

		return this;
	}
}

export default Model;
