// SHOW MORE / SHOW LESS
// =============================================

// Event Handler

$(".showMore").on("click", showMore);

// Show More Function
// Called when "show more" or "show less" is clicked in Work Experience section
// Displays more or less info about Boeing
// Updates text and plane icon accordingly

function showMore() {

    // Get status attribute from clicked link
    var status = $(this).attr("data-status");

    // Get label name to which this link pertains
    var label = $(this).attr("data-label");

    // Toggle show more/less info
    // Update status and text of link
    if (status == "more") {

        // Show more
        $(`#${label}`).slideDown("slow");

        // Rotate plane icon
        $(`#${label}Icon`).css("transform", "rotate(90deg)");

        $(this)
            .attr("data-status", "less")
            .text("Show less");
    }
    else {

        // Show less
        $(`#${label}`).slideUp("slow");

        // Rotate plane icon
        $(`#${label}Icon`).css("transform", "rotate(270deg)");

        $(this)
            .attr("data-status", "more")
            .text("Show more");
    }
}

// BLUE ANGELS
// =============================================

// Event handler profile image hover

$("#profileImg").on("mouseenter", promptJets);
$("#profileImg").on("mouseout", hidePromptJets);

function promptJets() {
    $("#promptJets").show();
}

function hidePromptJets() {
    $("#promptJets").hide();
}

// Back up handlers

$("#promptJets").on("mouseenter", promptJets);
$("#promptJets").on("click", flyJets);

// Event Handler profile image click

$("#profileImg").on("click", flyJets);

// Fly Jets Function
// Called when profile image is clicked
// Creates blue angel icons and moves them across screen

function flyJets() {

    // Create div that will house blue angel icons
    var blueAngels = $("<div>").attr("id", "blueAngels");

    // Generate random number of jets between 3 and 6
    var numJets = Math.floor((Math.random() * 3) + 3);

    // Create jets and populate div
    for (var j = 0; j < numJets; j++) {

        var jet = $("<p>").addClass("fas fa-fighter-jet fa-3x blueAngel");

        // Create V formation
        if ((j % 2 == 0)) {
            jet.css("margin-left", "-45px");
        }

        blueAngels.append(jet);
        blueAngels.append("<br>");
    }

    $("#blueAngelRow").append(blueAngels);

    var width = window.screen.width;

    // Animate the div
    blueAngels.animate({
        marginLeft: `+=${width+100}`,
    }, width)

    // Delete jet div after animation
    setTimeout(function () {
        blueAngels.remove();
    }, width*0.95);
}

