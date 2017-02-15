var tday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");var tmonth=new Array("January","February","March","April","May","June","July","August","September","October","November","December");toggle="12h"
function GetClock(){toggle="12h"
var d=new Date();var nhour=d.getHours(),nmin=d.getMinutes(),ap;if(nhour==0){ap=" AM";nhour=12}else if(nhour<12){ap=" AM"}else if(nhour==12){ap=" PM"}else if(nhour>12){ap=" PM";nhour-=12}
if(nmin<=9){nmin="0"+nmin}
$('#timeText').html(nhour+":"+nmin);$('#dayText').html(ap)}
function get24h(){toggle="24h"
var d=new Date();var nday=d.getDay();var tfhHours=d.getHours();var tfhMins=d.getMinutes();var tfhMinutes=("0"+tfhMins).slice(-2);$('#timeText').html(tfhHours+":"+tfhMinutes);$('#dayText').html(tday[nday])}
function whatami(){if(toggle=="12h"){GetClock()}
else{get24h()}}
window.onload=function(){GetClock()
setInterval(whatami,1000)}
$(document).ready(function(){$("#timeToggle").click(function(){if(toggle=="12h"){get24h()}
else{GetClock()}})})