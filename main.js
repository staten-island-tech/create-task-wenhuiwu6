const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function RanNum() {
  return numbers[Math.floor(Math.random() * numbers.length)];
}
let number = RanNum();
console.log(number);
function ppl_response(response) {
  const respond = document.getElementById("result");
  if (response === number) {
    respond.innerHTML = "bingo! ur correct!";
  } else {
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

const restart = document.getElementById("restart");
if (restart) {
  restart.addEventListener("click", function () {
    number = RanNum();
    console.log(number);
    document.getElementById("result").innerHTML = "";
  });
}
