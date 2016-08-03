
//When the submit button is pressed, the values in the input fields are stored in new variables and train count increments by 1
$('#press-submit').on('click', function() {
	var newTrainName = $("#add-train").val().trim();
	var newDestination = $("#add-destination").val().trim();
	var newFrequency =  $("#add-first-train").val().trim();
	var newArrival  $("#add-frequency").val().trim();
	var newMinutes =  $("#press-submit").val().trim();

	trainCount++;
})


var apple = [1,2];

//Display the information to the table
for(i=0; i<apple.length; i++){
	var newRow = $("<tr>");

	var newTrainName = $("<td>");
	var newDestination = $("<td>");
	var newFrequency = $("<td>");
	var newArrival = $("<td>");
	var newMinutes = $("<td>");

	newTrainName.text(apple[i]);
	newDestination.text(apple[i]);
	newFrequency.text(apple[i]);
	newArrival.text(apple[i]);
	newMinutes.text(apple[i]);

	newRow.append(newTrainName, newDestination, newFrequency, newArrival, newMinutes);

	$("#good").append(newRow);
}
