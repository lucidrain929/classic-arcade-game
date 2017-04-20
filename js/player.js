 Player = function(x,y) {
	Entity.call(this, x, y);


    this.sprite = "images/char-pink-girl.png";
	this.LEFT = "left";
	this.UP = "up";
	this.RIGHT = "right";
	this.DOWN = "down";
    this.keyPressedThisFrame = null;/*？？？？？*/

	this.MOVE_X_AMT = 101;
	this.MOVE_Y_AMT = 83;
    this.MAX_X = 404;
    this.MIN_X = 0;    
    this.MIN_Y = -11;
    this.MAX_Y = 404;
    this.START_X=202;
};

Player.prototype = Object.create(Entity.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {
	if ( this.keyPressedThisFrame == this.LEFT && this.x != this.MIN_X ) {
		this.x -= this.MOVE_X_AMT;//why cannot I write"this.x -= this.MOVE_X_AMT*dt";
	}
    	/*if(this.LEFT) means if(this.LEFT==allowedKeys[e.keyCode.37])*/
	else if ( this.keyPressedThisFrame == this.UP && this.y != this.MIN_Y ) {
		this.y -= this.MOVE_Y_AMT;
	}
	else if ( this.keyPressedThisFrame == this.RIGHT && this.x != this.MAX_X ) {
		this.x += this.MOVE_X_AMT;
	}
	else if ( this.keyPressedThisFrame == this.DOWN && this.y != this.MAX_Y ) {
		this.y += this.MOVE_Y_AMT;
	}
	else if(this.y==this.MIN_Y) {
		this.y = this.MAX_Y;
		this.x = this.START_X;
	}

    /*console.log(this.y);
	console.log(this.x);*/

	this.keyPressedThisFrame = "";
};

Player.prototype.handleInput = function( keyPressed ) {
	this.keyPressedThisFrame = keyPressed;
};

Player.prototype.onCollision = function() {
	// TODO: What happends when the player collides with something? (He resets to starting position)
	this.x = this.START_X;
	this.y = this.MAX_Y;
};