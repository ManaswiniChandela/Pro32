class Box {
    constructor(x, y, width, height){
      var options = {
        restitution : 0.4,
        friction : 0.0
        
      }
      
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.Visibility = 255;
      World.add(world,this.body);
      this.image=loadImage("pink.png");
    }

    display(){
      var angle = this.body.angle;
      var pos = this.body.position;
      if(this.body.speed<3){
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0,0,this.width,this.height);
      pop();

      }
      else{
        World.remove(world,this.body)
        push();
        this.Visibility = this.Visibility-1;
        console.log(this.Visibility);
        tint(255,this.Visibility);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
        
      }
    }

    score(){
      if(this.Visibility<0 && this.Visibility>-105){
        score++;
      }
    }    
}