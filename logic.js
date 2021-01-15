const saveBtn = $(".saveBtn");
const containerDiv = $(".container");
let textareaID = "";

let currentDate = moment().format('MMMM Do YYYY');
let currentHour = moment().format('HH');
$("#currentDay").text(`Today is: ${currentDate}`);


function displayThings() {
    //generate hour rows in div.container and give them appopriate classes and ids
    for (i = 8; i <= 17; i++) {
        const rowDiv = $("<div>").addClass("row").attr("id", `row${i}`)
        containerDiv.append(rowDiv);
        rowDiv.append($("<div>").addClass("col-md-2 hour").text(`${i}.00`));
        rowDiv.append($("<textarea>").addClass("col-md-8").attr("id", `textarea${i}`));
        rowDiv.append($("<button>").addClass("col-md-2 saveBtn").attr("id", `saveBtn${i}`).text("Save"));

        // color coding with classes being assigned to background colors
        let time = "";
        if (currentHour > i) { time = "past"; }
        else if (currentHour < i) { time = "future"; }
        else { time = "present"; };
        $(`#textarea${i}`).addClass(time);

        textareaID = `#textarea${i}`
        importFromLS(textareaID); // import the text from localstorage for each textarea
    }
}

function importFromLS(textareaID) {
    // Get stored text from localStorage
    if (localStorage.getItem(textareaID) != "") {
        $(textareaID).text(localStorage.getItem(textareaID));
    } else { // create placeholder text if no ID has been found with a value
        $(textareaID).attr("placeholder", "Enter Text Here...");
    }
}


// saving input in textareas with savebtn
saveBtn.click(() => {

    $("textarea").each(() => {
        let hourSlotText = $(this).val(); // get text of each row
        console.log(hourSlotText);
        localStorage.setItem($(this).attr("id"), hourSlotText); // set it to LS with textarea id of the row
    })


});

$(document).ready(displayThings);
