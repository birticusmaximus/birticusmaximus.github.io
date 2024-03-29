
var errors = 0;
var cardList = [
    "bear",
    "blind",
    "dog",
    "gold",
    "grey",
    "heart",
    "honey",
    "parents",
    "silent",
    "ant"
]


var cardSet;
var board = [];
var rows = 4;
var columns =5;

var card1Selected;
var card2Selected;

window.onload = function() {
    shuffleCards();
    startGame();
    document.getElementById("reloadGame").addEventListener("click", function() {
        clearBoard(); // Clears the current board and resets the game
        shuffleCards(); // Shuffles the cards
        startGame(); // Starts a new game
    });
}


function shuffleCards() {
    cardSet = cardList.concat(cardList); //two of each card
    console.log(cardSet);
    //shuffle
    for (let i = 0; i < cardSet.length; i++) {
        let j = Math.floor(Math.random() * cardSet.length); //get random index
        //swap
        let temp = cardSet[i];
        cardSet[i] = cardSet[j];
        cardSet[j] = temp;
    }
    console.log(cardSet);
}

function startGame() {
    //arrange the board 4x5
    for (let r = 0; r < rows; r++) {
        let row = [];
        for (let c = 0; c < columns; c++) {
            let cardImg = cardSet.pop();
            row.push(cardImg); //JS

            // <img id="0-0" class="card" src="water.jpg">
            let card = document.createElement("img");
            card.id = r.toString() + "-" + c.toString();
            card.src = cardImg + ".jpeg";
            card.classList.add("card");
            card.addEventListener("click", selectCard);
            document.getElementById("board").append(card);

        }
        board.push(row);
    }

    console.log(board);
    setTimeout(hideCards, 300);
}

function hideCards() {
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < columns; c++) {
            let card = document.getElementById(r.toString() + "-" + c.toString());
            card.src = "wisdom.jpeg";
        }
    }
}

function selectCard() {

    if (this.src.includes("wisdom")) {
        if (!card1Selected) {
            card1Selected = this;

            let coords = card1Selected.id.split("-"); //"0-1" -> ["0", "1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card1Selected.src = board[r][c] + ".jpeg";
        }
        else if (!card2Selected && this != card1Selected) {
            card2Selected = this;

            let coords = card2Selected.id.split("-"); //"0-1" -> ["0", "1"]
            let r = parseInt(coords[0]);
            let c = parseInt(coords[1]);

            card2Selected.src = board[r][c] + ".jpeg";
            setTimeout(update, 1000);
        }
    }

}

function update() {
    //if cards aren't the same, flip both back
    if (card1Selected.src != card2Selected.src) {
        card1Selected.src = "wisdom.jpeg";
        card2Selected.src = "wisdom.jpeg";
        errors += 1;
        document.getElementById("errors").innerText = errors;
    }

    card1Selected = null;
    card2Selected = null;
}

function clearBoard() {
    document.getElementById("board").innerHTML = ""; // Clears the board
    board = []; // Resets the board array
    errors = 0; // Resets the errors count
    document.getElementById("errors").innerText = errors; // Updates the errors display
    card1Selected = null;
    card2Selected = null;
}

document.getElementById("reloadGame").addEventListener("click", function() {
    clearBoard(); // Clears the current board
    shuffleCards(); // Shuffles the cards
    startGame(); // Starts a new game
});
