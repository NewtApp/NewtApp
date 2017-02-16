// Set arrays and variables
global = {}
var tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var tmonth = new Array("January", "February", "Marvh", "April", "May", "June", "July", "August", "September", "October", "November", "December");
toggle = "12h"
var nameChecked = false

// Find if it's Morning, afternoon or evening
function getDayTime() {
    var sysdate = new Date();
    var syshour = sysdate.getHours(),
        ap;
    if (syshour < 12) {
        $('.search').attr("placeholder" , "Good Morning, " + global.name.name + "!");
    } else if (syshour < 18) {
        $('.search').attr("placeholder" , "Good Afternoon, " + global.name.name + "!");
    } else {
        $('.search').attr("placeholder" , "Good Evening, " + global.name.name + "!");
    }
}

// Display the time 
function GetClock() {
    if (nameChecked == true) {
        getDayTime();
    }
    toggle = "12h"
    var d = new Date();
    var nhour = d.getHours(),
        nmin = d.getMinutes(),
        ap;
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
    $('#timeText').html(nhour + ":" + nmin);
    $('#dayText').html(ap);
}

// Show month & date
function showMonth() {
    if (nameChecked == true){
        getDayTime();
    }
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

// Check whether getClock is toggled
function whatami() {
  if (toggle == "12h") {
      GetClock()
    }
  else {
      showMonth()
  }
}

// Load the searchbar
function fsearch() {
        setTimeout(function(){
        $("#searchbar").css("visibility","visible");
        $("#searchbar").hide().fadeIn(1000);
    }, 500);
}

// Start loading
window.onload = function(){
    $("#timeToggle").css("visibility","visible");
    $("#timeToggle").hide().fadeIn(1000);
    fsearch();

    // Check if username is saved
    chrome.storage.sync.get("name", function(data){
        global.name = data
        console.log(global.name)
        if(global.name.name == null || global.name.name == undefined) {
        var name = prompt("What is your name?");
        chrome.storage.sync.set({'name': name})
        chrome.storage.sync.get("name", function(data){
            global.name = data
        })};
        console.log("Hello, " + global.name.name + "!")
        getDayTime();
        nameChecked = true;
    });

    // If time is clicked, change to date
    $("#timeToggle").click(function() {
        if (toggle == "12h") {
            showMonth();
        }
        else {
            GetClock();
        }
    });

    $("#searchicon").click(function() {
        $(".search").attr('disabled', false)
        $(".search").focus();
    });

    GetClock();

    $(".search").focus(function(event) {
        $(".inputline").hide().fadeIn(500);
    });

    $(".search").focusout(function(event) {
        $(".inputline").fadeOut(500);
    });

    // Update time/date every second
    setInterval(whatami, 1000);
}