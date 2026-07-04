function rollDice() {
    const nb_dice = document.getElementById("diceCount").value;
    const result = document.getElementById("result");
    const diceContainer = document.getElementById("diceContainer");

    const value = [];
    const imgs = [];
    if (nb_dice == "") {
        result.textContent = "Please enter a valid number of dice.";
    } else {
        for (let i = 0; i < nb_dice; i++) {
            const randomValue = Math.floor(Math.random() * 6) + 1;
            value.push(randomValue);
            imgs.push(`<img src ="images/dice-six-faces-${randomValue}.svg" alt="Dice">`);
        }
        result.textContent = `You rolled: ${value.join(", ")}`;
        diceContainer.innerHTML = imgs.join("");
    }
}