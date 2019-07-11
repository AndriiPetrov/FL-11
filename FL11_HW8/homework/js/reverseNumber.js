function reverseNumber(number) {
    var reverseNumber;
    var iteration = 0;

    for (; number > 0; ) {
        if (iteration === 0) {
            reverseNumber = number % 10
        } else {
            reverseNumber = reverseNumber * 10 + number % 10;
        }
        number /= 10;
    }

    return reverseNumber;
}

reverseNumber(123);