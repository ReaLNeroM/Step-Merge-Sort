var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;	
canvas.width = window.innerWidth;

var len = canvas.width;
var board_size = canvas.height;

var l = [];

var step;
var main_timer;
