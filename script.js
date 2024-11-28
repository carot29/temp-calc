// f = c * 9 / 5 + 32

document.getElementById("btn").addEventListener("click", calculate);

function calculate() {
  //input
  let avg = Number(document.getElementById("inp1").value);
  //prosess
  let awns = (avg - 32) * (5 / 9);
  awns = Math.round(awns);
  //output
  document.getElementById("out").innerHTML = awns;
  document.getElementById("inp1").value = null;
  document.getElementById("btn").style.backgroundColor = `#26d978`;
  document.getElementById(
    "img1"
  ).innerHTML = `<img class="thermometer" src="img/151896-004-5A5C10BD.webp" alt="pic" />`;
  document.getElementById("lnk").href = `https://www.google.com`;
}
