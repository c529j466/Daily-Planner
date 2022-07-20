// This posts todays date at the bottom of the jumbotron
var today = moment();
$("#currentDay").text(today.format("MMM Do, YYYY"));

// This sets a variable for todays date and todays hour
var todaysDate = new Date();
console.log(todaysDate);
var hours = todaysDate.getHours();
console.log(hours);

// This creates variables for each timeblock 
var nine = $("#nineAM");
var ten = $("#tenAM");
var eleven = $("#elevenAM");
var twelve = $("#twelvePM");
var one = $("#onePM");
var two = $("#twoPM");
var three = $("#threePM");
var four = $("#fourPM");
var five = $("#fivePM");

// sets color code for 9AM timeblock
if (hours === 9) {
    nine.addClass("present");
}
else if (hours < 9) {
    nine.addClass("future");
}
else {
    nine.addClass("past");
};

// sets color code for 10AM timeblock
if (hours ===10) {
    ten.addClass("present");
}
else if (hours < 10) {
    ten.addClass("future");
}
else {
    ten.addClass("past");
};

// sets color code for 11AM timeblock
if (hours ===11) {
    eleven.addClass("present");
}
else if (hours < 11) {
    eleven.addClass("future");
}
else {
    eleven.addClass("past");
};

// sets color code for 12PM timeblock
if (hours ===12) {
    twelve.addClass("present");
}
else if (hours < 12) {
    twelve.addClass("future");
}
else {
    twelve.addClass("past");
};

// sets color code for 1PM timeblock
if (hours ===13) {
    one.addClass("present");
}
else if (hours < 13) {
    one.addClass("future");
}
else {
    one.addClass("past");
};

// sets color code for 2PM timeblock
if (hours ===14) {
    two.addClass("present");
}
else if (hours < 14) {
    two.addClass("future");
}
else {
    two.addClass("past");
};

// sets color code for 3PM timeblock
if (hours ===15) {
    three.addClass("present");
}
else if (hours < 15) {
    three.addClass("future");
}
else {
    three.addClass("past");
};

// sets color code for 4PM timeblock
if (hours ===16) {
    four.addClass("present");
}
else if (hours < 16) {
    four.addClass("future");
}
else {
    four.addClass("past");
};

// sets color code for 5PM timeblock
if (hours ===17) {
    five.addClass("present");
}
else if (hours < 17) {
    five.addClass("future");
}
else {
    five.addClass("past");
};

// Sets text areas within the time blocks to variables
var notesOne = $("#notesOne");
var notesTwo = $("#notesTwo");
var notesThree = $("#notesThree");
var notesFour = $("#notesFour");
var notesFive = $("#notesFive");
var notesSix = $("#notesSix");
var notesSeven = $("#notesSeven");
var notesEight = $("#notesEight");
var notesNine = $("#notesNine");

// Sets the buttons attached to each timeblock as variables
var btnOne = $("#btnOne");
var btnTwo = $("#btnTwo");
var btnThree = $("#btnThree");
var btnFour = $("#btnFour");
var btnFive = $("#btnFive");
var btnSix = $("#btnSix");
var btnSeven = $("#btnSeven");
var btnEight = $("#btnEight");
var btnNine = $("#btnNine");


// Creates functions for button on first time block to save items to local storage and to get those same items when the page is loaded
function saveLastNote() {
    var ninePlans = notesOne.val();
    localStorage.setItem("ninePlans", (ninePlans))
}

function renderLastNote() {
    var renderedNote = localStorage.getItem("ninePlans")
    if (renderedNote !== null) {
    $("#notesOne").html(renderedNote);
    }else {
        return;
      }
}

btnOne.on("click", function() {
    saveLastNote();
    renderLastNote();
})

// Creates functions for button on second time block to save items to local storage and to get those same items when the page is loaded
function saveLastNoteTwo() {
    var tenPlans = notesTwo.val();
    localStorage.setItem("tenPlans", (tenPlans))
}

function renderLastNoteTwo() {
    var renderedNoteTwo = localStorage.getItem("tenPlans")
    if (renderedNoteTwo !== null) {
    $("#notesTwo").html(renderedNoteTwo);
    }else {
        return;
      }
}

btnTwo.on("click", function() {
    saveLastNoteTwo();
    renderLastNoteTwo();
})

