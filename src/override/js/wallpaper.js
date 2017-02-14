var wpresponse = jQuery.getJSON("https://pixabay.com/api/?key=2303081-d69651e05413a133d621bfd4b&q=landscape&image_type=photo&pretty=true", function(data){
  var wpcropped = wpresponse.responseText
  console.log(wpcropped)
  var wparray = wpcropped.hits[1]
});
