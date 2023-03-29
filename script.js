//Selectors of each div element
const divElems = document.querySelectorAll(`.box`);
const strtBttn = document.querySelector(`#start`);
// Three states: 0 = (inactive) default, 1 = (active) player1, 2 = (active)player2.

const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

//EVENT LISTENERS

strtBttn.addEventListener(`click`, newGame);

divElems.forEach(boxPos => {
    boxPos.addEventListener("click", () => {
        symbolX(boxPos);
    });
});



//FUNCTIONS

//function to place X on board
function symbolX(pos) {
    let text = document.createElement("blockquote");
    pos.appendChild(text);
    text.classList.add("symContain");
    text.innerText = "X";
    text.style.fontSize = "100px";
}

function symbolO(pos) {
    let text = document.createElement("blockquote");
    pos.appendChild(text);
    text.classList.add("symContain");
    text.innerText = "O";
    text.style.fontSize = "100px";
}

function newGame() {
    divElems.forEach(boxPos => {
        boxPos.remove();
    });
    alert("TIC-TAC-TOE!\nPlace 3 consecutive symbols horizontally, vertically, or diagnolly to win\nPlayer 1, begin!");
}