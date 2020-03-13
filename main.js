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
