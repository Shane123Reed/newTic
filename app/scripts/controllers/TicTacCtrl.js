function TicTacCtrl($scope, angularFire) {
	// function keydown(event) {
 //  		if(event.keyCode == 78) {
 //  		document.location.href = urlr;
	// }



	// $scope.ticTacToe=[['','',''], 
	// 				  ['','',''], 
	// 				  ['','','']];

	var playerTurn = 1;

	var database = new Firebase("https://sjrtictactoe.firebaseio.com/ticTacToe");
	angularFire(database, $scope, "ticTacToe").then(function(){
		$scope.ticTacToe=[['','',''], 
					  	  ['','',''], 
					      ['','','']];
	});

	$scope.clickSquare = function(row, col) {
		
		if(playerTurn % 2 == 1)
			event.target.innerHTML = "<img src='img/dotsx.png'>";
		else
			event.target.innerHTML = "<img src='img/dots.png'>";
			
		playerTurn++;
	};
}