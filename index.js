var ch = 0;
var z = 0;
var answer = 0;
var n = 0;
var w = 0;
var l = 0;
var prob = 0;

$(document).ready(function () {
  $(".screen").hide();
  $(".switch").hide();
  $(".ending").hide();
  $(".ending2").hide();
  $(".btn2").hide();
  $(".btn").click(function () {
    $(".btn").hide(200);
    $(".screen").show(200);
  });
});

$("#d1").hover(
  function () {
    $(".image1").css("opacity", "0.3");
    $(".overlay1").css("opacity", "1");
  },
  function () {
    $(".image1").css("opacity", "1");
    $(".overlay1").css("opacity", "0");
  }
);
$("#d2").hover(
  function () {
    $(".image2").css("opacity", "0.3");
    $(".overlay2").css("opacity", "1");
  },
  function () {
    $(".image2").css("opacity", "1");
    $(".overlay2").css("opacity", "0");
  }
);
$("#d3").hover(
  function () {
    $(".image3").css("opacity", "0.3");
    $(".overlay3").css("opacity", "1");
  },
  function () {
    $(".image3").css("opacity", "1");
    $(".overlay3").css("opacity", "0");
  }
);

function hover11() {
  $("#d11").hover(
    function () {
      $(".image1").css("opacity", "0.3");
      $(".overlay1").css("opacity", "1");
    },
    function () {
      $(".image1").css("opacity", "1");
      $(".overlay1").css("opacity", "0");
    }
  );
}
function hover22() {
  $("#d22").hover(
    function () {
      $(".image2").css("opacity", "0.3");
      $(".overlay2").css("opacity", "1");
    },
    function () {
      $(".image2").css("opacity", "1");
      $(".overlay2").css("opacity", "0");
    }
  );
}
function hover33() {
  $("#d33").hover(
    function () {
      $(".image3").css("opacity", "0.3");
      $(".overlay3").css("opacity", "1");
    },
    function () {
      $(".image3").css("opacity", "1");
      $(".overlay3").css("opacity", "0");
    }
  );
}

function open_door(choice, ans) {
  var a = 1;
  while (a == ans || a == choice) {
    a = Math.floor(Math.random() * 3) + 1;
  }
  return a;
}

function choose(choice) {
  answer = Math.floor(Math.random() * 3) + 1;
  n = n + 1;
  ch = choice;
  $(document).ready(function () {
    $(".screen").hide(0);
    $(".ending").hide(0);
    $(".ending2").hide(0);
    $(".switch").show(200);
  });
  document.querySelector(".selection1").innerHTML =
    "You have selected DOOR " + ch;
  var x = open_door(choice, answer);
  z = x;
  document.querySelector(".selection2").innerHTML =
    "The Door " +
    x +
    " doesn't have anything inside. Select a new door or go with your original pick. <br> Your Call";
  if (x == 1) {
    $("#d11").hover(
      function () {
        $(this).css("opacity", "1");
      },
      function () {
        $(this).css("opacity", "1");
      }
    );
    hover22();
    hover33();
    document.getElementById("d11").innerHTML =
      '<img class="image1" src="images/door_cross.png" alt="door1" />';
  } else if (x == 2) {
    $("#d22").hover(
      function () {
        $(this).css("opacity", "1");
      },
      function () {
        $(this).css("opacity", "1");
      }
    );
    hover11();
    hover33();
    document.getElementById("d22").innerHTML =
      '<img class="image2" src="images/door_cross.png" alt="door2" />';
  } else if (x == 3) {
    $("#d33").hover(
      function () {
        $(this).css("opacity", "1");
      },
      function () {
        $(this).css("opacity", "1");
      }
    );
    hover22();
    hover11();
    document.getElementById("d33").innerHTML =
      '<img class="image3" src="images/door_cross.png" alt="door3" />';
  }
}

function reset(x) {
  if (x == 1) {
    hover11();
    hover22();
    hover33();
    document.getElementById("d11").innerHTML =
      '<img class="image1" src="images/door1.png" alt="door1" /><div class="overlay1"><div class="text"><a onclick="change(1)" class="dor">Door 1</a></div></div>';
  } else if (x == 2) {
    hover11();
    hover22();
    hover33();
    document.getElementById("d22").innerHTML =
      '<img class="image2" src="images/door1.png" alt="door2" /><div class="overlay2"><div class="text"><a onclick="change(2)" class="dor">Door 2</a></div></div>';
  } else if (x == 3) {
    hover11();
    hover22();
    hover33();
    document.getElementById("d33").innerHTML =
      '<img class="image3" src="images/door1.png" alt="door3" /><div class="overlay3"><div class="text"><a onclick="change(3)" class="dor">Door 3</a></div></div>';
  }
}

function playagain() {
  reset(z);
  $(document).ready(function () {
    $(".switch").hide();
    $(".ending").hide();
    $(".ending2").hide();
    $(".btn2").hide();
    $(".screen").show(200);
  });
}

function probability(p) {
  document.getElementById("prob1").innerHTML = "Probability: " + p + "%";
  document.getElementById("prob2").innerHTML = "Probability: " + p + "%";
  document.getElementById("prob3").innerHTML = "Probability: " + p + "%";
}

function change(choice) {
  if (choice == answer) {
    w = w + 1;
    prob = (w / n) * 100;
    var p = prob.toFixed(2);
    probability(p);
    $(document).ready(function () {
      $(".switch").hide(0);
      $(".ending").show(200);
      $(".screen").hide(0);
      $(".btn2").show(200);
    });
    $(document).ready(function () {
      $(".btn2").click(function () {
        playagain();
      });
    });
  } else {
    prob = (w / n) * 100;
    probability(prob);
    $(document).ready(function () {
      $(".switch").hide(0);
      $(".screen").hide(0);
      $(".ending2").show(200);
      $(".btn2").show(200);
    });
    $(document).ready(function () {
      $(".btn2").click(function () {
        playagain();
      });
    });
  }
}
