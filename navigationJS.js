// JavaScript Document
/* Set the width of the side navigation to 250px */

	
		
	
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}

/*document.getElementById("mySidenav").style.width = "250px";
	(document).ready(function(){
			
function openNav() {
   $("#mySidenav").style.width = "250px";
}

/* Set the width of the side navigation to 0 */
/*function closeNav() {
   $("#mySidenav").style.width = "0";
} 
});*/