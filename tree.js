class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.image=loadImage("Plucking mangoes/tree.png")
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
     // fill("salmon");
      //rect(pos.x, pos.y, this.width, this.height);
      image(this.image,pos.x-250,pos.y-500,this.width+200,this.height+150)
    }
  };

