const min = 1;
const max = 100;
const answer = Math.floor(Math.random() *(max - min + 1));
const submit = document.getElementById("submit");
const approx = document.getElementById("approx");
const ans = document.getElementById("answer");
const attemp = document.getElementById("attemps");
const form = document.getElementById("form");



let guess = document.getElementById("guess");
let running = true;
let attempts = 0;

form.addEventListener('submit', function(event){
    event.preventDefault();
    if(running){
        let guesses = Number(guess.value);
        if(isNaN(guesses) || guess.value.trim() === ""){
            window.alert("Pls enter a valid number");
        }
        else if (guesses < min || guesses > max){
            window.alert("Pls enter a valid number");
        }
        else{
            attempts++;
            attemp.textContent = `${attempts} attemps`;
            if(guesses < answer){
                approx.textContent = "TOO LOW, TRY AGAIN";
            }
            else if (guesses > answer){
                approx.textContent = "TOO HIGH, TRY AGAIN";
            }
            else{
                ans.textContent = `Congrats the answer was ${answer} you got in ${attempts} attempts.`
                running = false;
                attemp.remove();
            }
        }
        

        
}
else{
            window.alert("The game is over! Refresh to play again.");
        }
})
