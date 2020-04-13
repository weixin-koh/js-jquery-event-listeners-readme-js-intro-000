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

function pressIt() {
  $("form").on("keydown", function(key) {
    if (key.which == 71) {
      alert("G was pressed");
    }
  })
}

$(document).ready(function(){

// call functions here

});
