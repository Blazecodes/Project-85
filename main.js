//Create a reference for canvas 

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext('2d');

//Give specific height and width to the car image

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

green_car_width=75;
green_car_height=100;

//Set initial position for a car image.

green_car_x=5;
green_car_y=225;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag= new Image();
	background_imgTag.onload=uploadBackground;
	background_imgTag=background_image;

	green_imgTag=new Image();
	green_imgTag.onload=uploadgreencar;
	green_imgTag=greencar_image;
}

function uploadBackground() {
	//Define function ‘uploadBackground’
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_image,green_car_x,green_car_y,green_car_width,green_car_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	green_car_y=green_car_y-10;
	console.log(green_car_y)
	uploadBackground;
	uploadgreencar;
}

function down()
{
	//Define function to move the car downward
	green_car_y=green_car_y+10;
	console.log(green_car_y)
	uploadBackground;
	uploadgreencar;
}

function left()
{
	//Define function to move the car left side
	green_car_x=green_car_x-10;
	console.log(green_car_x)
	uploadBackground;
	uploadgreencar;
}

function right()
{
	//Define function to move the car right side
	green_car_x=green_car_x+10;
	console.log(green_car_x)
	uploadBackground;
	uploadgreencar;
}
