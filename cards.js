var createButton = document.getElementById("create-button");

function createCard() {
    var userInput = document.getElementById("card-input").value;
    var card = document.createElement("DIV");
    card.classList.add("user-card")
    var cardText = "<article><h1>" + userInput + "</h1></article><button class='delete-button'>Delete</button>";
    card.innerHTML += cardText;
    document.getElementById("main-content").appendChild(card);
    // delete button actions
    var deleteButtons = document.getElementsByClassName("delete-button");
    for (button in deleteButtons) {
        deleteButtons.item(button).addEventListener('click', deleteCard);
    }
}


function deleteCard() {
    this.parentElement.remove();
}

createButton.addEventListener('click', createCard);
