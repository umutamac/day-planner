let containerDiv = $(".container");
let currentDay = $("#currentDay");

let currentDate = moment().format('MMMM Do YYYY');
let currentHour = moment().format('HH');
currentDay.text(`Today is: ${currentDate}`);

function importFromLS(hourslot, i) { // Get stored text from localStorage
    let storedText = localStorage.getItem(hourslot);
    console.log(`saved hour slot: ${i} --- imported text: ${storedText}`);
  
    // set the textarea val to text in LS with corresponding index
    //first elem with matching hour attr is textarea
    $([`textAreaHour=\"${i}\"`]).text(storedText);

}

function saveAction(event) {
    let hourNum = event.target.getAttribute("saveHour");
    let correspondingText = $(`[textAreaHour=\"${hourNum}\"]`).val();
    console.log(`hour: ${hourNum} --- corresponding text: ${correspondingText}`);

    // set it to LS with corresponding hour value as index
    localStorage.setItem(`hourSlot${hourNum}`, correspondingText);
    //alert("The item has been saved");
}

function displayThings() {
    //generate hour rows in div.container and give them appopriate classes and ids
    for (i = 8; i <= 17; i++) {
        let rowDiv = $("<div>").addClass("row").attr("id", `row${i}`);
        let hourDiv = $("<div class=\"col-md-2 hour\">").attr("id", `hour${i}`).text(`${i}.00`);
        let textArea = $("<textarea class=\"col-md-8\">").attr({ id: `textarea${i}`, textAreaHour: `${i}` });
        let saveBtn = $("<button class=\"col-md-2 saveBtn\">").attr({ id: `saveBtn${i}`, saveHour: `${i}` }).text("Save");
        //console.log(i + " things created");

        containerDiv.append(rowDiv); // append the rows and their contents to container
        rowDiv.append(hourDiv).append(textArea).append(saveBtn);
        //console.log(i + " things appended");

        // color coding with classes being assigned to background colors
        let time = "";
        if (currentHour > i) { time = "past"; }
        else if (currentHour < i) { time = "future"; }
        else { time = "present"; };
        textArea.addClass(time);
        //console.log(i + " color coding done");

        let hourSlot = `hourSlot${i}`
        importFromLS(hourSlot, i); // import the text from localstorage for each textarea
        //console.log(i + " LS import done");

        $(`#saveBtn${i}`).click(saveAction);
    }
}

// initialize with main render function
$(document).ready(displayThings);