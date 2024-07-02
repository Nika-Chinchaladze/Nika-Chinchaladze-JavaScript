// ============================= NUMBER ALGORITHM SECTION & DOM ============================= //
const checkNumber = (value) => {
    const number = parseInt(value);
    if (number == value) {
        if (number > 7) {
            return "Hello";
        }
        return "Number is less than 7";
    }
    throw new Error("Valid number is not provided!");
}

const displayNumberAnswer = (value) => {
    const finalNumberAnswer = document.getElementById("number-answer");
    finalNumberAnswer.hidden = false;
    finalNumberAnswer.textContent = value;
    return;
}

const checkNumberForm = document.getElementById("check-number-form");
checkNumberForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userNumberInput = document.getElementById("numberInput").value.trim();
    let numberResult;
    try {
        numberResult = checkNumber(userNumberInput);
    } catch (error) {
        numberResult = error.message;
    }
    displayNumberAnswer(numberResult);
});


// ============================= NAME ALGORITHM SECTION & DOM ============================= //
const checkName = (value) => {
    if (value === "John") {
        return "Hello, John";
    }
    return "There is no such name";
}

const displayNameAnswer = (value) => {
    const finalNameAnswer = document.getElementById("name-answer");
    finalNameAnswer.hidden = false;
    finalNameAnswer.textContent = value;
    return;
}

const checkNameForm = document.getElementById("check-name-form");
checkNameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userNameInput = document.getElementById("nameInput").value.trim();
    const nameResult = checkName(userNameInput);
    displayNameAnswer(nameResult);
});


// ============================= ARRAY ALGORITHM SECTION & DOM ============================= //
const transformIntoArray = (value) => {
    const countLeftBracket = value.split("[").length - 1;
    const countRightBracket = value.split("]").length - 1;
    if (
        value[0] === "[" &&
        value[value.length - 1] === "]" &&
        countLeftBracket === 1 &&
        countRightBracket === 1
    ) {
        const firstVersion = value.replaceAll("[", "");
        const secondVersion = firstVersion.replaceAll("]", "");
        const finalVersion = secondVersion.split(",");
        
        const isAllNumeric = (el) => typeof parseInt(el) === "number" && !isNaN(parseInt(el));
        if (finalVersion.every(isAllNumeric)) {
            return finalVersion;
        }
    }
    return "Please provide array of Numeric values as shown in the example!";
}

const getThreeMultiplies = (value) => {
    const result = value.filter((element) => element % 3 === 0);
    return result;
}

const displayArrayAnswer = (value) => {
    const finalArrayAnswer = document.getElementById("array-answer");
    finalArrayAnswer.hidden = false;
    finalArrayAnswer.textContent = value.toString();
}

const checkArray = (value) => {
    const myResult = transformIntoArray(value);
    if (typeof myResult === "object") {
        const myArray = getThreeMultiplies(myResult);
        displayArrayAnswer(`[${myArray}]`);
        return;
    }
    displayArrayAnswer(myResult);
}

const checkArrayForm = document.getElementById("check-array-form");
checkArrayForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userArrayInput = document.getElementById("arrayInput").value;
    checkArray(userArrayInput);
});

// let a = [((())()(())];