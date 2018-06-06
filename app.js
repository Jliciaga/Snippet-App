$(document).ready(function() {
	Storage.prototype.getArray = function(arrayName) {
		var thisArray = [];
		var fetchArrayObject = this.getItem(arrayName);
		  if (typeof fetchArrayObject !== 'undefined') {
		  	if (fetchArrayObject !== null) {
		  		thisArray = JSON.parse(fetchArrayObject)
		  	}
		  }
	return thisArray;
	}

	Storage.prototype.pushArrayItem = function(arrayName, arrayItem) {
		var existingArray = this.getArray(arrayName);
		existingArray.push(arrayItem);
		this.setItem(arrayName, JSON.stringify(existingArray));
	}

	Storage.prototype.popArrayItem = function() {
		var arrayItem = {};
		var existingArray = this.getArray(arrayName);
		if(existingArray.length > 0) {
			arrayItem = existingArray.pop();
			this.setItem(arrayName, JSON.stringify(existingArray))
		}
		return arrayItem;
	}

	Storage.prototype.shiftArrayItem = function(arrayName) {
		var arrayItem = {};
		var existingArray = this.getArray(arrayName);
		if(existingArray.length > 0) {
			arrayItem = existingArray.pop();
			this.setItem(arrayName, JSON.stringify(existingArray))
		}
		return arrayItem;
	}

	Storage.prototype.unshiftArrayItem = function(arrayName) {
		var arrayItem = {};
		var existingArray = this.getArray(arrayName);
		existingArray.unshift(arrayItem);
		this.setItem(arrayName, JSON.stringify(existingArray))
	}

	Storage.prototype.getLastItem = function(arrayName) {
		var arrayItem = {};
		var existingArray = this.getArray(arrayName);
		if (existingArray.length > 0) {
			arrayItem = exisitngArray[existingArray.length - 1];
			this.setItem(arrayName, JSON.stringify(existingArray));
		}
		return arrayItem;
	}

	var data ={};
	var $snippets = $('.snippets');

	function save() {
	var name = $('#name').val();
	var code = $('#code').val();	
	data[name] = code;
		localStorage.pushArrayItem('data', data);
	}

	$('#save').on('click', function() {
	  save();
	});

	$('#delete').on('click', function() {
		let retrieveLatest = localStorage.popArrayItem('dataArray');
		for (var key in retrieveLatest[key]) {

		}
	});

	


})