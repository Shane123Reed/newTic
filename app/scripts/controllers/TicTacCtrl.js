function TicTacCtrl($scope, angularFire) {
	// function keydown(event) {
 //  		if(event.keyCode == 78) {
 //  		document.location.href = urlr;
	// }



	$scope.ticTacToe=[[{value:''}, {value:''}, {value:''}],
					  [{value:''}, {value:''}, {value:''}],
					  [{value:''}, {value:''}, {value:''}]];

	var playerTurn = 1;

	var database = new Firebase("https://sjrtictactoe.firebaseio.com/ticTacToe");
	var promise = angularFire(database, $scope, "ticTacToe");
	promise.then(function() {
		$scope.ticTacToe=[[{value:''}, {value:''}, {value:''}],
				  [{value:''}, {value:''}, {value:''}],
				  [{value:''}, {value:''}, {value:''}]];
	});

	$scope.clickSquare = function(row, col) {
		
		if(playerTurn % 2 == 1)
			this.cell.value = "X";
		else
			this.cell.value = "O";
			
		playerTurn++;
	};
}