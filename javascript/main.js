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
	    $(this).removeClass('dragging');
	    $("#OpenModal").trigger("click");
	});
});