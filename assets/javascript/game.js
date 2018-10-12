$(document).ready(function () {
    var gemNum = "";
    var crystal;
    var winCounter;
    var lossCounter;
    var wins = 0;
    var losses = 0;

    var rocks = [];

    var compNum = Math.floor(Math.random() * 100) + 20;

    $("#randomNum").text(compNum);

    var counter = 0;

    for (var i = 0; i < 4; i++) {
        gemNum = Math.floor(Math.random() * 11) + 1;
        rocks[i] = gemNum;

        var imageCrystal = $("<img>");

        imageCrystal.addClass("crystal-image");

        imageCrystal.attr("src", "assets/images/image" + i + ".jpg");

        imageCrystal.attr("data-crystalvalue", rocks[i]);

        $("#crystals").append(imageCrystal);
    }


    $(".crystal-image").on("click", function () {
        var crystalValue = ($(this).attr("data-crystalvalue"));
        crystalValue = parseInt(crystalValue);

        counter = (counter += crystalValue);
        console.log(rocks);
        console.log(crystalValue);
        console.log(counter);

        $("#crystalTotal").text(counter)


        alert("Your crystal total " + counter);
        // console.log(counter);
        // console.log(compNum);

        if (counter === compNum) {
            alert("You win");
            wins++;
            $("#winCounter").html(wins);
            counter = 0;
            $("#randomNum").text(compNum);


        }
        else if (counter > compNum); {
            alert("you lost");
            losses++;
            $("#lossCounter").html(losses);
            counter = 0;
            $("#randomNum").text(compNum);
        }

    });
    // Psuosto code

    // a game with 4 crystals and a random computer generated number.
    // 
    //Every crystal needs to have a random number between 1 and 12
    // Computer generated number will be between 19 and 120
    //A new random number should be generated for each crystal 
    //and computer total after every win and loss

    //Each time a crystal is clicked - its value is added to the total
    //UNITL the total equals to or is greater then the computers number.


    // if total of crystal value is less then computer number - continue pick another crystal
    // if total of crystal value is equal to the computer number -Win
    // if total of  crystal value is greater than the computer number - Loss


})
