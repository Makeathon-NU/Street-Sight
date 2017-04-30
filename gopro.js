

var imageListLocationURL = 'http://10.5.5.9:8080/videos/DCIM/100GOPRO/?dd';
var takePictureURL = 'http://10.5.5.9/gp/gpControl/command/shutter?p=1';

var stopVideoURL = 'http://10.5.5.9/gp/gpControl/command/shutter?p=0';
var primaryModePictureURL = 'http://10.5.5.9/gp/gpControl/command/mode?p=1';

var deleteLastPictureURL = 'http://10.5.5.9/gp/gpControl/command/storage/delete/last';

var imgPicture = document.getElementById('imgPictureId');

var timer = null;

var image = null;

window.onload = function () {

	InitialSettings();
	//setInterval(ReplaceImage, 3000);
	setTimeout(TakePicture, 3000);
};

function InitialSettings()
{
	console.log('InitialSettings()');
	StopVideo();
	ChangeModeToPicture();
};

function StopVideo()
{
	console.log('StopVideo()');
	var http = new XMLHttpRequest();
	http.open('GET', stopVideoURL, true);

	http.onload = function () {
	};
	http.onerror = function () {
	};
	http.send();
};

function ChangeModeToPicture()
{
	console.log('ChangeModeToPicture()');
	var http = new XMLHttpRequest();
	http.open('GET', primaryModePictureURL, true);

	http.onload = function () {
	};
	http.onerror = function () {
	};
	http.send();
};






function ReplaceImage() {
	console.log('ReplaceImage()');
	

	var http = new XMLHttpRequest();
	http.open('GET', imageListLocationURL, true);


	http.onload = function () {
	  	ProcessNewestFile(http.response);
	  	if(!timer)
	  		timer = setTimeout(DeleteLastPicture, 10000);
	};

	http.onerror = function () {
		DeleteLastPicture();
	};

	http.send();
};


function ProcessNewestFile(text)
{
	console.log('ProcessNewestFile()');
	var searchString = '<tr><td><a href="/videos/DCIM/100GOPRO/';
	var from = text.indexOf(searchString);
	//search for the second occurence
	from = text.indexOf(searchString, from + 1);

	var to = text.indexOf(">", from + searchString.length);
	
	var string = text.substring(from + '<tr><td>'.length, to);

	string = string.substring('<a href="'.length);
	string = string.substring(0, string.length - 1);

	var fileName = 'http://10.5.5.9:8080' + string;

	imgPicture.src = fileName;

	//image = new Image();
	//detect when file is loaded
	//img.onload = function() {

//		clearTimeout(timer);
//		DeleteLastPicture();
//	};
//	img.src = imgPicture.src;
};

function DeleteLastPicture()
{
	console.log('DeleteLastPicture()');

	if(timer)
	{
		clearTimeout(timer);
		timer = null;
	}

	var http = new XMLHttpRequest();
	http.open('GET', deleteLastPictureURL, true);

	http.onload = function () {
		TakePicture();
	};
	http.onerror = function () {
		TakePicture();
	};
	http.send();
};

function TakePicture()
{
	console.log('TakePicture()');
	var http = new XMLHttpRequest();
	http.open('GET', takePictureURL, true);

	http.onload = function () {
		setTimeout(ReplaceImage, 3000);
	};
	http.onerror = function () {
		setTimeout(ReplaceImage, 3000);
	};
	http.send();
};


imgPicture.onload = function () {
	console.log('success loading image.');
	clearTimeout(timer);
	timer = null;
	DeleteLastPicture();
	
};

imgPicture.onerror = function () {
	console.log('failed loading image.');
	ReplaceImage();
};