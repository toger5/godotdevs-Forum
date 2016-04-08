// The purpose of this code is to fix the height of overflow: auto blocks, because some browsers can't figure it out for themselves.


function smf_codeBoxFix()
{
	var codeFix = document.getElementsByTagName('code');
	for (var i = codeFix.length - 1; i >= 0; i--)
	{
		if (is_webkit && codeFix[i].offsetHeight < 20)
			codeFix[i].style.height = (codeFix[i].offsetHeight + 20) + 'px';

		else if (is_ff && (codeFix[i].scrollWidth > codeFix[i].clientWidth || codeFix[i].clientWidth == 0))
			codeFix[i].style.overflow = 'scroll';

		else if ('currentStyle' in codeFix[i] && codeFix[i].currentStyle.overflow == 'auto' && (codeFix[i].currentStyle.height == '' || codeFix[i].currentStyle.height == 'auto') && (codeFix[i].scrollWidth > codeFix[i].clientWidth || codeFix[i].clientWidth == 0) && (codeFix[i].offsetHeight != 0))
			codeFix[i].style.height = (codeFix[i].offsetHeight + 24) + 'px';
	}
}

// Add a fix for code stuff?
if ((is_ie && !is_ie4) || is_webkit || is_ff)
	addLoadEvent(smf_codeBoxFix);

// Toggles the element height and width styles of an image.
function smc_toggleImageDimensions()
{
	var oImages = document.getElementsByTagName('IMG');
	for (oImage in oImages)
	{
		// Not a resized image? Skip it.
		if (oImages[oImage].className == undefined || oImages[oImage].className.indexOf('bbc_img resized') == -1)
			continue;

		oImages[oImage].style.cursor = 'pointer';
		oImages[oImage].onclick = function() {
			this.style.width = this.style.height = this.style.width == 'auto' ? null : 'auto';
		};
	}
}

// Add a load event for the function above.
addLoadEvent(smc_toggleImageDimensions);

// Adds a button to a certain button strip.
function smf_addButton(sButtonStripId, bUseImage, oOptions)
{
	var oButtonStrip = document.getElementById(sButtonStripId);
	var aItems = oButtonStrip.getElementsByTagName('span');

	// Remove the 'last' class from the last item.
	if (aItems.length > 0)
	{
		var oLastSpan = aItems[aItems.length - 1];
		oLastSpan.className = oLastSpan.className.replace(/\s*last/, 'position_holder');
	}

	// Add the button.
	var oButtonStripList = oButtonStrip.getElementsByTagName('ul')[0];
	var oNewButton = document.createElement('li');
	setInnerHTML(oNewButton, '<a href="' + oOptions.sUrl + '" ' + ('sCustom' in oOptions ? oOptions.sCustom : '') + '><span class="last"' + ('sId' in oOptions ? ' id="' + oOptions.sId + '"': '') + '>' + oOptions.sText + '</span></a>');

	oButtonStripList.appendChild(oNewButton);
}

// Adds hover events to list items. Used for a versions of IE that don't support this by default.
var smf_addListItemHoverEvents = function()
{
	var cssRule, newSelector;

	// Add a rule for the list item hover event to every stylesheet.
	for (var iStyleSheet = 0; iStyleSheet < document.styleSheets.length; iStyleSheet ++)
		for (var iRule = 0; iRule < document.styleSheets[iStyleSheet].rules.length; iRule ++)
		{
			oCssRule = document.styleSheets[iStyleSheet].rules[iRule];
			if (oCssRule.selectorText.indexOf('LI:hover') != -1)
			{
				sNewSelector = oCssRule.selectorText.replace(/LI:hover/gi, 'LI.iehover');
				document.styleSheets[iStyleSheet].addRule(sNewSelector, oCssRule.style.cssText);
			}
		}

	// Now add handling for these hover events.
	var oListItems = document.getElementsByTagName('LI');
	for (oListItem in oListItems)
	{
		oListItems[oListItem].onmouseover = function() {
			this.className += ' iehover';
		};

		oListItems[oListItem].onmouseout = function() {
			this.className = this.className.replace(new RegExp(' iehover\\b'), '');
		};
	}
}

