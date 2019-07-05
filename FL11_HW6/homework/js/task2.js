// Your code goes here
let firstTriangleSide = parseFloat( prompt('Insert first lenght of Triangle side', '') );
let secondTriangleSide = parseFloat( prompt('Insert second lenght of Triangle side', '') );
let thirdTriangleSide = parseFloat( prompt('Insert third lenght of Triangle side', '') );

if (
    firstTriangleSide + secondTriangleSide < thirdTriangleSide ||
    firstTriangleSide + thirdTriangleSide < secondTriangleSide ||
    secondTriangleSide + thirdTriangleSide < firstTriangleSide
) {
    console.log('Triangle doesn\'t exist');
} else if (
    firstTriangleSide === secondTriangleSide &&
    thirdTriangleSide === secondTriangleSide && 
    firstTriangleSide === thirdTriangleSide
) {
    console.log('Equivalent triangle');
} else if (
    firstTriangleSide === secondTriangleSide ||
    secondTriangleSide === thirdTriangleSide ||
    firstTriangleSide === thirdTriangleSide
) {
    console.log('Isosceles triangle');
} else {
    console.log('Normal triangle');
}