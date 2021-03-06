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
	this.speed = 5;
	this.xvel = 1;
	this.yvel = 1;
	this.image = new Image();
	this.image.src = "bacteria.png"
	this.draw = function() {
		var theta = this.rotate(this.xvel,this.yvel);
		ctx.save(); 
		ctx.translate(this.x - this.image.width/2, this.y - this.image.height/2);
		ctx.rotate(theta);
		console.log(theta)
		ctx.drawImage(this.image, 0, 0);
		ctx.restore(); 
			this.x += this.xvel;
			this.y += this.yvel;	
		}
	this.rotate = function(x,y){
		var theta = Math.atan(y/x);
		theta += ((x<0)?-1:1)*Math.PI/2;
		return theta;
	}
}

canvas.onmousedown = function(e){
	var xdist = e.x - bacteria.x;
	var ydist = e.y - bacteria.y;

	if(ydist == 0) {
		if(xdist >= 0) {
			bacteria.xvel = xdist/bacteria.speed;
			bacteria.yvel = 0;
		}else{
			bacteria.xvel = -1*xdist/bacteria.speed;
			bacteria.yvel = 0;
		}
		return;
	}

	var c = ydist/xdist;
	var move = Math.sqrt((bacteria.speed*bacteria.speed)/((c*c)+1)
)
	if(xdist >= 0){
		bacteria.xvel = move;
	}else{
		bacteria.xvel = move *-1;
	}
	if(c < 0) {
	c *= -1;
	}
	if(ydist >= 0){
		bacteria.yvel = move*c;
	}
	else{
		bacteria.yvel = -1*move*c;
	}
}