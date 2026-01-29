const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  // The maximum is exclusive and the minimum is inclusive
}
const number = getRandomInt(1, 11);
// console.log(number);

const response = 3;

function ppl_response(response) {
  if (response === number) {
    console.log("bingo! ur correct!");
  }
  if (response != number) {
    console.log("oops. try again.");
  }
}
