function getMin() {
    let minParameter = Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (minParameter > arguments[i]) {
            minParameter = arguments[i];  
        }
    }
    
    return minParameter;
}

getMin(3, 0, -3);