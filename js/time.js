var tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var tmonth = new Array("January", "February", "Marvh", "April", "May", "June", "July", "August", "September", "October", "November", "December");
toggle = "12h"
//var secondcount = 0

function GetClock() {
    toggle = "12h"
    var d = new Date();
    var nhour = d.getHours(),
        nmin = d.getMinutes(),
        ap;
    //secondcount = secondcount + 1;
    //if (secondcount == 3) {$("body").fadeIn(900);}
    if (nhour == 0) {
        ap = " AM";
        nhour = 12;
    } else if (nhour < 12) {
        ap = " AM";
    } else if (nhour == 12) {
        ap = " PM";
    } else if (nhour > 12) {
        ap = " PM";
        nhour -= 12;
    }

    if (nmin <= 9) {
        nmin = "0" + nmin;
    }
    /*getDayTime();*/
    $('#timeText').html(/*tday[nday] + ","" */nhour + ":" + nmin);
    $('#dayText').html(ap);
}

function get24h() {
    toggle = "24h"
    var d = new Date();
    var nday = d.getDay();
    var day = d.getDate();
    var nmonth = d.getMonth();
    var month = nmonth + 1
    var tfhHours = d.getHours();
    var tfhMins = d.getMinutes();
    var tfhMinutes = ("0" + tfhMins).slice(-2);
    $('#timeText').html(day);
    $('#dayText').html(tmonth[nmonth]);
}

function whatami() {
  if (toggle == "12h") {
      GetClock()
    }
  else {
      get24h()
  }
}

 window.onload = function() {
  GetClock()
  setInterval(whatami, 1000);
}
$(document).ready(function(){
  $("#timeToggle").click(function() {
    if (toggle == "12h") {
      get24h();
    }
    else {
      GetClock();
    }
  });
});


/*function getDayTime() {
    var sysdate = new Date();
    var syshour = sysdate.getHours(),
        ap;
    if (syshour < 12) {
        $('#daytime').html(" Morning,");
    } else if (syshour < 18) {
        $('#daytime').html(" Afternoon,");
    } else {
        $('#daytime').html(" Evening,");
    }
} */

/*var date = new Date();
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
};*/
