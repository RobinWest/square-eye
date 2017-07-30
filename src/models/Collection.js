// import React, { Component } from 'react';

import Model from './Model';

class Collection {
	constructor(data){
		this.collection   = [];

		if(data)
			this.load(data);
	}

	// TODO have to pass the model in, this seems a bit pants
	load(data, NewModel = Model){
		if(!data.length)
			throw new Error('Wrong type provided to collection: ', typeof data);

		// if(data instanceof RotaStaffCollection)
		// 	return this.collection = data.collection;

		for(var i = 0; i < data.length; i++){
			var model = new NewModel(data[i]);

			this.add(model);
		}

		return this;
	};

	add(model){
		// if(data instanceof RotaStaffCollection)
		// 	return this.collection = data.collection;

		this.collection.push(model);		
	};
}

// .service('YourCollection', function(YourModel){
// 	function YourCollection(data){
// 		if(data)
// 			this.collection = data;
// 		else
// 			this.collection = [];
// 	};

// 	YourCollection.prototype = {
// 		load: function(data){
// 			var self = this;

// 			if(data instanceof RotaStaffCollection)
// 				return this.collection = data.collection;

// 			angular.forEach(data, function(item){
// 				var model = new RotaStaffModel(item);

// 				self.collection.push(model);
// 			});
// 		},

// 		get: function(id){
// 			var found;

// 			if(angular.isObject(id))
// 				id = id.id;

// 			if(!id)
// 				return;

// 			angular.forEach(this.collection, function(model){
// 				if(model.id == id)
// 					return found = model;
// 			});

// 			return found;
// 		},
// 		add: function(model){
// 			if(model instanceof YourModel)
// 				this.collection.push(model);

// 			return this;
// 		},
// 		remove: function(id){
// 			var removeIndex;

// 			if(!id)
// 				return;

// 			angular.forEach(this.collection, function(model, index){
// 				if(model.id == id)
// 					return removeIndex = index;
// 			});

// 			this.collection.splice(removeIndex, 1);

// 			return this;
// 		},
// 		get length(){
// 			return this.collection.length;
// 		}
// 	};

// 	return YourCollection;
// })

export default Collection;
