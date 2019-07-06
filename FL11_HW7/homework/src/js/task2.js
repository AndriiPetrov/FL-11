let isWantToPlay = confirm('Do you want to play a game?');

let startingRangeOfRandom = 9;
let attempts = 3;
let totalPrize = 0;
let possibleStartingPrice = 0;
let RunsOfGame = 1;
let increasedPossiblePrice = 1;

if (!isWantToPlay) {
  alert('You did not become a billionaire, but can.');
} else {
  while (isWantToPlay) {
    if(RunsOfGame !== 1) {
      startingRangeOfRandom += 4;
      increasedPossiblePrice *= 2;
    }

    let randomGeneratedNumber = Math.floor(Math.random() * startingRangeOfRandom);
    console.log(randomGeneratedNumber);

    for(attempts; attempts > 0; attempts--) {
      if (attempts === 3) {
        possibleStartingPrice *= 100;
      } else if (attempts === 2) {
        possibleStartingPrice *= 50;
      } else {
        possibleStartingPrice *= 25;
      }
    }
    
    let userNumber = parseInt( prompt(
      `
        Enter a number of pocket between 0 and ${startingRangeOfRandom} included
        Attempts left: ${attempts}
        Total prize: ${totalPrize}$
        Possible prize on current attempt: ${possibleStartingPrice}$
      `) );

    if (userNumber === randomGeneratedNumber) {
      totalPrize = totalPrize + possibleStartingPrice;
      isWantToPlay = confirm(`Congratulation, you won! Your prize is: ${totalPrize}. Do you want to continue?`);
      RunsOfGame++;
    }
  } 
}