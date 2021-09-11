var box;

function setup() 
{
  createCanvas(400, 400);
  box=new Box(200,180,20,20,1,3);
}

function draw() 
{
  background(220);
  box.show()
  box.move()
  box.moveUp()
}

