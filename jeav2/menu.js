//*******************boton menu para celulares************************
var btmMenu = document.getElementById("btm-menu");
var nav = document.getElementById("menu");

btmMenu.addEventListener("click",function(){
	if (nav.style.left == "-110%") {
		nav.style.left="0%";
	}else{
		nav.style.left="-110%";
	}
	
})