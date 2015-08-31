angular.module('tictactoeApp')
  .controller('GameController', GameController);

function GameController () {
  this.boxes =  Array(9);
  this.catsCounter;
  this.Xwins = 0;
  this.Owins = 0;
  this.playerXTurn = true;
  this.disabledStatus= Array.apply(null, Array(9)).map(function(){return false})
  this.checkBoard = [[0, 1, 2],
                    [3, 4, 5], 
                    [6, 7, 8],
                    [0, 3, 6], 
                    [1, 4, 7], 
                    [2, 5, 8], 
                    [0, 4, 8],
                    [2, 4, 6]];
  this.checkThree = [];
  this.currentBoard = ["","","","","","","","",""];
  this.display = "X's Turn";
  this.currentThree = [];

  this.turn =  function ($event, $index) {
  this.disabledStatus[$index] = true;
   if (this.playerXTurn) {
           this.display = "O's turn";
           $event.target.innerHTML = "X";
      this.playerXTurn=false;
    }
  else {
    $event.target.innerHTML = "O";
    this.display = "X's turn";
    this.playerXTurn=true;
  }
  console.log($event.target.innerHTML)
  this.currentBoard[$index] = $event.target.innerHTML;

     for(j = 0; j < 8;j++) {
  for(k = 0;k < 3;k++) {
    this.currentThree[k] = this.currentBoard[this.checkBoard[j][k]];
  }
  this.threeValueMatch();

      }
      this.catsGame();
  }
  this.threeValueMatch = function () {
    this.winner = ''
    if (this.currentThree.join() === "X,X,X") {
      this.Xwins++
      this.display = "X wins (Clear the board)";
     this.disabledStatus = Array.apply(null, Array(9)).map(function(){return true})
    $('#alert').removeClass();
    $('#alert').addClass('alert alert-success');
    }
    else if (this.currentThree.join() === "O,O,O") {
      this.Owins++
      this.display = "O wins (Clear the board)";
      $('#alert').removeClass();
      $('#alert').addClass('alert alert-success');
      this.disabledStatus = Array.apply(null, Array(9)).map(function(){return true})
    }
  }
  this.catsGame = function () {
    this.catsCounter = this.catsCounter || 0;
    this.catsCounter++;
    console.log(this.catsCounter)
    if(this.catsCounter === 9) {
      $('#alert').removeClass();
      $('#alert').addClass('alert alert-warning');
      this.display = "It's a tie. (Clear the board to play again.)";
      this.catsCounter = 0;
    }
  }
  this.clearBoard = function () {
    $('#alert').removeClass();
    $('#alert').addClass('alert alert-info');
    this.disabledStatus = Array.apply(null, Array(9)).map(function(){return false});
    this.playerXTurn = true;
    this.currentBoard = ["","","","","","","","",""];
    this.display = "X's Turn";
    $('li').html('');
    this.catsCounter = 0;
  }
 }

