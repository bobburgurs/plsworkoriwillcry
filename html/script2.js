let num = Math.floor(Math.random() * 9 + 1);
let userInput = document.getElementById("userGuess");
const submit = document.getElementById("submit");
submit.addEventListener("click", function() {

    let userGuess = parseInt(document.getElementById("userGuess").value);
    let result = "";

    if (userGuess == num) {
        result = `Congratulations, your guess is correct! The correct number is ${num}`;
    } else {
        result = "Your guess is incorrect. Try again.";
    }

   window.alert(result); 
});
