const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const number = numbers[Math.floor(Math.random() * numbers.length)];
console.log(number);

function ppl_response(response) {
  if (response === number) {
    console.log("bingo! ur correct!");
  } else {
    console.log("oops. try again.");
  }
}

// const form = document.getElementById("searchForm");
// form.addEventListener("submit", function(e){

// })
