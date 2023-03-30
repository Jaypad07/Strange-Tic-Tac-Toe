// Rules: alert("TIC-TAC-TOE!\nPlace 3 consecutive symbols horizontally, vertically, or diagnolly to win\nPlayer 1, begin!");

//Selectors of each div element
const divElems = document.querySelectorAll(`.box`);
const strtBttn = document.querySelector(`#start`);

// Three states: 0 = (inactive) default, 1 = (active) player1, 2 = (active)player2.
const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

//Buttons
strtBttn.addEventListener(`click`, newGame);


//Adds an EventListener to each div that creates an X or O when clicked.
divElems.forEach(divPos => {
    divPos.addEventListener("click", () => {
        TicTacToe.switchPlayer();
        console.log(currentPlayer);
        if (currentPlayer === TicTacToe.boardPlayers[0]) { //current player
            symbolX(divPos);
        }else symbolO(divPos);
        
    });
});

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

//Clears board of all symbols and asks for player names.
function newGame() {
    TicTacToe.removePlayers(); 
    TicTacToe.addPlayers();
    currentPlayer = TicTacToe.boardPlayers[0];
    TicTacToe.turn = 0;

    divElems.forEach(divEle => {
        if(divEle.hasChildNodes()) {
            divEle.removeChild(divEle.firstChild);
        }
    });
}


//Function that checks if innertext of blockquotes is X or O this determines winner
//Also all boxes will then change the letters to display Player 1 or 2 winns or Emojis?
// function gamePoints(divPos) {
//     divElems.forEach(divPos) {
//         //convert HTML locations into objects to hold location and a point?
//     }

//     for (let i = 0; i < divElems.length; i++) {
//         const  = divElems[i];
        
//     }
//     if (divEle) {
        
//     }
// }


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