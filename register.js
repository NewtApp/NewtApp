var wp = new Array("wallpaper1.jpg", "wallpaper2.jpg", "wallpaper3.jpg", "wallpaper4.jpg", "wallpaper5.jpg", "wallpaper6.jpg", "wallpaper7.jpg", "wallpaper8.jpg", "wallpaper9.jpg", "wallpaper10.jpg", "wallpaper11.jpg", "wallpaper12.jpg", "wallpaper13.jpg", "wallpaper14.jpg", "wallpaper15.jpg")
toggle = "12h"
var rwp = (Math.random() * 16) - 1;

window.onload = function() {

$('#response').bind("enterKey",function(e){
    var name = $('#response').val()
    chrome.storage.sync.set({'name': name})
    $('#container').fadeOut(750)
    setTimeout(function(){
        $( location ).attr("href", "chrome://newtab");
    }, 750);
});

$('#response').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});

    $('#main').hide()
    $('#background').css("background", "#757575 url('/assets/" + wp[rwp] + "') no-repeat center center fixed")
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
