let isWantToPlay = confirm('Do you want to play a game?');

let RunsOfGame = 1;
let startingRangeOfRandom
let attempts;
let totalPrize;
let possibleStartingPrice;
let increasedPrice;

const maxAttempts = 3;
const twoAttempts = 2;
const initialRangeNumber = 9;
const increaseRangeNumber = 4;
const increasePriceByTwo = 2;
const startingMaxPrice = 100;
const startingHalfPrice = 50;
const startingQuarterPrice = 25;

if (!isWantToPlay) {
  alert('You did not become a billionaire, but can.');
} else {
  while (isWantToPlay) {
    if (RunsOfGame === 1) {
      startingRangeOfRandom = initialRangeNumber;
      attempts = maxAttempts;
      totalPrize = 0;
      possibleStartingPrice = 1;
      increasedPrice = 1;
    } else {
      startingRangeOfRandom += increaseRangeNumber;
      increasedPrice *= increasePriceByTwo;
      attempts = maxAttempts;
    }

    let randomGeneratedNumber = Math.floor(Math.random() * startingRangeOfRandom);
    // console.log(randomGeneratedNumber); // For testing purposes

    for (attempts; attempts > 0; attempts--) {
      if (attempts === maxAttempts) {
        possibleStartingPrice = startingMaxPrice * increasedPrice;
      } else if (attempts === twoAttempts) {
        possibleStartingPrice = startingHalfPrice * increasedPrice;
      } else {
        possibleStartingPrice = startingQuarterPrice * increasedPrice;
      }

      let userNumber = parseInt( prompt(
`Enter a number of pocket between 0 and ${startingRangeOfRandom - 1} included 
Attempts left: ${attempts}
Total prize: ${totalPrize}$
Possible prize on current attempt: ${possibleStartingPrice}$
`) 
);
      
      if (userNumber === randomGeneratedNumber) {
        totalPrize = totalPrize + possibleStartingPrice;
        isWantToPlay = confirm(`Congratulation, you won! Your prize is: ${totalPrize}. Do you want to continue?`);
        RunsOfGame++;
        break;
      }
    }

    if (attempts === 0 || isWantToPlay === false) {
      alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);
      isWantToPlay = confirm('Do you want to play again?');
      RunsOfGame = 1;
    }
  } 
}