let currentDate = moment().format('MMMM Do YYYY');
let currentHour = moment().format('HH');
var saveBtn = $(".saveBtn");
var textinput = "";

$("#currentDay").text("Today is: " + currentDate);

//generate hour rows and give them appopriate classes so that css gives them background colors
for(i=8;i<=17;i++){
    $(".container").append($("<div>").addClass("row").attr('id','row'+i));
    $("#row"+i).append($("<div>").addClass("col-md-2 hour").text(i + ".00"));
    $("#row"+i).append($("<textarea>").addClass("col-md-8").attr('hourValue',i));
    $("#row"+i).append($("<div>").addClass("col-md-2 saveBtn").text("Save"));
    
    let time = "";
    if(currentHour>i)       {time = "past";}
    else if (currentHour<i) {time = "future";}
    else                    {time = "present";};
    $("[hourValue="+i+"]").addClass(time);
}

//------------------------------------------------------------------------------------
// outputting text input from local storage when site loads
function initializeText() {
    // Get stored text from localStorage
    // Parsing the JSON string to an object
    var initialText = JSON.parse(localStorage.getItem("textAreaInput"));
    
    renderText();
}





function renderText() {
        $("[hourValue="+i+"]").text(textinput);
};






// saving input in textareas with savebtn
saveBtn.click(function(event) {
    event.preventDefault(); // do not refresh page
  
    //var name = fname.value.trim(); 

  
    // Add new text input   

    // Stringify and save score and name with respective keys in localStorage
    localStorage.setItem("textAreaInput", JSON.stringify(nameinput));
    renderScores();
});

initializeText();
renderText();