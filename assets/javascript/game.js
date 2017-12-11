$(document).ready(function() {


    // VARIABLES
    // ======================================================

    var characters = {"Obi-Wan Kenobi": {"photo": "assets/images/obi_wan.jpeg",
                                        "hitpoints": 120},
                    "Luke Skywalker": {"photo": "assets/images/luke_skywalker.jpeg",
                                        "hitpoints": 100},
                    "Darth Sidious": {"photo": "assets/images/darth_sidious.jpeg",
                                        "hitpoints": 150},
                    "Darth Maul": {"photo": "assets/images/darth_maul.jpeg",
                                        "hitpoints": 180},
                    };
    var count = characters.length;
    var column = "col-md-"+(12/4);
    console.log(Object.keys(characters)[0].toString());
    console.log(characters["Obi-Wan Kenobi"]["photo"]);


    // FUNCTIONS
    // ======================================================

    $("body").append("<div class='container'>");
    $(".container").append(`<div class='row'> 
                    <div class='col-md-12'>
                    <div class='pull-right'>
                    <h1>
                    Star Wars RPG!`);
    $(".container").append("<div class='row player-selection'>");

    for (var i = 0; i < 4; i++) {
        console.log(Object.keys(characters)[i]);
        console.log(Object.keys(characters)[i] in characters);
        $(".player-selection").append(`<div class=${column}> 
            <div class='player-box'> 
            <div class='caption text-center'> 
            ${Object.keys(characters)[i]} 
            <img src=${characters[Object.keys(characters)[i]]["photo"]} class='img-responsive float-left rounded player-image center' alt='${Object.keys(characters)[i]}'>
            <div class='caption text-center'>
            ${characters[Object.keys(characters)[i]]["hitpoints"]}`);
    };

    $(".player-box").on("click",function() {


    });
})


