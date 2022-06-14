const btnStop = document.querySelector("#btnStop");
const begin = document.querySelector("#begin");
const lengh = document.querySelector("#length");

//see the console

async function Funfor(time) {
  let variable = 0;

  var accumulate = [];

  btnStop.addEventListener("click", () => {
    variable++;
  });
  lengh.addEventListener("click", () => {
    console.log(accumulate);
  });

  for (var i = 0; i < 40; i++) {
    accumulate.push(i);
    console.log("number ", i);
    await new Promise((r) => setTimeout(r, 1000));
    if (variable > 0) {
      break;
    }
  }
  var accumulate;

  variable--;
}

begin.addEventListener("click", () => {
  Funfor(1000);
});
