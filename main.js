var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var image = new Image();
image.onload = function(){
	console.log(ctx)
	ctx.drawImage(this,0,0,this.width,this.height);
}
image.src = "bacteria.png";
