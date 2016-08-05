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

//For the number of trains submitted, grab from local storage, calculate and display them on the screen.
for (i=0;i<trainCount;i++){
	//Grab row from storage and display it in the table
	var fetchedRow = localStorage.getItem("data-train-" + i);
	$("#emptyTBODY").append(fetchedRow);

	//Grab the frequency and turn it into an integer.
	var frequency = $('#frequency-' + i).text();
	frequency = parseInt(frequency);
	console.log("Frequency (min): " + frequency);

	//Grab the first arrival time and subtract a year from it.
	var firstArrival = $('#nextArrival-' + i).text();
	firstArrival = moment(firstArrival, "hh:mm").subtract(1, "years");
	console.log("First arrival time: " + firstArrival)

	//Grab the current time
	var currentTime = moment();
	console.log("Current time: " + moment(currentTime).format("hh:mm"));

	//Calculate difference between now and current time in minutes
	var diffTime = moment().diff(moment(firstArrival), "minutes");
	console.log("Difference first train and now: " + diffTime);

	//Divide the diference in time by the frequency and store the remainder
	var remainder = diffTime % frequency;
	console.log("Remainder of modulus: " + remainder);

	//Subtract the remainder from the frequency to get minutes till next train
	var minutesAway = frequency - remainder;
	$('#minutesAway-' + i).text(minutesAway);

	//Add minutes awway to the current time and format to am/pm
	var nextArrival = moment().add(minutesAway, "m").format("hh:mm A");
	$('#nextArrival-' + i).text(nextArrival)
}




//When the submit button is pressed, the values in the input fields are stored in new variable
//Then a new row is created with unique identifier (data-train) and text containing the input information converted by momentjs
//The new row is stored in local storage and train count increment by 1
$('#press-submit').on('click', function() {
	var newTrainName = $("#add-train").val().trim();
	var newDestination = $("#add-destination").val().trim();

	var newFirstTrainTime =  $("#add-first-train").val().trim();
	// newFirstTrainTime = newFirstTrainTime.slice(0,2) + newFirstTrainTime.slice(3,5);

	var newFrequency =  $("#add-frequency").val().trim();

	var newMinutes = 0;

	var newRow = $("<tr>" +
	"<td id='trainName-" + trainCount + "'" + ">" + newTrainName + "</td>" +
	"<td id='destination-" + trainCount + "'" + ">" + newDestination + "</td>" +
	"<td id='frequency-" + trainCount + "'" + ">" + newFrequency + "</td>" +
	"<td id='nextArrival-" + trainCount + "'" + ">" + newFirstTrainTime + "</td>" +
	"<td id='minutesAway-"  + trainCount + "'" +">" + newMinutes + "</td>" +
	 "</tr>");

	newRow.attr("data-train", trainCount);

	var stringRow = newRow.prop("outerHTML");

	localStorage.setItem("data-train-" + trainCount, stringRow);

	trainCount++;

	localStorage.setItem("train-count",trainCount);

})

