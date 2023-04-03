//Selectors of each div element
let divElems = document.querySelectorAll(`.box`);
const strtBttn = document.querySelector(`#start`);
const resetBttn = document.querySelector(`#reset`);
let controller = new AbortController();
//Buttons
strtBttn.addEventListener(`click`, newGame);
resetBttn.addEventListener(`click`, resetGame);

//FUNCTIONS
function symbolX(pos) { //function to place symbol X on board, div position is passed.
    let text = document.createElement("blockquote");
    pos.appendChild(text);
    text.classList.add("symbolContain");
    text.innerText = "X";
    text.style.fontSize = "100px";
    text.style.color = "black";
    text.style.fontFamily = "strangerthings";
}

function symbolO(pos) { //function to place symbol O on board, div position is passed.
    let text = document.createElement("blockquote");
    pos.appendChild(text);
    text.classList.add("symbolContain");
    text.innerText = "O";
    text.style.fontSize = "100px";
    text.style.color = "black";
    text.style.fontFamily = "strangerthings";
}


function newGame() { // clears prev players, asks for new player names, resets board, and resets timer.
    TicTacToe.removePlayers(); 
    TicTacToe.addPlayers();
    TicTacToe.resetBoard();
    TicTacToe.turn = 0;
    currentPlayer = TicTacToe.playersArray[0];
    controller = new AbortController();
    TicTacToe.setBoard();
}

function resetGame() {
    if (TicTacToe.turn === 0) {
        alert("Push Start New Game");
    }else {
        TicTacToe.resetBoard();
        TicTacToe.turn = 0;
        currentPlayer = TicTacToe.playersArray[0];
        controller = new AbortController();
        TicTacToe.setBoard();
    }
}

function displayWinner(num) {
    controller.abort();
    if (num === 1) {
        alert(currentPlayer.name + " wins the game!");
    }else alert(currentPlayer.name + " wins the game!");
}

