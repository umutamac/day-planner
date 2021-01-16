let containerDiv = $(".container");
let currentDay = $("#currentDay");

let currentDate = moment().format('MMMM Do YYYY');
let currentHour = moment().format('HH');
currentDay.text(`Today is: ${currentDate}`);

function importFromLS(hourslot) { // Get stored text from localStorage
    let storedText = localStorage.getItem(hourslot)
    console.log(`text to be imported: ${storedText}`);
    if (storedText != "") {
        $(hourslot).text(storedText);
    } else { // create placeholder text if no ID has been found with a value
        $(hourslot).attr("placeholder", "Enter Text Here...");
    }
}

function saveAction(event){
    let hourAttr = event.target.getAttribute("hour");
    console.log(`${hourAttr} hourAttr saved`);

    let correspondingText = $(`[hour=\"${hourAttr}\"]`).val();
    console.log(`--corresponding text: ${correspondingText}`);

    // set it to LS with textarea id as the index
    localStorage.setItem(`hourSlot${hourAttr}`, correspondingText);
    //alert("The item has been saved");
}

function displayThings() {
    //generate hour rows in div.container and give them appopriate classes and ids
    for (i = 8; i <= 17; i++) {
        let rowDiv = $("<div>").addClass("row").attr("id", `row${i}`);
        let hourDiv = $("<div class=\"col-md-2 hour\">").attr("id", `hour${i}`).text(`${i}.00`);
        let textArea = $("<textarea class=\"col-md-8\">").attr({ id: `textarea${i}`, hour: `${i}` });
        let saveBtn = $("<button class=\"col-md-2 saveBtn\">").attr({ id: `saveBtn${i}`, hour: `${i}` }).text("Save");
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
        importFromLS(hourSlot); // import the text from localstorage for each textarea
        //console.log(i + " LS import done");

        $(`#saveBtn${i}`).click(saveAction);
    }
}

// initialize with main render function
$(document).ready(displayThings);