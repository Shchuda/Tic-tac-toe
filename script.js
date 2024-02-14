var click = 0;	  	  		      	  		         	
	  	  		      	  		         	
function tac()	  	  		      	  		         	
{	  	  		      	  		         	
  if (this.innerHTML == "-")	  	  		      	  		         	
  {	  	  		      	  		         	
    if (click % 2 == 0)	  	  		      	  		         	
    {	  	  		      	  		         	
      this.innerHTML = "X";
    }	  	  		      	  		         	
    else if (click % 2 != 0)	  	  		      	  		         	
    {	  	  		      	  		         	
      this.innerHTML = "O";
    }	  	  		      	  		         	
    click++;	  	  		      	  		         	
	  	  		      	  		         	
    // Check for the winner after each move	  	  		      	  		         	
    var result = winner();	  	  		      	  		         	
    document.getElementById("gamestatus").innerHTML = result;	  	  		      	  		         	
	  	  		      	  		         	
    if (result != "")	  	  		      	  		         	
    {	  	  		      	  		         	
      // Pause for a moment (optional)	  	  		      	  		         	
      setTimeout(restartGame, 1000); // Adjust the delay as needed	  	  		      	  		         	
    }	  	  		      	  		         	
  }	  	  		      	  		         	
}	  	  		      	  		         	
	  	  		      	  		         	
for (count = 1; count <= 9; count++)	  	  		      	  		         	
{	  	  		      	  		         	
  document.getElementById("cell" + count).onclick = tac;	  	  		      	  		         	
}	  	  		      	  		         	
	  	  		      	  		         	
function winner()	  	  		      	  		         	
{	  	  		      	  		         	
  // Check if all cells are filled	  	  		      	  		         	
  var allCellsFilled = true;	  	  		      	  		         	
	  	  		      	  		         	
  for (var count = 1; count <= 9; count++)	  	  		      	  		         	
  {	  	  		      	  		         	
    if (document.getElementById("cell" + count).innerHTML === "-")	  	  		      	  		         	
    {	  	  		      	  		         	
      allCellsFilled = false;	  	  		      	  		         	
    }	  	  		      	  		         	
  }	  	  		      	  		         	
	  	  		      	  		         	
  if (allCellsFilled)	  	  		      	  		         	
  {	  	  		      	  		         	
    return "DRAW";	  	  		      	  		         	
  }	  	  		      	  		         	
	  	  		      	  		         	
  // row cell 1,2,3	  	  		      	  		         	
  if (document.getElementById("cell1").innerHTML !== "-" && document.getElementById("cell1").innerHTML === document.getElementById("cell2").innerHTML && document.getElementById("cell1").innerHTML === document.getElementById("cell3").innerHTML)	  	  		      	  		         	
  {	  	  		      	  		         	
    return document.getElementById("cell1").innerHTML + " IS THE WINNER";	  	  		      	  		         	
  }	  	  		      	  		         	
  // row cell 4,5,6	  	  		      	  		         	
  else if (document.getElementById("cell4").innerHTML !== "-" && document.getElementById("cell4").innerHTML === document.getElementById("cell5").innerHTML && document.getElementById("cell4").innerHTML === document.getElementById("cell6").innerHTML)	  	  		      	  		         	
  {	  	  		      	  		         	
    return document.getElementById("cell4").innerHTML + " IS THE WINNER";	  	  		      	  		         	
  }	  	  		      	  		         	
  // row cell 7,8,9	  	  		      	  		         	
  else if (document.getElementById("cell7").innerHTML !== "-" && document.getElementById("cell7").innerHTML === document.getElementById("cell8").innerHTML && document.getElementById("cell7").innerHTML === document.getElementById("cell9").innerHTML)	  	  		      	  		         	
  {	  	  		      	  		         	
    return document.getElementById("cell7").innerHTML + " IS THE WINNER";	  	  		      	  		         	
  }	  	  		      	  		         	
  // column cell 1,4,7	  	  		      	  		         	
  else if (document.getElementById("cell1").innerHTML !== "-" && document.getElementById("cell1").innerHTML === document.getElementById("cell4").innerHTML && document.getElementById("cell1").innerHTML === document.getElementById("cell7").innerHTML)	  	  		      	  		         	
  {	  	  		      	  		         	
    return document.getElementById("cell1").innerHTML + " IS THE WINNER";	  	  		      	  		         	
  }	  	  		      	  		         	
  // column cell 2,5,8	  	  		      	  		         	
  else if (document.getElementById("cell2").innerHTML !== "-" && document.getElementById("cell2").innerHTML === document.getElementById("cell5").innerHTML && document.getElementById("cell2").innerHTML === document.getElementById("cell8").innerHTML)	  	  		      	  		         	
  {	  	  		      	  		         	
    return document.getElementById("cell2").innerHTML + " IS THE WINNER";	  	  		      	  		         	
  }	  	  		      	  		         	
  // column cell 3,6,9	  	  		      	  		         	
  else if (document.getElementById("cell3").innerHTML !== "-" && document.getElementById("cell3").innerHTML === document.getElementById("cell6").innerHTML && document.getElementById("cell3").innerHTML === document.getElementById("cell9").innerHTML)	  	  		      	  		         	
  {	  	  		      	  		         	
    return document.getElementById("cell3").innerHTML + " IS THE WINNER";	  	  		      	  		         	
  }	  	  		      	  		         	
  // diagonal cell 1,5,9	  	  		      	  		         	
  else if (document.getElementById("cell1").innerHTML !== "-" && document.getElementById("cell1").innerHTML === document.getElementById("cell5").innerHTML && document.getElementById("cell1").innerHTML === document.getElementById("cell9").innerHTML)	  	  		      	  		         	
  {	  	  		      	  		         	
    return document.getElementById("cell1").innerHTML + " IS THE WINNER";	  	  		      	  		         	
  }	  	  		      	  		         	
  // diagonal cell 3,5,7	  	  		      	  		         	
  else if (document.getElementById("cell3").innerHTML !== "-" && document.getElementById("cell3").innerHTML === document.getElementById("cell5").innerHTML && document.getElementById("cell3").innerHTML === document.getElementById("cell7").innerHTML)	  	  		      	  		         	
  {	  	  		      	  		         	
    return document.getElementById("cell3").innerHTML + " IS THE WINNER";	  	  		      	  		         	
  }	  	  		      	  		         	
  else	  	  		      	  		         	
  {	  	  		      	  		         	
    return "";	  	  		      	  		         	
  }	  	  		      	  		         	
}	  	  		      	  		         	
	  	  		      	  		         	
function restartGame()	  	  		      	  		         	
{	  	  		      	  		         	
  // Clear the game board	  	  		      	  		         	
  for (count = 1; count <= 9; count++)	  	  		      	  		         	
  {	  	  		      	  		         	
    document.getElementById("cell" + count).innerHTML = "-";	  	  		      	  		         	
  }	  	  		      	  		         	
	  	  		      	  		         	
  // Clear the game status	  	  		      	  		         	
  document.getElementById("gamestatus").innerHTML = "";	  	  		      	  		         	
	  	  		      	  		         	
  // Reset the click count	  	  		      	  		         	
  click = 0;	  	  		      	  		         	
}
