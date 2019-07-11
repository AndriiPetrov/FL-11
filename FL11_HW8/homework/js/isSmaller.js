function isBigger(firstNumber, secondNumber) {
    return firstNumber > secondNumber;
}

function isSmaller(firstNumber, secondNumber) {
    return !isBigger(firstNumber, secondNumber);
}

isSmaller(5, -1);