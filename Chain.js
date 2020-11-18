class Chain {
         constructor (newBodyA, newBodyB) {
            var options  = {
                bodyA : newBodyA,
                bodyB : newBodyB,
                stiffness : 0.04,
                length : 100
            }
            this.chain = Constraint.create(options);
            World.add(world, this.chain);
        
        
        }
 display(){
    line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x,this.chain.bodyB.position.y);
 }

}











