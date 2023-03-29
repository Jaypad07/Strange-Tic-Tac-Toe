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
divElems.forEach(boxPos => {
    boxPos.addEventListener("click", () => {
        console.log(currentPlayer);
        TicTacToe.switchPlayer();
        if (currentPlayer === TicTacToe.boardPlayers[0]) { //current player
            symbolX(boxPos);
        }else symbolO(boxPos);
        
    });
});

//FUNCTIONS
function symbolX(pos) { //function to place symbol X on board
    let text = document.createElement("blockquote");
    pos.appendChild(text);
    text.classList.add("symContain");
    text.innerText = "X";
    text.style.fontSize = "100px";
}

function symbolO(pos) { //function to place symbol O on board
    let text = document.createElement("blockquote");
    pos.appendChild(text);
    text.classList.add("symContain");
    text.innerText = "O";
    text.style.fontSize = "100px";
}

//Clears board of all symbols and asks for player names.
function newGame() {
    divElems.forEach(divEle => {
        if(divEle.hasChildNodes()) {
            divEle.removeChild(divEle.firstChild);
        }
    });
    TicTacToe.addPlayers();
    currentPlayer = TicTacToe.boardPlayers[0];
}


//Player Class
class Player {
    constructor(name, player) {
        this.name = name;
        this.player = player;
        // if ((name.length) <= 3 && (name.length) > 1 ) {
        //     this.name = name;
        //     this.player = player;
        // }else {
            
        //     while (!((this.name.length) <= 3 && (this.name.length) > 1 )) {
        //         console.log(name);
        //         console.log(this.name);
        //         this.name = prompt("Player name must be between only be 2-3 characters");
        //     }
        // }  
    }
}

//gameBoard class
class gameBoard {
    constructor() {
        this.boardPlayers = [];
    }

    addPlayers() {  //Declares player objects and asks for player names.
        console.log(this.boardPlayers.length);
        if (this.boardPlayers.length > 1) {
            this.boardPlayers.pop();
            this.boardPlayers.pop();
        }

    let p1Name = prompt("Please enter Player1's name");
    let player1 = new Player(p1Name, 1);

    let p2Name = prompt("Please enter Player2's name");
    let player2 = new Player(p2Name, 2);
    
    this.boardPlayers.push(player1);
    this.boardPlayers.push(player2);
}

    turn = 0;
    switchPlayer() {
        if (this.turn > 1) this.turn = 0;
        currentPlayer = this.boardPlayers[this.turn];
        this.turn++;
        let totalTurns = 0
        return currentPlayer;
        
    }


} 

let TicTacToe = new gameBoard();