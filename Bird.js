class Bird extends BaseClass{

  constructor(x,y){
    super(x,y,50,50)
    this.image=loadImage("sprites/bird.png")
    this.x=[]
    this.y=[]
  }
  
  display(){
    //this.body.position.x=mouseX;
   // this.body.position.y=mouseY;
    super.display()
if(this.body.velocity.x>10 && this.body.position.x>200){
var xpos=[this.body.position.x]
var ypos=[this.body.position.y]
this.x.push(xpos)  
this.y.push(ypos)
} 
for(var i =0; i<this.x.length ; i=i+1)
{fill("white")
   ellipse(this.x[i],this.y[i],10,10)} 
}
}
