const body = document.querrySelector('body');

// random color generator
var randomColor = function(){
  var rvalue = function() {
  	return Math.round(Math.random()*255); 
  }

 	return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
}

// create event listener to change background color on button click
body.onclick = function(){
	this.style.backgroundColor = randomColor();
}
