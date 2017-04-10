var wp = new Array("wallpaper1.jpg", "wallpaper2.jpg", "wallpaper3.jpg", "wallpaper4.jpg", "wallpaper5.jpg", "wallpaper6.jpg", "wallpaper7.jpg", "wallpaper8.jpg", "wallpaper9.jpg", "wallpaper10.jpg", "wallpaper11.jpg", "wallpaper12.jpg", "wallpaper13.jpg", "wallpaper14.jpg", "wallpaper15.jpg")
toggle = "12h"
var rwp = Math.floor((Math.random() * 15) + 1) - 1;

window.onload = function() {

$('#response').bind("enterKey",function(e){
    var name = $('#response').val()
    chrome.storage.sync.set({'name': name})
    $('#container').fadeOut(750)
    setTimeout(function(){
        $( location ).attr("href", "/index.html");
    }, 750);
});

function setBackground() {
    var xhr = new XMLHttpRequest();
    var file = "https://unsplash.com";
 
    xhr.open('HEAD', file, true);
    xhr.send();
     
    xhr.addEventListener("readystatechange", processRequest, false);
 
    function processRequest(e) {
      if (xhr.readyState == 4) {
        if (xhr.status >= 200 && xhr.status < 304) {
            $('#background').hide().css("background", "#757575 url('https://source.unsplash.com/collection/402984/1920x1080/daily') no-repeat center center fixed").css("filter","brightness(90%)").fadeIn(1500);
        } else {
            $('#background').hide().css("background","#757575 url('/assets/" + wp[rwp] + "') no-repeat center center fixed").fadeIn(500);
        }
      }
    }
}

$('#response').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});

    $('#main').hide()
    setBackground()
    $('#background').hide().fadeIn(1000)
    setTimeout(function(){
        $('#main').html("Hello.").fadeIn(1000)
        setTimeout(function(){
            $('#main').fadeOut(1000)
            setTimeout(function(){
                $('#main').hide().html("What's your name?").fadeIn(1000)
                setTimeout(function(){
                    $('#container').animate({'margin-top':'40vh'}, 1500)
                        setTimeout(function(){
                            $('#inputline').fadeIn(1750);
                            $('#response').attr('disabled',false)
                        }, 1000);
                }, 1000);
            }, 1000);
        }, 1500);
    }, 1000);
}
