// Different ways to use the jQuery $(" ") to select elements
// $("h1").hide();
// $("h1#heading1").hide();
// $("h2.heading2").hide();

$("p span").css("color", "red");

$("ul#list li:first").css("color", "blue");
$("ul#list li:last").css("color", "purple");
$("ul#list li:even").css("background-color", "#ccc");
$("ul#list li:odd").css("background-color", "yellow");
$("ul#list li:nth-child(3n)").css("list-style", "none");

// $(":button").hide();
// $(":submit").hide();
// $(":text").hide();

// USING ATTRIBUTES AS SELECTORS

$("[href]").css("color", "red");
$('a[href="https://brave.com"]').css("color", "orange");
// $("*").hide();

// JQUERY EVENTS

$("#btn1").click(function() {
  alert("BUTTON1  first msg!");
});

//this javascript needs to be placed below the buttons or it wont work.
//Solution use $(document).ready() nameless function to wait until the page is loaded.

$(document).ready(function() {
  $("#btn1").click(function() {
    alert("BUTTON1 clicked!");
  });
  $("#btn1").on("click", function() {
    alert("Button1 On click function worked!");
  });
});

// Show & Hide buttons
$(document).ready(function() {
  $("#btnHide").on("click", function() {
    $(".para3").hide();
  });
  $("#btnShow").on("click", function() {
    $(".para3").show();
  });
});

// TOGGLE SHOW/HIDE METHOD
// $(document).ready(function() {
//   $("#btnToggle").on("click", function() {
//     $(".para4").toggle();
//   });
// });

// TOGGLE DOUBLE CLICK SHOW/HIDE
// $(document).ready(function() {
//   $("#btnToggle").dblclick(function() {
//     $(".para4").toggle();
//   });
// });

// ON HOVER SHOW/HIDE
$(document).ready(function() {
  // $("#btnToggle").dblclick(function() {
  //   $(".para4").toggle();
  // });

  // $("#btnToggle").on("mouseenter", function() {
  //   $(".para4").toggle();
  // });

  // $("#btnToggle").on("mouseleave", function() {
  //   $(".para4").toggle();
  // });

  // $("#btnToggle").on("hover", function() {
  //   $(".para4").toggle();
  // });

  // $("#btnToggle").hover(function() {
  //   $(".para4").toggle();
  // });

  // $("#btnToggle").on("mousemove", function() {
  //   $(".para4").toggle();
  // });

  // $("#btnToggle").on("mousedown", function() {
  //   $(".para4").toggle();
  // });

  // $("#btnToggle").on("mouseup", function() {
  //   $(".para4").toggle();
  // });

  // $("#btnToggle").dblclick(function() {
  //   $(".para4").toggle();
  // });

  // $("#btnToggle").click(function(e) {
  //   alert(e.currentTarget.id);
  //   alert(e.currentTarget.innerHTML);
  //   alert(e.currentTarget.outerHTML);
  //   alert(e.currentTarget.className);
  // });

  // $("#btnToggle").on("mousemove", function(e) {
  //   console.log("Coords: X: " + e.clientX + " Y: " + e.clientY);
  // });

  $(document).on("mousemove", function(e) {
    $("#coords").html("Coords: X: " + e.clientX + " Y: " + e.clientY);
  });
});

// SETTING FOCUS ON A FORM
$(document).ready(function() {
  // $("input").focus(function() {
  //   // alert("Focus");
  //   $("input#name").css("background", "pink");
  // });

  // but the problem above is it stays pink,
  // and turns pink even when you click in a different input box.
  //   so use the "this" keyword and it will apply the CSS
  //on any input field that gets focus.
  $("input").focus(function() {
    // alert("Focus");
    $(this).css("background", "pink");
  });
  $("input").blur(function() {
    // alert("Focus");
    $(this).css("background", "white");
  });

  // $("input").keyup(function() {
  //   console.log("keyup");
  // });
  // $("input").keyup(function(e) {
  //   console.log(e.target.value);
  // });

  // $("select#gender").change(function(e) {
  //   alert("Changed: " + e.target.value);
  // });

  $("#form").submit(function(e) {
    e.preventDefault();
    var name = $("input#name").val();
    console.log("name: " + name);
  });
});
