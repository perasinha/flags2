var canvas = document.getElementById("mycanvas");
var context= canvas.getContext("2d");
context.beginPath();
context.fillStyle= 'red';
context.arc(400, 300, 90, 0, 2 * Math.PI);
context.fill();

var canvas2 = document.getElementById("mysecondcanvas");
var context2= canvas2.getContext("2d");
context2.beginPath();
context2.fillStyle= "green";
context2.fillRect(0, 0, 267, 600);
context2.fillStyle= "red";
context2.fillRect(534,0,267,600);
context2.fill();

var canvas3 = document.getElementById("mythirdcanvas");
var context3= canvas3.getContext("2d");
context3.beginPath();
context3.fillStyle= "blue";
context3.fillRect(0, 0, 267, 600);
context3.fillStyle= "red";
context3.fillRect(534,0,267,600);
context3.fill();
