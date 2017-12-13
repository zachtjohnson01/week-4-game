$(document).ready(function() {


    // VARIABLES
    // ======================================================

    var characters = [
        {
            "name": "Obi-Wan Kenobi",
            "photo": "assets/images/obi_wan.jpeg",
            "hitpoints": 120,
            "attack": 8,
            "defend": 10,
        },
        {
            "name": "Luke Skywalker",
            "photo": "assets/images/luke_skywalker.jpeg",
            "hitpoints": 100,
            "attack": 8,
            "defend": 5,
        },
        {
            "name": "Darth Sidious",
            "photo": "assets/images/darth_sidious.jpeg",
            "hitpoints": 150,
            "attack": 8,
            "defend": 20,
        },
        {
            "name": "Darth Maul",
            "photo": "assets/images/darth_maul.jpeg",
            "hitpoints": 180,
            "attack": 8,
            "defend": 25,
        },
    ];

    var players_selected = 0;
    var defenders_selected = 0;


    var count = characters.length;
    var column = "col-md-3"
    // console.log(characters[0].name);


    // FUNCTIONS
    // ======================================================

    $("body").append("<div class='container'>");
    $(".container").append(`<div class='row'> 
                    <div class='col-md-12'>
                    <div class='pull-right'>
                    <h1>
                    Star Wars RPG!`);
    $(".container").append("<div class='row character-options'>");
    // $(".container").append("<div class='row character-selected'>");
    // $(".container").append("<div class='row enemy-options'>");
    // $(".container").append("<div class='row enemy-selected'>");

//    function player_create() {
//        console.log("test");
//         $('character-options').append('<div>');
//         $(`.options`).append(`<div class='player-box'>`);
//         $(`.player-box`).append(`<div class='caption text-center charname'>`);
//         $(`.charname`).append(`${characters[0].name}`);
//         $(`.player-box`).append(`<img src='${characters[0].photo}' class='player-image'>`);
//         $(`.player-image`).addClass('img-responsive float-left rounded center');
//         $(`.player-image`).attr('alt',`${characters[0].name}`);
//         $(`player-box`).append(`<div class='caption text-center hitpoints'>`);
//         $(`hitpoints`).append(`${characters[0].hitpoints}`);
//     }
//     player_create();

    for (var i = 0; i < 4; i++) {
        $(".character-options").append(`<div class=${column}>
            <div class='player-box'> 
            <div class='caption text-center'> 
            ${characters[i].name}
            </div>
            <img src=${characters[Object.keys(characters)[i]]["photo"]} class='img-responsive float-left rounded player-image center' alt='${Object.keys(characters)[i]}'>
            <div class='caption text-center'>
            ${characters[Object.keys(characters)[i]]["hitpoints"]}`);
    };

    $(".player-box").on("click", function() {
        console.log("test fire 1");
        $(this).addClass("user-box");
        $(this).parent().addClass("user-col");
        var user = $(this).clone();
        user.removeClass("player-box");
        user.find(".caption").removeClass("caption").addClass("user-caption")
        $(".container").append("<div class='row character-selected'>");
        $(".character-selected").append(`<div class='${column} user-col'>`);
        $(".user-col").append(user);
        console.log(user.contents())
        players_selected++;
        var enemies = $(".character-options").clone();
        enemies.removeClass("character-options").addClass("enemy-options");
        enemies.children(".user-col").remove();
        $(".container").append(enemies);
        var char_col = $(".character-options").children();
        char_col.remove();
        enemies.find(".caption").removeClass("caption").addClass("enemies-caption");
        enemies.find(".player-image").removeClass("player-image").addClass("enemies-image");
        enemies.find(".player-box").removeClass("player-box").addClass("enemies-box");

    });
    $("body").on("click",".enemies-box", function() {
        console.log("test fire");
        $(this).addClass("defender-box");
        $(this).parent().addClass("defender-col");
        var defender = $(this).clone();
        console.log(defender);
        defender.removeClass("enemies-box").addClass("defender-box");
        defender.find(".enemies-caption").removeClass(".enemies-caption").addClass("defender-caption");
        defender.find(".enemies-image").removeClass(".enemies-image").addClass("defender-image");
        defender.find(".enemies-box").removeClass(".enemies-box").addClass("defender-box");
        $(".container").append(`<div class='row enemy-selected'>`);
        $(".enemy-selected").append(`<div class='${column} defender-col'>`);
        $("div.enemy-selected div.defender-col").append(defender);
        $("div.enemy-options div.defender-col").remove();
        $("div.enemy-options div.col-md-3 div.enemies-box").removeClass("enemies-box").addClass("available-enemies-box");
        defenders_selected++;
        
    });


})
