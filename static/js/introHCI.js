'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#testjs").click(function(e) {
		$('.jumbotron h1').text("Javascript is connected");
		$('#testjs').text("Javascript enabled!");
		$(".jumbotron p").toggleClass("active");
	});

	$("a.thumbnail").click(projectClick);

	$("#submitBtn").click(submitForm);
	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function submitForm(e) {
	// e.preventDefault();
	var project = $('#project').val();

	var newWidth = $('#width').val();
	$(project).animate({width: newWidth});

	var newText = $('#description').val();
	$(project + " .project-description").text(newText);
}

function projectClick(e) {
	e.preventDefault();
	var projectTitle = $(this).find("p").text();
	var jumbotronHeader = $(".jumbotron h1");
	jumbotronHeader.text(projectTitle);

	var containingProject = $(this).closest(".project"); 
	var description = $(containingProject).find(".project-description");
	if (description.length == 0) { 
	   	$(containingProject).append("<div class='project-description'><p>Description of the project.</p></div>"); 
	} else { 
		$(".project-description").hide();
	}
}