function gamePoints(divPos, num) { //This function assigns a player value to the 3x3 array and checks the win condition based on where each player clicks.
    switch (divPos) {
        case 0:
           TicTacToe.board[0][0] = num;
           if (TicTacToe.board[0][0] === TicTacToe.board[0][1] && TicTacToe.board[0][0] === TicTacToe.board[0][2]) {
            displayWinner(num);
            break;
           }else if (TicTacToe.board[0][0] === TicTacToe.board[1][0] && TicTacToe.board[0][0] === TicTacToe.board[2][0]) {
            displayWinner(num);
            break;
           }else if (TicTacToe.board[0][0] === TicTacToe.board[1][1] && TicTacToe.board[0][0] === TicTacToe.board[2][2]) {
            displayWinner(num);
            break;
           }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 1 :
            TicTacToe.board[0][1] = num;
            if (TicTacToe.board[0][1] === TicTacToe.board[0][0] && TicTacToe.board[0][1] === TicTacToe.board[0][2]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.board[0][1] === TicTacToe.board[1][1] && TicTacToe.board[0][1] === TicTacToe.board[2][1]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 2 :
            TicTacToe.board[0][2] = num;
            if (TicTacToe.board[0][2] === TicTacToe.board[0][1] && TicTacToe.board[0][2] === TicTacToe.board[0][0]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.board[0][2] === TicTacToe.board[1][1] && TicTacToe.board[0][2] === TicTacToe.board[2][0]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.board[0][2] === TicTacToe.board[1][2] && TicTacToe.board[0][2] === TicTacToe.board[2][2]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 3 :
            TicTacToe.board[1][0] = num;
            if (TicTacToe.board[1][0] === TicTacToe.board[1][1] && TicTacToe.board[1][0] === TicTacToe.board[1][2]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.board[1][0] === TicTacToe.board[0][0] && TicTacToe.board[1][0] === TicTacToe.board[2][0]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 4 :
            TicTacToe.board[1][1] = num;
            if (TicTacToe.board[1][1] === TicTacToe.board[0][1] && TicTacToe.board[1][1] === TicTacToe.board[2][1]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.board[1][1] === TicTacToe.board[1][0] && TicTacToe.board[1][1] === TicTacToe.board[1][2]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.board[1][1] === TicTacToe.board[0][2] && TicTacToe.board[1][1] === TicTacToe.board[2][0]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.board[1][1] === TicTacToe.board[0][0] && TicTacToe.board[1][1] === TicTacToe.board[2][2]) {
                displayWinner(num);
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 5 :
            TicTacToe.board[1][2] = num;
            if (TicTacToe.board[1][2] === TicTacToe.board[0][2] && TicTacToe.board[1][2] === TicTacToe.board[2][2]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.board[1][2] === TicTacToe.board[1][1] && TicTacToe.board[1][2] === TicTacToe.board[1][0]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 6 :
            TicTacToe.board[2][0] = num;
            if (TicTacToe.board[2][0] === TicTacToe.board[1][0] && TicTacToe.board[2][0] === TicTacToe.board[0][0]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.board[2][0] === TicTacToe.board[2][1] && TicTacToe.board[2][0] === TicTacToe.board[2][2]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.board[2][0] === TicTacToe.board[1][1] && TicTacToe.board[2][0] === TicTacToe.board[0][2]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 7 :
            TicTacToe.board[2][1] = num;
            if (TicTacToe.board[2][1] === TicTacToe.board[1][1] && TicTacToe.board[2][1] === TicTacToe.board[0][1]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.board[2][1] === TicTacToe.board[2][0] && TicTacToe.board[2][1] === TicTacToe.board[2][2]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
        case 8 :
            TicTacToe.board[2][2] = num;
            if (TicTacToe.board[2][2] === TicTacToe.board[2][1] && TicTacToe.board[2][2] === TicTacToe.board[2][0]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.board[2][2] === TicTacToe.board[1][2] && TicTacToe.board[2][2] === TicTacToe.board[0][2]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.board[2][2] === TicTacToe.board[1][1] && TicTacToe.board[2][2] === TicTacToe.board[0][0]) {
                displayWinner(num);
                break;
               }else if (TicTacToe.turn === 9) alert("The game has ended in a Tie! Start New Game to play again");
            break;
    
        default:
            break;
    }
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
        this.playersArray = [];
        this.turn = 0;
        this.board = [
            [0, 0, 0],
            [0, 0, 0],
            [0, 0, 0]
        ];
        
    }

    addPlayers() {  //Declares player objects and asks for player names.
        let p1Name = prompt("Please enter Player1's name");
        let player1 = new Player(p1Name, 1);

        let p2Name = prompt("Please enter Player2's name");
        let player2 = new Player(p2Name, 2);
        
        this.playersArray.push(player1);
        this.playersArray.push(player2);
    }

    removePlayers() { //Removes players
        while (this.playersArray.length > 0) {
            this.playersArray.pop();
        }
    }

    setBoard() {
        // Adds an EventListener to each div that will create an X or O when clicked, switch players, & assign a player value to the board array.
    divElems.forEach((divEle, divPos) => {
        divEle.addEventListener("click", () => {
            TicTacToe.switchPlayer();
            console.log(currentPlayer);
            if (currentPlayer === TicTacToe.playersArray[0]) {
                symbolX(divEle);
                gamePoints(divPos, 1);
            }else {
                symbolO(divEle);
                gamePoints(divPos, 2);
            }
        }, {once: true, signal: controller.signal}); 
    });
    }


    resetBoard() {  
        //Clears score by setting array back to 0's.
        for (let i = 0; i < this.board.length; i++) {  //#1
             for (let j = 0; j < this.board.length; j++) {
                this.board[i][j] = 0;
             } 
        }
        //Clears all visual symbols off board.
        divElems.forEach(divEle => {  //#2
            if(divEle.hasChildNodes()) {
                divEle.removeChild(divEle.firstChild);
            }
        });
        //Recreates all box nodes to remove eventlisteners.
        divElems.forEach(divEle => { //#3
            divEle.replaceWith(divEle.cloneNode(true));
        });
        divElems = document.querySelectorAll(`.box`); //**Important** This is needed, as the first query variable does not hold the newly created boxes.
    }
    //Determines player turns and iterates count turn timer
    switchPlayer() {
        if (this.turn % 2 == 0) { //#4
            currentPlayer = this.playersArray[0];
        }else currentPlayer = this.playersArray[1];
        this.turn++;
        return currentPlayer;
    }
} 

let TicTacToe = new gameBoard();