// JavaScript Document		

function openNav() {
	document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}
/* pour la recherche nom fonction change*/
function openRech() {
	document.getElementById("myNav").style.width = "100%";
}

function closeRech() {
	document.getElementById("myNav").style.width = "0%";
}
/* pour changer la couleur du menu après un scrollTop*/
$(document).ready(function () {
	$(window).scroll(function () {
		var hauteurFenetre = $(window).scrollTop();
		if (hauteurFenetre > 250) {
			$(".navigation").css({
				color: "black"
			});
			$(".recherche").css({
				background: "url(search_50_noir.png) top right no-repeat"
			});
		} else {
			$(".navigation").css({
				color: "white"
			});
			$(".recherche").css({
				background: "url(search_50.png) top right no-repeat"
			});
		}
	});
});
