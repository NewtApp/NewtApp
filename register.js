window.onload = function() {

$('#response').bind("enterKey",function(e){
    var name = $('#response').val()
    chrome.storage.sync.set({'name': name})
    $('#container').fadeOut(750)
    setTimeout(function(){
        $( location ).attr("href", "/index.html");
    }, 750);
});

$('#response').keyup(function(e){
    if(e.keyCode == 13)
    {
        $(this).trigger("enterKey");
    }
});

    $('#main').hide()
    $('#background').css('background','url(https://source.unsplash.com/category/nature/2560x1440/daily) center center no-repeat fixed')
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
