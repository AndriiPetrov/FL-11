function pipe(argumentNumber) {
    for (let i = 1; i < arguments.length; i++) {
        argumentNumber = arguments[i](argumentNumber);
    }

    return argumentNumber;
}

function addOne(x) {
    return x + 1;
}

pipe(1, addOne);
pipe(1, addOne, addOne);