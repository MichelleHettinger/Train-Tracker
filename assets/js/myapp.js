//Establish train count variable as zero. Set the train count equal to the one that was previously stored.
//If it was not previously stored, trainCount will become null.
//If train count is null, set trainCount to zero.

var trainCount = 0;

trainCount = localStorage.getItem("train-count");
console.log("Train count loaded: " + trainCount);

if (trainCount == null){
	trainCount = 0;
	console.log("No train count found");
}

//For the number of trains submitted, grab from local storage and display them on the screen.
for (i=0;i<trainCount;i++){
	var fetchedRow = localStorage.getItem("data-train-" + i);

	$("#emptyTBODY").append(fetchedRow);
}

//When the submit button is pressed, the values in the input fields are stored in new variable
//Then a new row is created with unique identifier (data-train) and text containing the input information
//The new row is stored in local storage and train count increment by 1
$('#press-submit').on('click', function() {

	var newTrainName = $("#add-train").val().trim();
	var newDestination = $("#add-destination").val().trim();
	var newFrequency =  $("#add-first-train").val().trim();
	var newArrival =  $("#add-frequency").val().trim();
	var newMinutes =  $("#press-submit").val().trim();

	var newRow = $("<tr>" +
	"<td>" + newTrainName + "</td>" +
	"<td>" + newDestination + "</td>" +
	"<td>" + newFrequency + "</td>" +
	"<td>" + newArrival + "</td>" +
	"<td>" + newMinutes + "</td>" +
	 "</tr>");

	newRow.attr("data-train", trainCount);

	var stringRow = newRow.prop("outerHTML");

	alert(stringRow);

	localStorage.setItem("data-train-" + trainCount, stringRow);

	trainCount++;

	localStorage.setItem("train-count",trainCount);

})

