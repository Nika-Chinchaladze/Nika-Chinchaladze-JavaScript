// ============================= NUMBER ALGORITHM SECTION & DOM ============================= //
const checkNumber = (value) => {
    const number = parseInt(value);
    if (number == value) {
        return number;
    }
    return false;
}

const checkHigherSeven = (value) => {
    const number = checkNumber(value);
    if (number && number > 7) {
        return "Hello";
    } else if (number && number < 7) {
        return "Number is less than 7";
    }
    else {
        throw new Error("Valid number is not provided!");
    }
}

const displayNumberAnswer = (value) => {
    const finalNumberAnswer = document.getElementById("number-answer");
    finalNumberAnswer.hidden = false;
    finalNumberAnswer.textContent = value;
}

const checkNumberForm = document.getElementById("check-number-form");
checkNumberForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userNumberInput = document.getElementById("numberInput").value.trim();
    let numberResult;
    try {
        numberResult = checkHigherSeven(userNumberInput);
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
}

const checkNameForm = document.getElementById("check-name-form");
checkNameForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userNameInput = document.getElementById("nameInput").value.trim();
    const nameResult = checkName(userNameInput);
    displayNameAnswer(nameResult);
});


// ============================= ARRAY ALGORITHM SECTION ============================= //
