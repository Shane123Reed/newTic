function TicTacCtrl($scope) {
	$scope.ticTacToe=[['X','','O'], 
					  ['','X',''], 
					  ['','O','']];

	var playerTurn = 1;

	$scope.clickSquare = function(row, col) {
		
		if(playerTurn % 2 == 1)
			event.target.innerHTML = "<img src='img/dotsx.png'>";
		else
			event.target.innerHTML = "<img src='img/dots.png'>";
			
		playerTurn++;
	};
}