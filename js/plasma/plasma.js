$(document).ready(function(){
	/** Run slideshow **/
	runSlideShow(20, 494, 2000, 'imgreference', 'ssimages');
	
	var eventListHeight = $("#eventlist").css("height");
	var programListHeight = $("#programlist").css("height");
	var resourcesListHeight = $("#resourceslist").css("height");
	var peopleListHeight = $("#peoplelist").css("height");
	var organizationsListHeight = $("#organizationslist").css("height");
	
	pushDiv(50/16);
	
	setUpDropBox("#eventlist");
	setUpDropBox("#programlist");
	setUpDropBox("#resourceslist");
	setUpDropBox("#peoplelist");
	setUpDropBox("#organizationslist");
	
	checkDropDownBox(eventListHeight, "#eventlist", "#eventdropbox");
	checkDropDownBox(programListHeight, "#programlist", "#programdropbox");
	checkDropDownBox(resourcesListHeight, "#resourceslist", "#resourcesdropbox");
	checkDropDownBox(peopleListHeight, "#peoplelist", "#peopledropbox");
	checkDropDownBox(organizationsListHeight, "#organizationslist", "#organizationsdropbox");
});

function setUpDropBox(divId) {
	$(divId).css("display", "none");
	$(divId).css("height", "0");
}

function checkDropDownBox(boxHeight, divId, listItemId) {
	var sizeUpAnimationDone = true;
	$(listItemId).on({
   	   mouseenter: function () {
		  if(!$(divId).is(':animated')) {
		  $(divId).css("display", "block");
		  $(divId).animate({height:boxHeight},500);
		  }
	    },
   	   mouseleave: function () {
		  if(sizeUpAnimationDone) {
          $(divId).animate({height:"0"},500);
		  sizeUpAnimationDone = false;
		  $(divId).promise().done(function() {
			    sizeUpAnimationDone = true;
			  	$(divId).css("display", "none");
		  });
        }
	   }
	});
}

function pushDiv(contentMarginHeight) {
	/** Set variables **/
	var contentHeight = $("#content").height();
	var footerHeight = $("#footer").height();
	var screenHeight = $(window).height();
	var paragraphHeight = $("#plasmacontent").height()/16;
	var initialHeight = screenHeight;
	var difference = (screenHeight-contentHeight-footerHeight)/16;
			
	var imgHeight = $("#imgreference").height()/16;
	imgHeight += contentMarginHeight;
	$("#plasmacontent").css("margin-top", imgHeight + 'em');
	//$("#push").css("height", imgHeight + contentMarginHeight + paragraphHeight + 'em');
	$("#push").css("height", contentMarginHeight + 'em');
	
	$(window).resize(function(){
		 contentHeight = $("#content").height();
		 footerHeight = $("#footer").height();
		 if(screenHeight < initialHeight) {
		 	screenHeight = $(window).height();
		 }
		 difference = (screenHeight - contentHeight - footerHeight)/16;
		 $("#push").css("height", difference + 'em');
	 });
	
}