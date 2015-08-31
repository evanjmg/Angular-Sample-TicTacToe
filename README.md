## Angular Sample TicTacToe App

Here's a sample Angular TicTacToe App I made to teach myself Angular. 
http://evanjmg.com/projects/tictactoe-angular/
# Key Points:
- ng-disabled allows me to disable the boxes after they are clicked
- ng-repeat allows me to generate the boxes 
- ng-click and $event.target allows me to get the element. 
```html
<li ng-repeat="box in game.boxes track by $index" class="box" ng-click="game.disabledStatus[$index] || game.turn($event, $index)" ng-disabled="game.disabledStatus[$index]"></li>
```

