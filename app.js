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
			arrayItem = existingArray[existingArray.length - 1];
		}
		return arrayItem;
	}

	var data ={};
	var $snippets = $('.snippet-code');


	function save() {
	var name = $('#name').val();
	var code = $('#code').val();

	if (name === '') {
		alert("Name is undefined!!")
	}	
	else {

	data[name] = code;
		localStorage.pushArrayItem('data', data);
	}
	}

	$('#save').on('click', function() {
	  save();
	  window.location.reload(true);
	});

	$('#delete').on('click', function() {
	window.prompt('snippet name', 'snippet to delete')
	});

	$('#latest').on('click',function() {

		// window.setTimeout(function() {
		// 	var retrieveLast = localStorage.getLastItem('data');
		// 	var key = Object.keys(retrieveLast)[0];
		// 	var value = Object.values(retrieveLast)[0]; 

		// 	$('<pre>')
		// 	.html(prettyPrintOne(key, value))
		// 	.addClass('prettyprint lang-js prettyprinted')
		// 	.appendTo('.snippet-code')
		// }, 200)
		var retrieveLast = localStorage.getLastItem('data');
		var key = Object.keys(retrieveLast)[0];
		var value = Object.values(retrieveLast)[0];
		console.log(key)

		$('.snippet-name').append(key);
		$('.prettyprint').append(value);

		// $late = $('<div id="snippets"></div>');
		// $late.html('<pre class="prettyprint">'+ value + '</pre>');
		// $late.prependTo($snippets);

	});

	


});


function search() {
var input, filter, ul, li, a, i
input = getElementById('myInput')
filter = input.value.toUpperCase();
ul = document.getElementById('wrapper')
li=ul.getElementByTagName('li')

for (i = 0; i < li.length; i++) {
	if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
		li[i].style.display = "";
	}
	else {
		li[i].style.display = "none";
	}
}
}