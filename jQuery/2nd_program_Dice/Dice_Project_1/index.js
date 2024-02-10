$("body").on("click",function(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var image_dice = "dice" + randomNumber1 + ".png";
    var image_src = "./images/" + image_dice;
    $("die_1").attr("src", image_src);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var image_dice2 = "dice" + randomNumber2 + ".png";
    var image_src2 = "./images/" + image_dice2;
    $("die_2").attr("src", image_src2);

    if (randomNumber1 > randomNumber2){
        $(".heading h1").text("🚩 Player 1 Wins!");
    } else if (randomNumber1 < randomNumber2){
        $(".heading h1").text("Player 2 Wins! 🚩");
    } else {
        $(".heading h1").text("Draw!!");
    }
});
$("body").on("keydown",function(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var image_dice = "dice" + randomNumber1 + ".png";
    var image_src = "./images/" + image_dice;
    $("die_1").attr("src", image_src);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var image_dice2 = "dice" + randomNumber2 + ".png";
    var image_src2 = "./images/" + image_dice2;
    $("die_2").attr("src", image_src2);

    if (randomNumber1 > randomNumber2){
        $(".heading h1").text("🚩 Player 1 Wins!");
    } else if (randomNumber1 < randomNumber2){
        $(".heading h1").text("Player 2 Wins! 🚩");
    } else {
        $(".heading h1").text("Draw!!");
    }
});