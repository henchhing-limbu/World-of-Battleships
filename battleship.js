function Main(){

	var Startup = prompt("How many ships do you want? (You can have up to 5 ships)");
	
	var CPU_SNUM = Startup;
	
	
	var Board = [["0", "0", "0"],
				 ["0", "0", "0"],
				 ["0", "0", "0"]] ;
	
	for(i = 0; i < Startup; i++) {
		//This section of code is primarily for you to enter the X and Y potitions of the ship you're entering in the grid
		var Xpos = parseInt(prompt("Enter the X-coordinate of your " + (i+1) + " ship: "));
		
		var Ypos = parseInt(prompt("Enter the Y-coordinate of your " + (i+1) + " ship: "));
		
		Xpos = Xpos - 1;
		Ypos = Ypos - 1;
		
		Board[Xpos][Ypos] = "1";
		
		
	}
	
	var Board2 = [["0", "0", "0"],
				  ["0", "0", "0"],
				  ["0", "0", "0"]];
	
	for(i = 0; i < Startup; i++){
		
		var X = Math.floor(Math.random() * 2);
		var Y = Math.floor(Math.random() * 2);
		
		Board2[X][Y] = "1";
		
	}
	while(true){
		playerShot(Board2, CPU_SNUM, Board);
		CPUshot(Board, Startup);
		if(Startup == 0 && CPU_SNUM == 0 ){
			alert("You both Sunk eachother's Battleships, it's a Tie!");
			break;
		}
		if(CPU_SNUM == 0){
			alert("You sunk all of the CPU's Battleships, You Won!");
			break;
		}
		else if(Startup == 0 ){
			alert("CPU Sunk your Battleships!, You Lost!");
			break;
		}
	}

}
function playerShot(Board2, CPU_SNUM, Board){
        var x = prompt("Guess the other Ship's X pos (3 x 3 Grid)");
	var y = prompt("Guess the other Ship's y pos (3 x 3 Grid)");
	x = x - 1;
	y = y - 1;
		
	if (Board2[x][y] == "1"){
		alert("You sunk a CPU's ship.");
		CPU_SNUM = CPU_SNUM - 1;
		Board2[x][y] = "3";
	}
	else if (Board2[x][y] == "0"){
		alert("You Missed!");
		Board[x][y] = "3";
	}
        else {
            alert("You already fired at that coordinate!");
            playerShot(Board2, CPU_SNUM, Board);
        }
}
function CPUshot(Board, Startup){
        var x = Math.floor(Math.random() * 2);
		var y = Math.floor(Math.random() * 2);
		
		
	if (Board[x][y] == "1"){
		alert("CPU sunk your ship.");
		Startup = Startup - 1;
		Board[x][y] = "3";
	}
	else if (Board[x][y] == "0"){
		alert("CPU Missed!");
	}
        else {
			alert("CPU already fired at that coordinate!")
        	CPUshot(Board, Startup);
        }
}
