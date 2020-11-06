const content = document.querySelector('col-md-4');

// random color generator
var randomColor = function(){
  var rvalue = function() {
  	return Math.round(Math.random()*255); 
  }

 	return 'rgb(' + rvalue() + "," + rvalue() + "," + rvalue() + ")";
}

// create event listener to change background color on button click
content.onclick = function(){
	const body = document.querySelector('body');
	body.style.backgroundColor = randomColor();
}
