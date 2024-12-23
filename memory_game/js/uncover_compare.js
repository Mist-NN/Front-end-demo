function uncovered() {
    let uncoveredCards;
    let totalUncovered = document.querySelectorAll(".uncover:not(.theRight)");

    if (totalUncovered.length > 1) {
        return;
    }

    this.classList.add("uncover");

    uncoveredCards = document.querySelectorAll(".uncover:not(.theRight)");

    if (uncoveredCards.length < 2) {
        return;
    }

    compare(uncoveredCards);

}

function compare(cardToCompare) {
    if (cardToCompare[0].dataset.val === cardToCompare[1].dataset.val) {
        rightGuess(cardToCompare);
    } else {
        error(cardToCompare);
    }
}