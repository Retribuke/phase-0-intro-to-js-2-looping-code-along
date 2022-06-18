
function writeCards(names, event) {
    let finishedCards = [];
    for (let i = 0; i < names.length; i++) {
        finishedCards.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }

    return finishedCards;
}

function countDown(number) {
    while (number >= 0) {
        console.log(number--);
    }
}