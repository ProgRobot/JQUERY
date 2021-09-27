//iSelectors

/*
$(document).ready(function () {
  $("p:nth-child(3)").hide();
});
*/

/*
$(function () {
  $("p").hide();
});
*/

//i Events

$(function () {
  $("p").click(function () {
    $("#title1").hide();
  });
});

$(function () {
  $("p").on("moussehover", function () {
    $("p").show;
  });
});

//Utilisation de la forme objet

$(function () {
  $("p").on({
    mouseenter: function () {
      $("#p5").hide();
    },
    mouseleave: function () {
      $("#p5").show();
    },
  });
});
