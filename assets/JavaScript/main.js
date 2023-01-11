const number = document.getElementById("number");
const submit = document.getElementById("submit");
const outPut = document.getElementById("outPut");

submit.addEventListener("click", () => {
  const outPutNumber = 2023 - number.value;
  outPut.innerHTML = outPutNumber;
});
