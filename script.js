var generateBtn = document.querySelector("#generate");

function generate() {

    //arrays of letters, numbers, and specials
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var specials = ["!", "@", "#", "$", "%", "^", "&", "*", "'", ")", "(", "+", "-", ",", "/", ">", "<", "{", "}", "[", "]", "~"];

    //checkbox event listeners
    var totalCharacterTypes = 0;
    if (document.getElementById("lowersbox").checked) {
        yesLowers = true;
        totalCharacterTypes = totalCharacterTypes + 1;
    }
    else {
        yesLowers = false;
    }
    if (document.getElementById("uppersbox").checked) {
        yesUppers = true;
        totalCharacterTypes = totalCharacterTypes + 1;
    }
    else {
        yesUppers = false;
    }
    if (document.getElementById("numbersbox").checked) {
        yesNumbers = true;
        totalCharacterTypes = totalCharacterTypes + 1;
    }
    else {
        yesNumbers = false;
    }
    if (document.getElementById("specialsbox").checked) {
        yesSpecials = true;
        totalCharacterTypes = totalCharacterTypes + 1;
    }
    else {
        yesSpecials = false;
    }

    //textbox event listener
    var numchar = parseInt(document.getElementById('characterAmount').value);

    //control input error messages
    var errorMessage = "Please enter a number between 8 - 128";
    var noBoxesChecked = "Please select at least one of the four boxes";
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

    //Functions for creating password
    var password = "";
    var functionArray = [findUppers, findLowers, findNumbers, findSpecials];

    function findNumbers() {
        var randNumber = Math.floor(Math.random() * numbers.length);
        password += numbers[randNumber];
    }
    function findSpecials() {
        var randSpecial = Math.floor(Math.random() * specials.length);
        password += specials[randSpecial];
    }
    function findLowers() {
        var randLetter = Math.floor(Math.random() * letters.length);
        password += letters[randLetter];
    }
    function findUppers() {
        var randLetter = Math.floor(Math.random() * letters.length);
        password += (letters[randLetter].toUpperCase());
    }
    function createPassword(x, y) {
        if (x === false) {
            for (let i = 0; i < functionArray.length; i++) {
                if (functionArray[i] === y) {
                    functionArray.splice(i, 1);
                }
            }
        }
    }
    
    //Executing password functions
    createPassword(yesLowers, findLowers);
    createPassword(yesUppers, findUppers);
    createPassword(yesSpecials, findSpecials);
    createPassword(yesNumbers, findNumbers);

    for (let i = 0; i < numchar; i++) {
        var randChoice = Math.floor(Math.random() * totalCharacterTypes);
        functionArray[randChoice]();
    }

    //Test Function
    function testPassword(character, array, password) {
        if (character === true) {
            let testCount = 0;
            for (let i = 0; i < array.length; i++) {
                var testLowers = password.includes(array[i])
                if (testLowers === true) {
                    testCount++;
                }
            }
            if (testCount === 0) {
                return false;
            } 
        }
    }

    //Execute Test Function
    if (testPassword(yesLowers, letters, password) === false) {
        generate(yesLowers, yesUppers, yesNumbers, yesSpecials);
        return;
    };
    if (testPassword(yesUppers, uppercase, password) === false) {
        generate(yesLowers, yesUppers, yesNumbers, yesSpecials);
        return;
    };
    if (testPassword(yesNumbers, numbers, password) === false) {
        generate(yesLowers, yesUppers, yesNumbers, yesSpecials);
        return;
    }
    if (testPassword(yesSpecials, specials, password) === false) {
        generate(yesLowers, yesUppers, yesNumbers, yesSpecials);
        return; 
    }

    //input into text box
    document.getElementById("password").value = password;
}

//Event listener for Generate Password Button
generateBtn.addEventListener("click", generate);