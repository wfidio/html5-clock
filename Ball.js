/**
 * Created by user on 2016-06-27.
 */
function Ball(posX,posY,color){
    this.posX = posX;
    this.posY = posY;
    //this.type = type;
    this.velocityX = 0;
    this.velocityY = 0;
    this.color = color;
    this.move = function(){
        this.posX += this.velocityX;
        this.velocityY += GRAVITY;
        this.velocityY = (this.velocityY>0)?(this.velocityY-FRICTION):(this.velocityY+FRICTION);
        this.posY += this.velocityY;
    };
    this.distance = function(ball){
        return Math.sqrt(Math.pow((this.posX-ball.posX),2)+Math.pow((this.posY-ball.posY),2));
    };
    this.isCollapsed = function(ball){
        return this.distance(ball)-2*RADIUS;
    };
}

Ball.prototype.setX = function(posX){
    this.posX = posX;
};

Ball.prototype.setY = function(posY){
    this.posY = posY;
};

Ball.prototype.setVelocityX = function(velocityX){
    this.velocityX = velocityX;
};

Ball.prototype.setVelocityY = function(velocityY){
    this.velocityY = velocityY;
};


//Ball.prototype.setType = function(type){
//    this.type = type;
//}