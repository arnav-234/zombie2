class cover{
    constructor(x,y,w,h)
{
var options={
isStatic:true,
restitution:0.4,
friction:3,
density:1.2
}
this.x=x
this.y=y
this.w=w
this.h=h

this.body=Bodies.rectangle(this.x,this.y,this.w,this.h,options)
World.add(world,this.body)
}
display(){
    fill(0,255,0)
    rect(this.x,this.y,this.w,this.h)
    
}
}