var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var image = new Image();
var x = 0;
image.onload = function(){
	render();
	
}

function render(){
	requestAnimationFrame(render);
	ctx.drawImage(image,x,0,image.width,image.height);
	x++;
}
image.src = "bacteria.png";
