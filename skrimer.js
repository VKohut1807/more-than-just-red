'use strict';

window.onload = function(){
	var a = document.querySelector(".Log_el2");
		a.onmouseout = function(e){
			document.getElementById("fon2_el1").style.display="none";
		}
		a.onmouseover = function(e){
			document.getElementById("fon2_el1").style.display="block";
			new Audio('https://sound-pack.net/download/Sound_01896.mp3').play(); return false;
		}
}