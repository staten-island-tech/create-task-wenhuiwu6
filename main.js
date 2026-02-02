const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const number = numbers[Math.floor(Math.random() * numbers.length)];
console.log(number);

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

const form = document.getElementById("searchForm");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const value = document.getElementById("title").value;
  const userAns = Number(value);
  ppl_response(userAns);
});

function redo() {
  const respond = document.getElementById("restart");
}
