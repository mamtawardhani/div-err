class rope{
    constructor(B1,P2){
        var options={
        bodyA:B1,
        pointB:P2,
        length:10,
        stiffness:0.1
                }
                this.body=Matter.Constraint.create(options)
                World.add(world,this.body)
                this.pointB=P2
                this.sling1=loadImage("sprites/sling1.png")
                this.sling2=loadImage("sprites/sling2.png")
                this.sling3=loadImage("sprites/sling3.png")
    }
    display(){
       if(this.body.bodyA){ 
        push()
           strokeWeight(5)
           stroke(22,48,8)
           line(this.body.bodyA.position.x-30,this.body.bodyA.position.y,this.pointB.x,this.pointB.y+30)
           line(this.body.bodyA.position.x,this.body.bodyA.position.y,this.pointB.x+30,this.pointB.y+30)
           pop()
           image(this.sling3,this.body.bodyA.position.x-30,this.body.bodyA.position.y-20,10,30)

           
        }
       image(this.sling1,200,50)
       image(this.sling2,175,50)
       
    }
    fly(){
        this.body.bodyA=null
    }
}