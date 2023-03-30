// Rules: alert("TIC-TAC-TOE!\nPlace 3 consecutive symbols horizontally, vertically, or diagnolly to win\nPlayer 1, begin!");

//Selectors of each div element
const divElems = document.querySelectorAll(`.box`);
const strtBttn = document.querySelector(`#start`);

// Three states: 0 = (inactive) default, 1 = (active) player1, 2 = (active)player2.
const board = [  //Maybe move to front of newGame() and remove reset or make reset standalone button
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

//Buttons
strtBttn.addEventListener(`click`, newGame);

//FUNCTIONS
function symbolX(pos) { //function to place symbol X on board, div position is passed.
    let text = document.createElement("blockquote");
    pos.appendChild(text);
    text.classList.add("symContain");
    text.innerText = "X";
    text.style.fontSize = "100px";
}

function symbolO(pos) { //function to place symbol O on board, div position is passed.
    let text = document.createElement("blockquote");
    pos.appendChild(text);
    text.classList.add("symContain");
    text.innerText = "O";
    text.style.fontSize = "100px";
}


function newGame() { // clears prev players, asks for new player names, resets board, and resets timer.
    TicTacToe.removePlayers(); 
    TicTacToe.addPlayers();
    TicTacToe.resetBoard();
    TicTacToe.turn = 0;
    currentPlayer = TicTacToe.boardPlayers[0];

    //Adds an EventListener to each div that will create an X or O when clicked, switch players, & assign a player value to the board array.
divElems.forEach((divEle, divPos) => {
    divEle.addEventListener("click", () => {
        TicTacToe.switchPlayer();
        console.log(currentPlayer);
        if (currentPlayer === TicTacToe.boardPlayers[0]) { //current player
            symbolX(divEle);
            gamePoints(divPos, 1);
        }else {
            symbolO(divEle);
            gamePoints(divPos, 2);
        }
    }, {once: true}); 
});
}


function gamePoints(divPos, num) { //This function assigns a player value to the 3x3 array and checks the win condition based on where each player clicks.
    switch (divPos) {
        case 0:
           board[0][0] = num;
           if (board[0][0] === board[0][1] && board[0][0] === board[0][2]) {
            displayWinner(num);
            break;
           }else if (board[0][0] === board[1][0] && board[0][0] === board[2][0]) {
            displayWinner(num);
            break;
           }else if (board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            displayWinner(num);
            break;
           }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 1 :
            board[0][1] = num;
            if (board[0][1] === board[0][0] && board[0][1] === board[0][2]) {
                displayWinner(num);
                break;
               }else if (board[0][1] === board[1][1] && board[0][1] === board[2][1]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 2 :
            board[0][2] = num;
            if (board[0][2] === board[0][1] && board[0][2] === board[0][0]) {
                displayWinner(num);
                break;
               }else if (board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
                displayWinner(num);
                break;
               }else if (board[0][2] === board[1][2] && board[0][2] === board[2][2]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 3 :
            board[1][0] = num;
            if (board[1][0] === board[1][1] && board[1][0] === board[1][2]) {
                displayWinner(num);
                break;
               }else if (board[1][0] === board[0][0] && board[1][0] === board[2][0]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 4 :
            board[1][1] = num;
            if (board[1][1] === board[0][1] && board[1][1] === board[2][1]) {
                displayWinner(num);
                break;
               }else if (board[1][1] === board[1][0] && board[1][1] === board[1][2]) {
                displayWinner(num);
                break;
               }else if (board[1][1] === board[0][2] && board[1][1] === board[2][0]) {
                displayWinner(num);
                break;
               }else if (board[1][1] === board[0][0] && board[1][1] === board[2][2]) {
                displayWinner(num);
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 5 :
            board[1][2] = num;
            if (board[1][2] === board[0][2] && board[1][2] === board[2][2]) {
                displayWinner(num);
                break;
               }else if (board[1][2] === board[1][1] && board[1][2] === board[1][0]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 6 :
            board[2][0] = num;
            if (board[2][0] === board[1][0] && board[2][0] === board[0][0]) {
                displayWinner(num);
                break;
               }else if (board[2][0] === board[2][1] && board[2][0] === board[2][2]) {
                displayWinner(num);
                break;
               }else if (board[2][0] === board[1][1] && board[2][0] === board[0][2]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 7 :
            board[2][1] = num;
            if (board[2][1] === board[1][1] && board[2][1] === board[0][1]) {
                displayWinner(num);
                break;
               }else if (board[2][1] === board[2][0] && board[2][1] === board[2][2]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 8 :
            board[2][2] = num;
            if (board[2][2] === board[2][1] && board[2][2] === board[2][0]) {
                displayWinner(num);
                break;
               }else if (board[2][2] === board[1][2] && board[2][2] === board[0][2]) {
                displayWinner(num);
                break;
               }else if (board[2][2] === board[1][1] && board[2][2] === board[0][0]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
    
        default:
            break;
    }
}

function displayWinner(num) {
    if (num === 1) {
        alert("Player" + num + " wins the game!"); //Can I change a font inside an alert?
    }else alert("Player" + num + " wins the game!");
}



//CLASSES
class Player {
    constructor(name, player) {
        this.name = name;
        this.player = player;
    }
}

class gameBoard {
    constructor() {
        this.boardPlayers = [];
        this.turn = 0;
    }

    addPlayers() {  //Declares player objects and asks for player names.
        let p1Name = prompt("Please enter Player1's name");
        let player1 = new Player(p1Name, 1);

        let p2Name = prompt("Please enter Player2's name");
        let player2 = new Player(p2Name, 2);
        
        this.boardPlayers.push(player1);
        this.boardPlayers.push(player2);
    }

    removePlayers() { //Removes players
        while (this.boardPlayers.length > 0) {
            this.boardPlayers.pop();
        }
    }

    resetBoard() { //clears score by setting array back to 0's and clears all visual symbols off board
        for (let i = 0; i < board.length; i++) {
             for (let j = 0; j < board.length; j++) {
                board[i][j] = 0;
             } 
        }
        divElems.forEach(divEle => {
            if(divEle.hasChildNodes()) {
                divEle.removeChild(divEle.firstChild);
            }
        });     
    }

    switchPlayer() {
        if (this.turn % 2 == 0) {
            currentPlayer = this.boardPlayers[0];
        }else currentPlayer = this.boardPlayers[1];
        this.turn++;
        let totalTurns = 0 //Silver Feature
        return currentPlayer;
    }
} 

let TicTacToe = new gameBoard();