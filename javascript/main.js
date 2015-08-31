var header = false;
dropFile ={};
fileData=[];

$(document).ready(function() {
    console.log("loaded main.js");

	$("body").on("dragover", function(event) {
	    event.preventDefault();  
	    event.stopPropagation();
	    $(this).addClass('dragging');
	});

	$("body").on("dragleave", function(event) {
	    event.preventDefault();  
	    event.stopPropagation();
	    $(this).removeClass('dragging');
	});

	$("body").on("drop", function(event) {
	    event.preventDefault();  
	    event.stopPropagation();
	    //fetch the file data
	    dropFile = event.originalEvent.dataTransfer.files[0];
	    $(this).removeClass('dragging');
	    //display the loading modal
	    $(".modal-title").html("Loading data from " + dropFile.name);
	    $("#OpenModal").trigger("click");
	});
});

function readCSV(file)
{
	  	Papa.parse(file, {
		//worker: true,
		header:header,
		dynamicTyping:true,
		step: function(row) {
			fileData.push(row);
		},
		complete: function() {
			console.log("Finished Reading File");
			console.log(fileData);
		}
	});

}


function setHeaderValue(value)
{
	header = value;
	console.log("header value set to " + header);
	cleanModal();
	readCSV(dropFile);
}


function cleanModal()
{
	$(".modal-body").html("Processing your data.  Please wait.");
}
