var date = new Date();
var hours = date.getHours();
var intminutes = date.getMinutes();
var minutes = ("0" + intminutes).slice(-2);
var day = date.getDay();
var dayArray = new Array(7);
dayArray[0] = "Sunday";
dayArray[1] = "Monday";
dayArray[2] = "Tuesday";
dayArray[3] = "Wednesday";
dayArray[4] = "Thursday";
dayArray[5] = "Friday";
dayArray[6] = "Saturday";
var time = hours + ":" + minutes;

function setTime() {
  console.log("The time is: " + time + ", printing it now.");
  $('a#timeText').html(time);
  var day = dayArray[date.getDay()];
  console.log("The day is: " + day + ", printing it now.")
  $('#dayText').html(day);
}

window.onload = function() {
  setTime();
};
