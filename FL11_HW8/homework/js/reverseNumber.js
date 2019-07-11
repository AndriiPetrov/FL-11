function reverseNumber(number) {
    var reverseNumber;
    var iteration = 0;

    while (number !== 0) {
        if (iteration === 0) {
            reverseNumber = number % 10;
        } else {
            reverseNumber = reverseNumber * 10 + number % 10;
        }
        parseInt(number /= 10);
        iteration++
    }

    return reverseNumber;
}

reverseNumber(123);
reverseNumber(-456);
reverseNumber(10000);