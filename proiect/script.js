const zileEl = document.getElementById("zile");
const oreEl = document.getElementById("ore");
const minuteEL = document.getElementById("minute");
const secundeEl = document.getElementById("secunde");

const newYears = "1Jan 2023";
function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const totalSeconds = (newYearsDate - currentDate) / 1000;

  const zile = Math.floor(totalSeconds / 3600 / 24);
  const ore = Math.floor(totalSeconds / 3600) % 24;
  const minute = Math.floor(totalSeconds / 60) % 60;
  const secunde = Math.floor(totalSeconds) % 60;

  console.log(zile, ore, minute, secunde);
  zileEl.innerHTML = zile;
  oreEl.innerHTML = ore;
  minuteEL.innerHTML = minute;
  secundeEl.innerHTML = secunde;
}
function formatTimp(time) {
  return time < 10 ? `0${time}` : time;
}

//initial1
countdown();
setInterval(countdown, 1000) / 1000;
