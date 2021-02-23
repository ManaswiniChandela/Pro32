class Polygon {
    constructor(x, y, width, height){
      var options = {

        restitution : 0.4,
        friction : 0.0
      }
      this.image = loadImage("polygon.png");
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world,this.body);

    }

    display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();
    }
  
}