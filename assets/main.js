// ============================= NUMBER ALGORITHM SECTION & DOM ============================= //
const checkNumber = (value) => {
    const number = parseInt(value.trim());
    if (number == value.trim()) {
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
    const finalAnswer = document.getElementById("number-answer");
    finalAnswer.hidden = false;
    finalAnswer.textContent = value;
}

const checkNumberForm = document.getElementById("check-number-form");

checkNumberForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const userNumberInput = document.getElementById("numberInput").value;
    let result;
    try {
        result = checkHigherSeven(userNumberInput);
    } catch (error) {
        result = error.message;
    }
    displayNumberAnswer(result);
});


// ============================= NAME ALGORITHM SECTION ============================= //



// ============================= ARRAY ALGORITHM SECTION ============================= //
