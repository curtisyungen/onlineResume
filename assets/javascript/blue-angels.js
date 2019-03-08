// BLUE ANGELS
// =============================================

// Display "Click Me" message at set interval
var shown = 0;
var click = false;

function showClickMe() {

    setInterval(function() {
        if (shown < 10 && click == false) {
            showPrompt();
        }
        
        shown += 1;
    }, 3000);

}

function showPrompt() {
    $("#clickMe").animate({
        opacity: 0.65
    }, 200);

    setTimeout(function() {
        $("#clickMe").animate({
            opacity: 0
        }, 200)
    }, 400);
}

showClickMe();

// Secondary Click Handler
$("#clickMe").on("click", flyJets);

// Event Handler profile image click
$("#profileImg").on("click", flyJets);

// Fly Jets Function
// Called when profile image is clicked
// Creates blue angel icons and moves them across screen

function flyJets() {

    click = true;

    // Create div that will house blue angel icons
    var blueAngels = $("<div>").attr("id", "blueAngels");

    blueAngels.css("left", "-5%");

    // Generate random number of jets between 2 and 5
    var numJets = Math.floor((Math.random() * 2) + 1 + Math.floor(Math.random() * 3) + 1);

    // Generate formation ID
    var formation = Math.floor((Math.random() * 4) + 1);

    // Create jets and populate div
    for (var j = 0; j < numJets; j++) {

        var jet = $("<p>").addClass("fas fa-fighter-jet fa-3x blueAngel");

        // Create formation
        switch (formation) {
            case 1: if ((j % 2 == 0)) { jet.css("margin-left", "-45px"); } break; // V formation
            case 2: jet.css("margin-left", "-5px"); break;                        // Vertical Line formation
            case 3: if ((j % 2 != 0)) { jet.css("margin-left", "-45px"); } break; // Inverse V formation
            case 4: jet.css("margin-left", `${"-25" - (j * 25)}px`); break;       // Diagonal formation
            default: if ((j % 2 == 0)) { jet.css("margin-left", "-45px"); }
        }

        blueAngels.append(jet);
        blueAngels.append("<br>");
    }

    $("#blueAngelRow").append(blueAngels);

    // Get width to use
    var body = document.body,
        html = document.documentElement;

    var width = Math.max(
        window.screen.width,
        body.scrollWidth,
        body.offsetWidth,
        html.clientWidth,
        html.scrollWidth,
        html.offsetWidth
    );

    // Animate the div
    blueAngels.animate({
        marginLeft: `+=${width * 1.25}`,
    }, width * 1.25)

    // Delete jet div after animation
    setTimeout(function () {
        blueAngels.animate({
            opacity: 0
        }, 500);

        blueAngels.remove();
    }, width * 1.25);
}