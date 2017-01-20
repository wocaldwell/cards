var createButton = document.getElementById("create-button");
var deleteButton = document.getElementById("delete-button");
var userInput = document.getElementById("card-input").value;

createButton.addEventListener('click', createCard);

function createCard() {
    var card = document.createElement("DIV");
    var cardText = document.createTextNode(userInput);
    card.appendChild(cardText);
    document.getElementById("main").appendChild()
}
