// Enemies our player must avoid
var Enemy = function(x, y) {
    Entity.call(this, x, y);
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.MAX_X = 404;
    this.MIN_X = 0;    
    this.MIN_Y = -11;
    this.MAX_Y = 404;
    this.moveDIST = 50;// Movespeed per second( 50 pixels per second ) - use this variable 
    this.START_X = -101;
    this.END_X = 505;
};

Enemy.prototype = Object.create(Entity.prototype);
Enemy.prototype.constructor = Enemy;

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    if (this.x <= this.END_X && this.x >= this.START_X) {
        this.x += this.moveDIST*dt;
    }
    else {
        this.x = this.START_X;
    }
    /*dt represents the time delta which means the time difference between this frame and last frame*/
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};