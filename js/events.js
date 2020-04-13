function getIt() {
  $('p').on("click", function() {
    alert("Hey!");
  });
}

function frameIt() {
  $('img').on("load", function() {
    $('img').addClass("tasty");
    $('.tasty').attr("border-color", "red");
  });
}

$(document).ready(function(){

// call functions here

});
