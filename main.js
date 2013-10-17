var canvas = document.getElementById('mycanvas');
var ctx = canvas.getContext('2d');
var x = 0;
var bacteria = new Bacteria();
var background = new Image();
background.onload = function(){
	render();
};
background.src = "background.png";
function render(){
	ctx.clearRect(0,0,canvas.width,canvas.height);
	ctx.drawImage(background,0,0,canvas.width,canvas.height);
	bacteria.draw();	
	requestAnimationFrame(render);
			
}

function Bacteria(){
	this.x = 0;
	this.y = 0;
	this.xvel = 1;
	this.yvel = 1;
	this.image = new Image();
	this.image.src = "bacteria.png"
	this.draw = function() {
		ctx.drawImage(this.image,this.x,this.y,this.image.width,this.image.height);
		this.x += this.xvel;
		this.y += this.yvel;	
	}
	this.image.onload = function(){
		render();
	}
}

canvas.onmousedown = function(e){
	bacteria.xvel = (e.x - bacteria.x)/100;
	bacteria.yvel = (e.y - bacteria.y)/100;
}