// Set arrays and variables
global = {}
var tday = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
var tmonth = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
var wp = new Array("wallpaper1.jpg", "wallpaper2.jpg", "wallpaper3.jpg", "wallpaper4.jpg", "wallpaper5.jpg", "wallpaper6.jpg", "wallpaper7.jpg", "wallpaper8.jpg", "wallpaper9.jpg", "wallpaper10.jpg", "wallpaper11.jpg", "wallpaper12.jpg", "wallpaper13.jpg", "wallpaper14.jpg", "wallpaper15.jpg")
toggle = "12h"
var rwp = Math.floor((Math.random() * 15) + 1) - 1;
console.log(rwp)
var nameChecked = false
var wHeight = window.innerHeight
var wWidth = window.innerWidth

// Check for internet connection

function setBackground() {
    var xhr = new XMLHttpRequest();
    var file = "https://www.pexels.com";
 
    xhr.open('HEAD', file, true);
    xhr.send();
     
    xhr.addEventListener("readystatechange", processRequest, false);
 
    function processRequest(e) {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 304) {
            $('#background').hide().css("background", "#757575 url('https://source.unsplash.com/category/nature/1920x1080/daily') no-repeat center center fixed").fadeIn(1500);
        } else {
            $('#background').hide().css("background","#757575 url('/assets/" + wp[rwp] + "') no-repeat center center fixed").fadeIn(500);
        }
      }
    }
}

// Find if it's Morning, afternoon or evening
function getDayTime() {
    var sysdate = new Date();
    var syshour = sysdate.getHours(),
        ap;
    if (syshour < 12) {
        $('.search').attr("placeholder" , "Good morning, " + global.name.name + ".");
    } else if (syshour < 18) {
        $('.search').attr("placeholder" , "Good afternoon, " + global.name.name + ".");
    } else {
        $('.search').attr("placeholder" , "Good evening, " + global.name.name + ".");
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


var something = function() {
    return 2;
}

// Start loading
window.onload = function(){
    setBackground();
    $("#timeToggle").css("visibility","visible");
    $("#timeToggle").hide().fadeIn(1000);
    setTimeout(function(){
        $("#searchbar").css("visibility","visible");
        $("#searchbar").hide().fadeIn(1500);
    }, 500);

    // Check if username is saved
    chrome.storage.sync.get("name", function(data){
        global.name = data
        console.log(global.name)
        if(global.name.name == null || global.name.name == undefined) {
            $( location ).attr("href", "/register.html");
        };
        console.log("Hello, " + global.name.name + "!")
        getDayTime();
        nameChecked = true;
    });

    GetClock();

    // If time is clicked, change to date
    $("#timeToggle").click(function() {
        if (toggle == "12h") {
            showMonth();
            $("#timeToggle").finish().hide().fadeIn(500);
        }
        else {
            GetClock();
            $("#timeToggle").finish().hide().fadeIn(500);
        }
    });

    $("#searchicon").click(function() {
    $(".search").focus();
    });

    $(".search").focus(function(event) {
        $(".inputline").css({"visibility":"visible"});
        $(".inputline").stop().hide().fadeIn(500);
    });

    $(".search").focusout(function(event) {
        $(".inputline").finish().fadeOut(500, function () {
            $(".inputline").css("display", "block");
            $(".inputline").css("visibility", "hidden");
        })});

    // Update time/date every second
    setInterval(whatami, 1000);
}

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("navMenu").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("navMenu").style.width = "0";
}

$('.hover-me').mouseover(function(){
    console.log("TRIGGERED!")
});
$("#lmenu").mouseleave(function(){ $(this).hide(); })

