$(document).ready(function(){
$(".faf").css("font-color", "white");
$(".footer").css("background-color", "purple");
$(".semi-footer-text, .footer, #footerRtText, #contact-me-text").addClass("text-center");
//$(".footer-icon-span").addClass("center-block");
$("#contact-me-text").text("I changed this with jQuery");
$(".contact-me-hidden").hide("true");
$(".btn-head").addClass("navbar-btn");



$("#fafon").tooltip({
	trigger: "hover",
	title: "TEXT ME"
});




});

