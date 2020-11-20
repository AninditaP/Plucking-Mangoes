class Launcher{

    constructor(bodyA,pointB){

        var option={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:5
        }

        this.bodyA=bodyA;
        this.pointB=pointB;

        this.sling=Constraint.create(option);
        World.add(world,this.sling);
    }

    attach(body){
        this.sling.bodyA=body;
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){

     if(this.sling.bodyA){
       var pos =this.sling.bodyA.position
       var posB= this.pointB
       line (pos.x,pos.y,posB.x,posB.y);
     }
    }
}