// Creates functions for button on third time block to save items to local storage and to get those same items when the page is loaded
function saveLastNoteThree() {
    var ElevenPlans = notesThree.val();
    localStorage.setItem("ElevenPlans", (ElevenPlans))
}

function renderLastNoteThree() {
    var renderedNoteThree = localStorage.getItem("ElevenPlans")
    if (renderedNoteThree !== null) {
    $("#notesThree").html(renderedNoteThree);
    }else {
        return;
      }
}

btnThree.on("click", function() {
    saveLastNoteThree();
    renderLastNoteThree();
})

// Creates functions for button on fourth time block to save items to local storage and to get those same items when the page is loaded
function saveLastNoteFour() {
    var TwelvePlans = notesFour.val();
    localStorage.setItem("TwelvePlans", (TwelvePlans))
}

function renderLastNoteFour() {
    var renderedNoteFour = localStorage.getItem("TwelvePlans")
    if (renderedNoteFour !== null) {
    $("#notesFour").html(renderedNoteFour);
    }else {
        return;
      }
}

btnFour.on("click", function() {
    saveLastNoteFour();
    renderLastNoteFour();
})

// Creates functions for button on fifth time block to save items to local storage and to get those same items when the page is loaded
function saveLastNoteFive() {
    var OnePlans = notesFive.val();
    localStorage.setItem("OnePlans", (OnePlans))
}

function renderLastNoteFive() {
    var renderedNoteFive = localStorage.getItem("OnePlans")
    if (renderedNoteFive !== null) {
    $("#notesFive").html(renderedNoteFive);
    }else {
        return;
      }
}

btnFive.on("click", function() {
    saveLastNoteFive();
    renderLastNoteFive();
})

// Creates functions for button on sixth time block to save items to local storage and to get those same items when the page is loaded
function saveLastNoteSix() {
    var TwoPlans = notesSix.val();
    localStorage.setItem("TwoPlans", (TwoPlans))
}

function renderLastNoteSix() {
    var renderedNoteSix = localStorage.getItem("TwoPlans")
    if (renderedNoteSix !== null) {
    $("#notesSix").html(renderedNoteSix);
    }else {
        return;
      }
}

btnSix.on("click", function() {
    saveLastNoteSix();
    renderLastNoteSix();
})

// Creates functions for button on seventh time block to save items to local storage and to get those same items when the page is loaded
function saveLastNoteSeven() {
    var ThreePlans = notesSeven.val();
    localStorage.setItem("ThreePlans", (ThreePlans))
}

function renderLastNoteSeven() {
    var renderedNoteSeven = localStorage.getItem("ThreePlans")
    if (renderedNoteSeven !== null) {
    $("#notesSeven").html(renderedNoteSeven);
    }else {
        return;
      }
}

btnSeven.on("click", function() {
    saveLastNoteSeven();
    renderLastNoteSeven();
})

// Creates functions for button on eigth time block to save items to local storage and to get those same items when the page is loaded
function saveLastNoteEight() {
    var FourPlans = notesEight.val();
    localStorage.setItem("FourPlans", (FourPlans))
}

function renderLastNoteEight() {
    var renderedNoteEight = localStorage.getItem("FourPlans")
    if (renderedNoteEight !== null) {
    $("#notesEight").html(renderedNoteEight);
    }else {
        return;
      }
}

btnEight.on("click", function() {
    saveLastNoteEight();
    renderLastNoteEight();
})

// Creates functions for button on ninth time block to save items to local storage and to get those same items when the page is loaded
function saveLastNoteNine() {
    var FivePlans = notesNine.val();
    localStorage.setItem("FivePlans", (FivePlans))
}

function renderLastNoteNine() {
    var renderedNoteNine = localStorage.getItem("FivePlans")
    if (renderedNoteNine !== null) {
    $("#notesNine").html(renderedNoteNine);
    }else {
        return;
      }
}

btnNine.on("click", function() {
    saveLastNoteNine();
    renderLastNoteNine();
})



// The init() function fires when the page is loaded 
function init() {
    // When the init function is executed, the code inside renderLastGrade function will also execute
    renderLastNote();
    renderLastNoteTwo();
    renderLastNoteThree();
    renderLastNoteFour();
    renderLastNoteFive();
    renderLastNoteSix();
    renderLastNoteSeven();
    renderLastNoteEight();
    renderLastNoteNine();
  }
  init();
  















