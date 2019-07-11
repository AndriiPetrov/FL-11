function isInteger(number) {
    if (number === Math.floor(number)) {
        return true;
    }
    return false;
}

isInteger(5);