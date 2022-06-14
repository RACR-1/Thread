const btnStop = document.querySelector("#btnStop");
const begin = document.querySelector("#begin");
const lengh = document.querySelector("#length");
const body = document.querySelector("#App");
/* 
//see the console

async function funFor() {
  var acumular = [];
  let stopl = 0;
  btnStop.addEventListener("click", () => {
    stopl = 1;
  });
  lengh.addEventListener("click", () => {
    console.log(acumular);
  });

  for (var i = 0; i < 50; i++) {
    console.log(i);
    acumular.push(i);
    if (stopl > 0) {
      break;
    }
    await new Promise((r) => setTimeout(r, 900));
  }
  stopl = 0;
  acumular = "";
  acumular = [];
  return;
}
begin.addEventListener("click", () => {
  funFor();
}); */

function sleeptime(time) {
  new Promise((r) => setTimeout(r, time));
}

async function putTxt() {
  const h = document.createElement("H4");
  h.textContent = "sla";
  body.appendChild(h);
  for (var i = 0; i < 50; i++) {
    h.textContent = i;
    await new Promise((r) => setTimeout(r, 500));
  }
}

function ativar() {
  btnStop.addEventListener("click", () => {
    putTxt();
    console.log("oi");
  });
}

begin.addEventListener("click", () => {
  ativar();
});
