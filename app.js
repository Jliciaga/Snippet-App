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
		var 
	}

	var data ={};
	var $snippets = $('.snippets');

	$('.savaData').on('click', function() {
		let name = $('.codeName').val();
		data[name] = $('.codeSnippet').val();

		localStorage.pushArrayItem('dataArray', data)
	});

	$('.callData').on('click', function() {
		let retrieveLatest = localStorage.popArrayItem('dataArray');
		for (var key in retrieveLatest[key]) {

			$('.name').append(key);
			$('#new-snippet').append(retrieveLatest[key])

		}
	});



})