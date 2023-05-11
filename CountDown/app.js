function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function countDown(i) {
  while (i > 0) {
    document.getElementById("printResult").innerHTML = i;
    i--;
    await sleep(1000);
  }
  return "counter finished:";
}

function timerRoll() {
  let ms = document.getElementById("timeAmount").value;
  countDown(ms).then((msg) => {
    document.getElementById("printResult").innerHTML = msg;
  });
}
