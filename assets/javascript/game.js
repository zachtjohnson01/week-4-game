$(document).ready(function() {
    function restart() {
    


        // VARIABLES
        // ======================================================

        var characters = [
            {
                "name": "Obi-Wan Kenobi",
                "class-name": "Kenobi",
                "photo": "assets/images/obi_wan.jpeg",
                "hitpoints": 120,
                "attack": [8,16,24,32,40,48,56,64,72,80],
                "defend": 10,
            },
            {
                "name": "Luke Skywalker",
                "class-name": "Skywalker",
                "photo": "assets/images/luke_skywalker.jpeg",
                "hitpoints": 100,
                "attack": [8,16,24,32,40,48,56,64,72,80],
                "defend": 5,
            },
            {
                "name": "Darth Sidious",
                "class-name": "Sidious",
                "photo": "assets/images/darth_sidious.jpeg",
                "hitpoints": 150,
                "attack": [8,16,24,32,40,48,56,64,72,80],
                "defend": 20,
            },
            {
                "name": "Darth Maul",
                "class-name": "Maul",
                "photo": "assets/images/darth_maul.jpeg",
                "hitpoints": 180,
                "attack": [8,16,24,32,40,48,56,64,72,80],
                "defend": 25,
            },
        ];

        var players_selected = 0;
        var defenders_selected = 0;


        var count = characters.length;
        var column = "col-md-3"
        var userhp
        var userattack
        var userkey
        var defenderhp
        var defenderdefend
        var defenderkey
        var b = -1;
        var enemynum = 3;
        var saberSounds = ["assets/sounds/sabersounds/clashclash.mp3",
        "assets/sounds/sabersounds/2clas2.wav", 
        "assets/sounds/sabersounds/swing01.wav3", 
        "assets/sounds/sabersounds/clash01.wav"
        ]




        // FUNCTIONS
        // ======================================================



        $("body").append("<div class='container'>");
        $(".container").append(`<div class='row'> 
                        <div class='col-md-12'>
                        <div class='pull-right'>
                        <h1>
                        Star Wars RPG!`);
        $(".container").append("<div class='row choose-character-title'>");
        $(".choose-character-title").append("<div class='col-md-12'>")
        $("div.choose-character-title div.col-md-12").html("<h3>Select a Character</h3>");
        $(".container").append("<div class='row character-options'>");

        for (var i = 0; i < 4; i++) {
            $(".character-options").append(`<div class=${column}>
                <div class='player-box ${characters[Object.keys(characters)[i]]["class-name"]}'> 
                <div class='caption text-center'> 
                ${characters[i].name}
                </div>
                <img src=${characters[Object.keys(characters)[i]]["photo"]} class='img-responsive float-left rounded player-image center' alt='${Object.keys(characters)[i]}'>
                <div class='caption text-center hitpoints'>
                ${characters[Object.keys(characters)[i]]["hitpoints"]}`);
        };



        $(".player-box").on("click", function() {
            $(this).addClass("user-box");
            $(this).parent().addClass("user-col");
            var user = $(this).clone();
            user.removeClass("player-box");
            user.find(".caption").removeClass("caption").addClass("user-caption")

            // Add 'Your Character' Title
            $(".container").append("<div class='row your-character-title'>");
            $(".your-character-title").append("<div class='col-md-12'>");
            $("div.your-character-title div.col-md-12").html("<h3>Your Character</h3>");

            $(".container").append("<div class='row character-selected'>");
            $(".character-selected").append(`<div class='${column} user-col'>`);
            $(".user-col").append(user);
            players_selected++;
            $("div.container div.choose-character-title").remove();
            var enemies = $(".character-options").clone();
            enemies.removeClass("character-options").addClass("enemy-options");
            enemies.children(".user-col").remove();

            //Add 'Enemies Available to Attack' Title
            $(".container").append("<div class='row enemies-available-title'>");
            $(".enemies-available-title").append("<div class='col-md-12'>");
            $("div.enemies-available-title div.col-md-12").html("<h3>Enemies Available to Attack</h3>");

            $(".container").append(enemies);
            var char_col = $(".character-options").children();
            char_col.remove();
            enemies.find(".caption").removeClass("caption").addClass("enemies-caption");
            enemies.find(".player-image").removeClass("player-image").addClass("enemies-image");
            enemies.find(".player-box").removeClass("player-box").addClass("enemies-box");

            //Add 'Fight Section' Title
            $(".container").append("<div class='row fight-title'>");
            $(".fight-title").append("<div class='col-md-12'>");
            $("div.fight-title div.col-md-12").html("<h3>Fight Section</h3>");

            //Add 'Attack' Button
            $(".container").append("<div class='row attack-button'>");
            $(".attack-button").append("<div class='col-md-12'>");
            $("div.attack-button div.col-md-12").html("<button type='button' class='btn'>Attack</button>");

            //Remove 'Character-Options' row
            $(".character-options").remove();

        });

        $("body").on("click",".enemies-box", function() {
            $(this).addClass("defender-box");
            $(this).parent().addClass("defender-col");
            var defender = $(this).clone();
            defender.removeClass("enemies-box").addClass("defender-box");
            defender.find(".enemies-caption").removeClass(".enemies-caption").addClass("defender-caption");
            defender.find(".enemies-image").removeClass(".enemies-image").addClass("defender-image");
            defender.find(".enemies-box").removeClass(".enemies-box").addClass("defender-box");

            //Add 'Defender' Title
            $(".container").append("<div class='row defender-title'>");
            $(".defender-title").append("<div class='col-md-12'>");
            $("div.defender-title div.col-md-12").html("<h3>Defender</h3>");

            $(".container").append(`<div class='row enemy-selected'>`);
            $(".enemy-selected").append(`<div class='${column} defender-col'>`);
            $("div.enemy-selected div.defender-col").append(defender);
            $("div.enemy-options div.defender-col").remove();
            $("div.enemy-options div.col-md-3 div.enemies-box").removeClass("enemies-box").addClass("available-enemies-box");
            defenders_selected++;
        });

        $("body").on("click",".attack-button", function() {
            var user = $(".user-box");
            var defender = $(".defender-box");
            var userclassname = user.attr("class").split(/\s+/)[0];
            var defenderclassname = defender.attr("class").split(/\s+/)[0];
            var sound = new Audio (saberSounds[Math.floor(Math.random()*saberSounds.length)]);
            
            sound.play();



            for (i=0; i < characters.length; i++) {

                if (`${characters[Object.keys(characters)[i]]["class-name"]}` === userclassname) {
                    userhp =  `${characters[Object.keys(characters)[i]]["hitpoints"]}`;
                    userattack = `${characters[Object.keys(characters)[i]]["attack"]}`;
                    userkey = Object.keys(characters)[i];

                } else if (`${characters[Object.keys(characters)[i]]["class-name"]}` === defenderclassname) {
                    defenderdefend = `${characters[Object.keys(characters)[i]]["defend"]}`;
                    defenderkey = Object.keys(characters)[i];

                }
            }


            if ($(`div.${characters[Object.keys(characters)[userkey]]["class-name"]} div.hitpoints`).html() <=0) {
                $(".user-col").append(`<h2>You have been defeated!!!</h2>`);
                $("."+userclassname).remove();
                $("div.your-character-title").remove();
                $("div.attack-button").removeClass("attack-button").addClass("reset-button");
                $("div.reset-button div.col-md-12").html("<button type='button' class='reset-btn'>Restart</button>");
                $("body").on("click","reset-btn",function() {
                    $("body").children().remove();  
                    restart();
                });
            }

            b+=1;

            var a = characters[Object.keys(characters)[userkey]]["attack"][b];

            //User attacking defender
            $(`div.${characters[Object.keys(characters)[defenderkey]]["class-name"]} div.hitpoints`).html(characters[Object.keys(characters)[defenderkey]]["hitpoints"] = characters[Object.keys(characters)[defenderkey]]["hitpoints"] - a);

            //Defender attacking user
            $(`div.${characters[Object.keys(characters)[userkey]]["class-name"]} div.hitpoints`).html(characters[Object.keys(characters)[userkey]]["hitpoints"] = characters[Object.keys(characters)[userkey]]["hitpoints"] - defenderdefend);


            //Display when user has defeated an enemy
            if ($(`div.${characters[Object.keys(characters)[defenderkey]]["class-name"]} div.hitpoints`).html() <1) {
                $(".defender-col").append(`<h2>You have defeated ${characters[Object.keys(characters)[defenderkey]]["name"]}</h2>`);
                $("."+defenderclassname).remove();
                enemynum --;
            };

            if (enemynum ===0) {
                $("div.container div.enemy-options").remove();
                $("div.container div.defender-title").remove();
                $("div.container div.fight-title").remove();
                
                $("div.attack-button").removeClass("attack-button").addClass("reset-button");
                $("div.reset-button div.col-md-12").html("<button type='button' class='reset-btn'>Restart</button>");
                $("div.container div.enemies-available-title").html("<h1>YOU WIN!!!</h1>");

            }

        });


        //Select Another Enemy to Battle
        $("body").on("click",".available-enemies-box", function() {
            if (enemynum ===2) {
                $("div.defender-col h2").remove();
                $(this).addClass("defender-box");
                $(this).parent().addClass("defender-col");
                var defender = $(this).clone();
                defender.removeClass("available-enemies-box").addClass("defender-box");
                defender.find(".enemies-caption").removeClass("enemies-caption").addClass("defender-caption");
                defender.find(".enemies-image").removeClass("enemies-image").addClass("defender-image");
                defender.find(".enemies-box").removeClass("enemies-box").addClass("defender-box");
        
                //Add 'Defender' Title
                $("div.enemy-selected div.defender-col").append(defender);
                $("div.enemy-options div.defender-col").remove();
                $("div.enemy-options div.col-md-3 div.enemies-box").removeClass("enemies-box").addClass("available-enemies-box");
                defenders_selected++;
            } else if (enemynum ===1) {
                $("div.defender-col h2").remove();
                $(this).addClass("defender-box");
                $(this).parent().addClass("defender-col");
                var defender = $(this).clone();

                //Add 'Defender' Title
                $("div.enemy-selected div.defender-col").append(defender);
                $("div.enemy-options div.defender-col").remove();
                defenders_selected++;

            }
        });

    }; 
    //Reload the page to restart
    $("body").on("click","div.reset-button div.col-md-12 button.reset-btn",function() {
        location.reload();
    });
    restart();


})
