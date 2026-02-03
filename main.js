const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function that chooses a random number from the array above
function RanNum() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
let number = RanNum();
console.log(number); // to see the random number

function ppl_response(response) {
  const respond = document.getElementById("result");
  if (response === number) {
    // console.log("bingo! ur correct!");
    respond.innerHTML = "bingo! ur correct!";
  } else {
    // console.log("oops. try again.");
    respond.innerHTML = "oops. try again.";
  }
}

// get what the user submit and convert it into number then checks if the number if its correct from the function above
const form = document.getElementById("searchForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = document.getElementById("title").value;
  const userAns = Number(value);
  ppl_response(userAns);
});

//when the restart button is clicked it generates a new number from the RanNum function then clears the result messages from before
const restart = document.getElementById("restart");
if (restart) {
  restart.addEventListener("click", function () {
    number = RanNum();
    console.log(number);
    document.getElementById("result").innerHTML = "";
  });
}
