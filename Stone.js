class Stone{
	constructor(x,y,r)	{
	// assign options to the stone
		var options = {
			'restitution':0.3,
			'friction':5,
			'density':1
		}
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.rectangle(this.x,this.y,options);
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			pop();
	}

}