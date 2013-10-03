// 'use strict';

// angular.module('newTicApp')
//   .controller('MainCtrl', function ($scope) {
//     $scope.awesomeThings = [
//       'HTML5 Boilerplate',
//       'AngularJS',
//       'Karma'
//     ];
//   });

var turn = 1;
var urlr = "index.html"
var w = window.innerWidth;
window.onkeydown = keydown;

// function responsive(event) {
// 	if(w < 580) {
// 	var body = document.getElementsByTagName('body');
// 	body.style.backgroundSize = "200px 500px";
// 	}
// }
// document.getElementById('body').style.backgroundSize = "20px 20px";

function keydown(event) {
  if(event.keyCode == 78)
  document.location.href = urlr;
}


function playBox() {
	
	switch(turn) {
		case 1:
			event.target.innerHTML="<img src='img/dotsx.png'>";
			break;
		default:
			event.target.innerHTML="<img src='img/dots.png'>";
			turn = 0;
			break;
	}
	turn += 1;

	for(i=1; i<=9; ++i) {
			cellArray[(i-1)%3][Math.floor((i-1)/3)] =
				document.getElementById("cell_"+i).innerHTML;
	}
	for(x=0; x<=2; ++x) {
		if(cellArray[0][x] == cellArray[1][x] &&
		   cellArray[1][x] == cellArray[2][x] &&
		   cellArray[2][x] != "") {
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = 'url(img/Gondowins.png)';
			var container = document.getElementById('container');
			container.style.opacity = "0.2";
			
		}
			
		if(cellArray[x][0] == cellArray[x][1] &&
		   cellArray[x][1] == cellArray[x][2] &&
		   cellArray[x][2] != "") {
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = 'url(img/Gondxwins.png)';
			var container = document.getElementById('container');
			container.style.opacity = "0.2";
			
			}
		
	}

}

var cellArray = [["", "", ""], ["", "", ""], ["", "", ""]];

function navCells() {	
	/*

	*/
}

// function pageLoaded() {
// 	var squares = document.getElementsByClassName("sqr");
// 	for (i = 0; i < squares.length; ++i) {
// 		squares[i].onclick = clickDiv;
// 	};
// }
