// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input


function generate(yesLowers, yesUppers, yesNumbers, yesSpecials) {

    //arrays of letters, numbers, and specials
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "'", ")", "(", "+", "-", ",", "/", ">", "<", "{", "}", "[", "]", "~"];
    var password = [];
    var errorMessage = "Please enter a number between 8 - 128";
    var noBoxesChecked = "Please select at least one of the four boxes";

    //functions
    function findNumbers() {
        password += numbers[randNumber];
    }

    function findSpecials() {
        password += specials[randSpecial];
    }

    function findLowers() {
        password += letters[randLetter];
    }

    function findUppers() {
        password += (letters[randLetter].toUpperCase());
    }

    //checkbox event listeners
    if (document.getElementById("lowersbox").checked) {
        yesLowers = true;
    }
    else {
        yesLowers = false;
    }
    if (document.getElementById("uppersbox").checked) {
        yesUppers = true;
    }
    else {
        yesUppers = false;
    }
    if (document.getElementById("numbersbox").checked) {
        yesNumbers = true;
    }
    else {
        yesNumbers = false;
    }
    if (document.getElementById("specialsbox").checked) {
        yesSpecials = true;
    }
    else {
        yesSpecials = false;
    }

    //textbox event listener
    var numchar = parseInt(document.getElementById('characterAmount').value);

    //control input error messages
    if (numchar <= 7 || numchar > 128) {
        document.getElementById("password").value = errorMessage;
        return;
    }
    if (isNaN(numchar)) {
        document.getElementById("password").value = errorMessage;
        return;
    }

    if (yesLowers === false && yesUppers === false && yesNumbers === false && yesSpecials === false) {
        document.getElementById("password").value = noBoxesChecked;
        return;
    }

    //Main logic
    for (var i = 0; i < numchar; i++) {
        var randLetter = Math.floor(Math.random() * letters.length);
        var randNumber = Math.floor(Math.random() * numbers.length);
        var randSpecial = Math.floor(Math.random() * specials.length);

        if (yesLowers === true && yesUppers === false && yesNumbers === false && yesSpecials === false) {
            findLowers();
        }
        else if (yesLowers === true && yesUppers === false && yesNumbers === true && yesSpecials === false) {
            var randChoice = Math.floor(Math.random() * 2);
            if (randChoice === 0) {
                findLowers();
            }
            else {
                findNumbers();
            }
        }
        else if (yesLowers === true && yesUppers === false && yesNumbers === false && yesSpecials === true) {
            var randChoice = Math.floor(Math.random() * 2);
            if (randChoice === 0) {
                findLowers();
            }
            else {
                findSpecials();
            }
        }
        else if (yesLowers === true && yesUppers === false && yesNumbers === true && yesSpecials === true) {
            var randChoice = Math.floor(Math.random() * 3);
            if (randChoice === 0) {
                findLowers();
            }
            else if (randChoice === 1) {
                findNumbers();
            }
            else {
                findSpecials();

            }
        }
        else if (yesLowers === false && yesUppers === false && yesNumbers === true && yesSpecials === false) {
            findNumbers();
        }
        else if (yesLowers === false && yesUppers === false && yesNumbers === true && yesSpecials === true) {
            var randChoice = Math.floor(Math.random() * 2);
            if (randChoice === 0) {
                findNumbers();
            }
            else {
                findSpecials();
            }
        }
        else if (yesLowers === false && yesUppers === false && yesNumbers === false && yesSpecials === true) {
            findSpecials();
        }
        else if (yesLowers === true && yesUppers === true && yesNumbers === false && yesSpecials === false) {
            var randChoice = Math.floor(Math.random() * 2);
            if (randChoice === 0) {
                findLowers();
            } else {
                findUppers();
            }
        }
        else if (yesLowers === true && yesUppers === true && yesNumbers === true && yesSpecials === false) {
            var randChoice = Math.floor(Math.random() * 3);
            if (randChoice === 0) {
                findLowers();
            }
            else if (randChoice === 1) {
                findNumbers();
            }
            else {
                findUppers();
            }
        }
        else if (yesLowers === true && yesUppers === true && yesNumbers === false && yesSpecials === true) {
            var randChoice = Math.floor(Math.random() * 3);
            if (randChoice === 0) {
                findLowers();
            }
            else if (randChoice === 1) {
                findUppers();
            }
            else {
                findSpecials();
            }
        }
        else if (yesLowers === true && yesUppers === true && yesNumbers === true && yesSpecials === true) {
            var randChoice = Math.floor(Math.random() * 4);
            if (randChoice === 0) {
                findLowers();
            }
            else if (randChoice === 1) {
                findNumbers();
            }
            else if (randChoice === 2) {
                findUppers();
            }
            else {
                findSpecials();

            }
        }
        else if (yesLowers === false && yesUppers === true && yesNumbers === true && yesSpecials === false) {
            var randChoice = Math.floor(Math.random() * 2);
            if (randChoice === 0) {
                findUppers();
            }
            else {
                findNumbers();
            }
        }
        else if (yesLowers === false && yesUppers === true && yesNumbers === true && yesSpecials === true) {
            var randChoice = Math.floor(Math.random() * 3);
            if (randChoice === 0) {
                findNumbers();
            }
            else if (randChoice === 1) {
                findUppers();
            }
            else {
                findSpecials();
            }
        }
        else if (yesLowers === false && yesUppers === true && yesNumbers === false && yesSpecials === true) {
            var randChoice = Math.floor(Math.random() * 2);
            if (randChoice === 0) {
                findSpecials();
            }
            else {
                findUppers();
            }
        }
        else if (yesLowers === false && yesUppers === true && yesNumbers === false && yesSpecials === false) {
            findUppers();
        }
    }

    //Tests
    if (yesLowers === true) {
        let testCount = 0;
        for (let i = 0; i < letters.length; i++) {
            var testLowers = password.includes(letters[i])
            if (testLowers === true) {
                testCount++;
            }
        }
        if (testCount === 0) {
            generate(yesLowers, yesUppers, yesNumbers, yesSpecials);
            return;
        }
    }
    if (yesUppers === true) {
        let testCount = 0;
        for (let i = 0; i < letters.length; i++) {
            var testUppers = password.includes(letters[i].charAt(0).toUpperCase())
            if (testUppers === true) {
                testCount++;
            }
        }
        if (testCount === 0) {
            generate(yesLowers, yesUppers, yesNumbers, yesSpecials);
            return;
        
        }
    }
    if (yesNumbers === true) {
        let testCount = 0;
        for (let i = 0; i < numbers.length; i++) {
            var testNumbers = password.includes(numbers[i]);
            if (testNumbers === true) {
                testCount++;
            }
        }
        if (testCount === 0) {
            generate(yesLowers, yesUppers, yesNumbers, yesSpecials);
            return;
        }
            
    
    }
    if (yesSpecials === true) {
        let testCount = 0;
        for (let i = 0; i < specials.length; i++) {
            var testSpecials = password.includes(specials[i]);
            if (testSpecials === true) {
                testCount++;
            }
        }
        if (testCount === 0) {
            generate(yesLowers, yesUppers, yesNumbers, yesSpecials);
            return;
        }
    }

    //input into text box
    document.getElementById("password").value = password;

}

//Event listener for Generate Password Button
generateBtn.addEventListener("click", generate);