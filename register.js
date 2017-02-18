function doTheRest() {
    
}

window.onload = function() {
    $('#background').css('background','url(/assets/wallpaper.jpg) center center no-repeat fixed')
    $('#background').hide().fadeIn(1000)
    setTimeout(doTheRest(), 3000);
}
