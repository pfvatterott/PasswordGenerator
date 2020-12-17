// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function generate(yesLetters, yesNumbers, yesSpecials) {

    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "'",")", "(", "+", "-", ",", "/", ">", "<", "{", "}", "[", "]", "~"];
    var numchar = 0;
    var password = [];
    var errorMessage = "Please enter a number between 1 - 1000"

    //checkbox event listeners
    var checkbox = document.getElementById('checkbox');
    // Interpreted as "Is it true that checkbox.checked == true"?
    if(lettersbox.checked){
        yesLetters = true;
    }
    else {
        yesLetters = false;
    }
    if(numbersbox.checked){
        yesNumbers = true;
    }
    else {
        yesNumbers = false;
    }
    if(specialsbox.checked){
        yesSpecials = true;
    }
    else {
        yesSpecials = false;
    }


    //textbox event listener
    var numchar = parseInt(document.getElementById('characterAmount').value);

    //control input
    if (numchar <= 0 || numchar > 1000){
        document.getElementById("password").value=errorMessage;
        return;
    }
    if (isNaN(numchar)) {
        document.getElementById("password").value=errorMessage;
        return;
    }

    for (var i = 0; i < numchar; i++) {
        var randLetter = Math.floor(Math.random() * 26);
        var randNumber = Math.floor(Math.random() * 10);
        var randSpecial = Math.floor(Math.random() * 22);

        if (yesLetters === true && yesNumbers === false && yesSpecials === false) {
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

        else if (yesLetters === true && yesNumbers === true && yesSpecials === false) {
            var randChoice = Math.floor(Math.random() * 2);
            var randCapital = Math.floor(Math.random() * 2);
            if (randChoice === 0) {
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
            else {
                password += numbers[randNumber];
                console.log(password);
            }
        }

        else if (yesLetters === true && yesNumbers === false && yesSpecials === true) {
            var randChoice = Math.floor(Math.random() * 2);
            var randCapital = Math.floor(Math.random() * 2);
            if (randChoice === 0) {
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
            else {
                password += specials[randSpecial];
                console.log(password)
            }
        }

        else if (yesLetters === true && yesNumbers === true && yesSpecials === true) {
            var randChoice = Math.floor(Math.random() * 3);
            var randCapital = Math.floor(Math.random() * 2);
            if (randChoice === 0) {
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
            else if (randChoice === 1) {
                password += numbers[randNumber];
                console.log(password);
            }
            else {
                password += specials[randSpecial];
                console.log(password);
            }
        }

        else if (yesLetters === false && yesNumbers === true && yesSpecials === false) {
            console.log(numbers[randNumber]);
        }

        else if (yesLetters === false && yesNumbers === true && yesSpecials === true) {
            var randChoice = Math.floor(Math.random() * 2);
            if (randChoice === 0) {
                password += numbers[randNumber];
                console.log(password);
            }
            else {
                password += specials[randSpecial];
                console.log(password);
            }
        }

        else if (yesLetters === false && yesNumbers === false && yesSpecials === true) {
            password += specials[randSpecial];
            console.log(password);
        }
    }
    document.getElementById("password").value=password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", generate);