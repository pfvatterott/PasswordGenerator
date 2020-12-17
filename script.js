// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function generate(yesLetters, yesNumbers, yesSpecials) {

    //arrays of letters, numbers, and specials
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "'", ")", "(", "+", "-", ",", "/", ">", "<", "{", "}", "[", "]", "~"];
    var numchar = 0;
    var password = [];
    var errorMessage = "Please enter a number between 1 - 1000"


    //functions
    function findNumbers() {
        password += numbers[randNumber];
        console.log(password);
    }

    function findSpecials() {
        password += specials[randSpecial];
        console.log(password);
    }

    function findLetters() {
        var randCapital = Math.floor(Math.random() * 2);
        if (randCapital === 0) {
            var selectedLetter = letters[randLetter].toUpperCase();
            password += selectedLetter;
            console.log(password);
        }
        else {
            password += letters[randLetter];
            console.log(password);
        }
    }



    //checkbox event listeners
    if (lettersbox.checked) {
        yesLetters = true;
    }
    else {
        yesLetters = false;
    }
    if (numbersbox.checked) {
        yesNumbers = true;
    }
    else {
        yesNumbers = false;
    }
    if (specialsbox.checked) {
        yesSpecials = true;
    }
    else {
        yesSpecials = false;
    }


    //textbox event listener
    var numchar = parseInt(document.getElementById('characterAmount').value);

    //control input error messages
    if (numchar <= 0 || numchar > 1000) {
        document.getElementById("password").value = errorMessage;
        return;
    }
    if (isNaN(numchar)) {
        document.getElementById("password").value = errorMessage;
        return;
    }

    //Main logic
    for (var i = 0; i < numchar; i++) {
        var randLetter = Math.floor(Math.random() * letters.length);
        var randNumber = Math.floor(Math.random() * numbers.length);
        var randSpecial = Math.floor(Math.random() * specials.length);

        if (yesLetters === true && yesNumbers === false && yesSpecials === false) {
            findLetters();
        }

        else if (yesLetters === true && yesNumbers === true && yesSpecials === false) {
            var randChoice = Math.floor(Math.random() * 2);
            if (randChoice === 0) {
                findLetters();
            }
            else {
                findNumbers();
            }
        }

        else if (yesLetters === true && yesNumbers === false && yesSpecials === true) {
            var randChoice = Math.floor(Math.random() * 2);
            if (randChoice === 0) {
                findLetters();
            }
            else {
                findSpecials();
            }
        }

        else if (yesLetters === true && yesNumbers === true && yesSpecials === true) {
            var randChoice = Math.floor(Math.random() * 3);
            if (randChoice === 0) {
                findLetters();
            }
            else if (randChoice === 1) {
                findNumbers();
            }
            else {
                findSpecials();

            }
        }

        else if (yesLetters === false && yesNumbers === true && yesSpecials === false) {
            findNumbers();
        }

        else if (yesLetters === false && yesNumbers === true && yesSpecials === true) {
            var randChoice = Math.floor(Math.random() * 2);
            if (randChoice === 0) {
                findNumbers();
            }
            else {
                findSpecials();
            }
        }

        else if (yesLetters === false && yesNumbers === false && yesSpecials === true) {
            findSpecials();
        }
    }
    document.getElementById("password").value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generate);