// Add hover events to list items if the browser requires it.
if (is_ie7down && 'attachEvent' in window)
	window.attachEvent('onload', smf_addListItemHoverEvents);

var toggled = true;


jQuery(function($) { // DOM is now read and ready to be manipulated

	if(userLoggedIn){
		console.log('userLoggedIN')
		createUserSeidebarToggle();
		function createUserSeidebarToggle(){
			var size = $(".user").css("width")
			var padding = $(".user").css("padding")
			size = parseInt(size.slice(0,3));
			padding = parseInt(padding.slice(0,2));

			var amount = "-" + String(size + padding - 30) + "px"

			$("#toggle-in").css("opacity", "1.0");
			$("#toggle-out").css("opacity", "0.0");
			$(".user").css("right", amount);

			console.log('userLoginSidebarCreated')

		  $("#toggle-user-button").click(function (event) {
				console.log('toggleClicked')
				var size = $(".user").css("width")
				var padding = $(".user").css("padding")
				size = parseInt(size.slice(0,3));
				padding = parseInt(padding.slice(0,2));

				var amount = "-" + String(size + padding - 30) + "px"
				if (toggled){
					$("#toggle-out").animate({opacity: "1.0"});
					$("#toggle-in").animate({opacity: "0.0"});
					amount = "0px"
					toggled = false
				}
				else{
					toggled = true
					$("#toggle-out").animate({opacity: "0.0"});
					$("#toggle-in").animate({opacity: "1.0"});
				}
				$(".user").animate({
	    		right: amount
  			});
		  });
	}
}
	$(".feature-panel").not(".feature-box").click(function (event) {
		console.log("clicked on a feature box");
		var clicked = event.target
		if(event.target.nodeName == "IMG" || event.target.nodeName == "A" ){
			clicked = event.target.parentNode
		}
		scrollToInBar(clicked);
		setTransparency($(clicked).position().left);

	});
	function setTransparency(pos){
		var containerSize = $("#info_bar").width()
		var centerOffset = (containerSize / 2) - ($(".feature-panel").width() / 2) - pos
		for(i = 0; i < $(".feature-panel").length; i++){
			console.log($(".feature-panel").length);
			var panel = $(".feature-panel")[ i ];
			//var centerOffset = (containerSize / 2) - (parseInt($(".feature-panel").css("width")) / 2)
			var a = $(panel).position().left + $(".feature-panel").width()
			var b = $("#featured-projects").position().left - (containerSize / 2)
			var panel_relativeToCenterPos = $(panel).position().left + ($(".feature-panel").width()/2) +	centerOffset - (containerSize / 2)
			var opc = 1 - Math.abs((panel_relativeToCenterPos * panel_relativeToCenterPos) / (containerSize * 400))
			$(panel).stop()
			$(panel).animate({opacity: opc});
		}
	}
	function scrollToInBar(objToscrollTo){
		var pos = $(objToscrollTo).position().left
		var containerSize = $("#info_bar").width()
		var centerOffset = (containerSize / 2) - ($(".feature-panel").width() / 2) - pos
		$("#featured-projects").animate({
			left: centerOffset
		});
		setTransparency(pos);
	}
	function jumpToInBar(objToscrollTo){
		var pos = $(objToscrollTo).position().left
		var containerSize = $("#info_bar").width()
		var centerOffset = (containerSize / 2) - ($(".feature-panel").width() / 2) - pos
		$("#featured-projects").css("left",centerOffset + "px");
		setTransparency(pos);
	}
	jumpToInBar(/*currently centeret position left of featureList*/ $(".feature-panel").not(".feature-box")[ Math.floor($(".feature-panel").length/2) ]);
});

/*addToggelToUserRight();
/*$("#user-button-toggle").click(function(){
		console.log('Hallo')
    $(".user").animate({
        right: '-250px',
        opacity: '0.5',
        height: '150px',
        width: '150px'
    });
});*/
