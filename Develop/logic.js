let currentDate = moment().format('MMMM Do YYYY');
let currentHour = moment().format('HH');

// Print today's date at the top of page when page loads
$(document).ready( function () {
    $("#currentDay").text("Today is: " + currentDate);
});

//generate hour rows and give them appopriate classes so that css gives them background colors
for(i=8;i<=17;i++){
    $(".container").append($("<div>").addClass("row").attr('id','row'+i));
    $("#row"+i).append($("<div>").addClass("col-md-2 hour").text(i + ".00"));
    $("#row"+i).append($("<textarea>").addClass("col-md-8").attr('hourValue',i));
    $("#row"+i).append($("<div>").addClass("col-md-2 saveBtn"));
    
    let time = "";
    if(currentHour>i)       {time = "past";}
    else if (currentHour<i) {time = "future";}
    else                    {time = "present";}
    $("[hourValue="+i+"]").addClass(time);
}






