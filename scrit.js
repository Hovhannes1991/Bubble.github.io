var audios = [];
audios[1] = new Audio("src/audios/1.wav");
audios[2] = new Audio("src/audios/2.wav");
audios[3] = new Audio("src/audios/3.wav");
audios[4] = new Audio("src/audios/4.wav");
audios[5] = new Audio("src/audios/5.wav");

function myScript(x,y) {

var image = "<img src = 'src/bubble-1.png'>";
var block = document.getElementById('main-block');


for (var col = 0; col < y; col++){
	for (var row = 0; row < x; row++){
		block.innerHTML = block.innerHTML + image;		
	}
	block.innerHTML = block.innerHTML + "<br>";	
}

var images  = document.getElementsByTagName("img");
for (var listener = 0; listener < images.length; listener++){
	images[listener].addEventListener("click", relax);
}

}



function restart(evt) {
	var y = document.getElementById("select-1").value;
	var x = document.getElementById("select-2").value;
	document.getElementById("main-block").innerHTML = "";
	document.getElementById("main-block").style.width = x * 79 + x * 30 + "px";
	document.getElementById("main-block").style.height = y * 79 + y * 35 + "px";
	myScript(x,y);
}

function relax() {
	if (this.src.charAt(this.src.length - 5) == "1"){
	this.src = "src/bubble-2.png";
	var sound = Math.floor(Math.random() * 5 + 1);
	audios[sound].play();
	}	
}
