


if (trainCount == null){
	var trainCount = 0;
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

	localStorage.setItem(newRow);

	trainCount++;

	return false;
})

