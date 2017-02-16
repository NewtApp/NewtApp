$(document).ready(function(){
    $("#searchbar").hide()
    $("#timeToggle").hide().fadeIn(1000);
    fsearch();
});

function fsearch() {
        setTimeout(function(){
        $("#searchbar").hide().fadeIn(1000);
    }, 500);
}
