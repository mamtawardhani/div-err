class Pig extends BaseClass{
  constructor(x,y){
    super(x,y,50,50)
    this.image=loadImage("sprites/enemy.png")
   this.visiblelity=255
  }
display(){
 
  if(this.body.speed<2.4){
    super.display()
  }
  else{
    World.remove(world,this.body)
   push()
    tint(255,this.visiblelity)
    
    this.visiblelity=this.visiblelity-5
    image(this.image,this.body.position.x,this.body.position.y,50,50)
    pop()
  }
}
}






