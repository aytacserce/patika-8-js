let getName = prompt("Adınız:");
let printName = document.querySelector("#myName");
let printDate = document.querySelector("#myClock");
printName.innerHTML = `${getName}`;

const dateTime = new Date();
const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let currDay = weekday[dateTime.getUTCDay()];

setInterval(currTime, 1000);
function currTime() {
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = "AM";

  if (hour > 12) {
    hour -= 12;
    am_pm = "PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = "AM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + am_pm;

  printDate.innerHTML = `${currentTime} ${currDay}`;
}
currTime();
