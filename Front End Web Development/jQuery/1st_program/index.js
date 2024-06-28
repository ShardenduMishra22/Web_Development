$("h1").addClass("big-title");
$("h1").removeClass("bag");
$("h1").text("Hello Friends!");
$("button").html("<em>Click Me</em>"); 
console.log($("img").attr("src"));
$("a").attr("href","https://www.youtube.com/");


$("h1").click(function(){
    $("h1").css("color","blue");
});

$("button").click(function(){
    $("h1").css("color","purple");
});

$("input").keydown(function(event){
    console.log(event.key);
});

$("body").keydown(function(event){
    $("h1").text(event.key);
});

$("h1").on("mouseover",function(){
    $("h1").css("color","blue")
});

$("h1").before('<button>Search</button>');
$("h1").after('<button>Search</button>');
$("h1").prepend('<button>Search</button>');
$("h1").append('<button>Search</button>');

// $("button").remove();

// $("button").on('click',function(){
//     $("h1").hide();
// });

// $("button").on('click',function(){
//     $("h1").show();
// });

// $("button").on('click',function(){
//     $("h1").toggle();
// });

// $("button").on('click',function(){
//     $("h1").fadeOut();
// });

// $("button").on('click',function(){
//     $("h1").fadeIn();
// });

// $("button").on('click',function(){
//     $("h1").fadeToggle();
// });

// $("button").on('click',function(){
//     $("h1").slideUp();
// });

// $("button").on('click',function(){
//     $("h1").slideDown();
// });

// $("button").on('click',function(){
//     $("h1").slideToggle();
// });

$("h1").on("click", function(){
    $("h1").slideUp().fadeIn().animate({opacity: 0.5}).animate({"font-size": "2rem"});
});
