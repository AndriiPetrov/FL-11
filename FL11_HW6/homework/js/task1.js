// Coordinates of 3 points
let a1 = parseFloat( prompt('Insert your coordinate x of point A', '') );
let a2 = parseFloat( prompt('Insert your coordinate y of point A', '') );

let b1 = parseFloat( prompt('Insert your coordinate x of point B', '') );
let b2 = parseFloat( prompt('Insert your coordinate y of point B', '') );

let c1 = parseFloat( prompt('Insert your cooddinate x of point C', '') );
let c2 = parseFloat( prompt('Insert your coordinate y of point C', '') );

if (
    isNaN(a1) || 
    isNaN(a2) || 
    isNaN(b1) || 
    isNaN(b2) || 
    isNaN(c1) || 
    isNaN(c2)
) {
    console.log(false);
} else {
    const Two = 2;

    let middleCoordinateX = (a1 + b1) / Two;
    let middleCoordinateY = (a2 + b2) / Two;

    if (middleCoordinateX === c1 && middleCoordinateY === c2) {
        console.log(true);
    } else {
        console.log(false);
    }
}