
// toggle for tool images in lists 

$(document).ready(function(){

  $("li").click(function(){

    $(this).find(".tool-img").toggle();

  });
});



// drop down for header 3

$(document).ready(function(){

  $(".zigzag-text h3").click(function(){

    $(this).parent().find(".tool-img").toggle();
  });
});



$(document).ready(function(){

  $(".step h3").click(function(){
    
    $(this).parent().find(".tool-img").toggle();
  });
});