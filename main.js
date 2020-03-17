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

// jQuery DOM MANIPULATION

$(document).ready(function() {
  // $("p.para5").css("color", "red");
  // $("p.para5").css({ color: "red", background: "#ccc" });
  // $("p.para6").addClass("mtClass");
  // $("p.para6").removeClass("mtClass");
  // $("#btn3").click(function() {
  // $("p.para6").toggleClass("mtClass");
  //});

  // $("#mtDiv").text("Hello World");
  // $("#mtDiv").html("<h3>Howdy World</h3>");
  //below gets the mtDiv innerHTML and puts it in alert
  // alert($("#mtDiv").text());

  // $("ul").append("<li>Appended List Item 5</li>");
  // $("ul").prepend("<li>Prepended List Item 0</li>");

  // $(".para5").appendTo("#para1");
  // $(".para6").prependTo(".para2");

  //append, appendTo, prepend, prependTo place elements inside their divs
  //before and after place them outside the target container

  // $("ul").before('<h4>element placed ".before" the UL container</h4>');
  // $("ul").after('<h4>element placed ".after" the UL container</h4>');

  //.empty() will remove all of the inner elements of a div
  // $("ul").empty();
  //.detach() will remove the whole element from the DOM
  // $("ul").detach();

  // can remove and add attributes into HTML tags
  // $("a").removeAttr("target", "blank");
  // $("a").attr("target", "_blank");
  //use .attr() to GET the attribute
  // alert($("a").attr("href"));

  // wrap elements into other elements. This example wraps each p elements with an h1 tag
  // $("p").wrap("<h1>");
  //.wrapAll() method wraps a whole group of p elements together in one h2 wrapper
  // $("p").wrapAll("<h2>");

  // INPUT A NEW ITEM INTO THE  UNORDERED LIST
  $("#newItem").keyup(function(e) {
    var code = e.which; //e.which with grab the key codes for keyboard and the code for the enter button is 13

    if (code == 13) {
      e.preventDefault();
      $("ul").append("<li>" + e.target.value + "</li>");
    }
  });

  var myArr = ["Brad", "Kelly", "Nate", "Jose"];

  //loop through an array using jQuery with $.each()
  $.each(myArr, function(i, val) {
    //console.log(val); //logs all items in array
    $("#users").append("<li>" + val + "</li>");
  });

  //You can also put the list items into an array

  var newArr = $("ul#list li").toArray();
  // console.log(newArr);
  $.each(newArr, function(i, val) {
    // console.log(val.innerHTML); //get a list of list items
  });
});

/////////////////////////////////////

// EFFECTS AND ANIMATION

////////////////////////////////////

$(document).ready(function() {
  $("#btnFadeOut").click(function() {
    // $("#box").fadeOut("slow");
    // $("#box").fadeOut("fast");
    // $("#box").fadeOut(3000);
    $("#box").fadeOut("fast", function() {
      $("#btnFadeOut").text("She Gone");
      $("#btnFadeIn").text("Fade In");
    });
  });
  $("#btnFadeIn").click(function() {
    $("#box").fadeIn("fast", function() {
      $("#btnFadeIn").text("She Back!");
      $("#btnFadeOut").text("Fade Out");
    });
  });

  $("#btnFadeTog").click(function() {
    $("#box").fadeToggle("fast", function() {});
  });

  //slide animations

  $("#btnSlideDown").click(function() {
    // $("#box").slideDown("slow");
    // $("#box").slideDown("fast");
    // $("#box").slideDown(3000);
    $("#box").slideDown(3000, function() {});
  });
  $("#btnSlideUp").click(function() {
    $("#box").slideUp(3000, function() {});
  });

  $("#btnSlideTog").click(function() {
    $("#box").slideToggle(3000, function() {});
  });
  $("#btnStop").click(function() {
    $("#box").stop();
  });

  // Move Around Box Left Right

  $("#btnMoveRight").click(function() {
    $("#box2").animate({
      left: 500,
      width: "10px",
      height: "10px",
      opacity: "0.5"
    });
  });
  $("#btnMoveLeft").click(function() {
    $("#box2").animate({
      left: 0,
      width: "100px",
      height: "100px",
      opacity: "100%"
    });
  });

  $("#btnMoveAround").click(function() {
    var box = $("#box2");
    box.animate({
      left: 300
    });
    box.animate({
      top: 300
    });
    box.animate({
      left: 0,
      top: 300
    });
    box.animate({
      left: 0,
      top: 0
    });
  });
});
