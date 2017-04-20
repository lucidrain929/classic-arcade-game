var Entity = function(x, y) {
	this.x = x;
	this.y = y;
	this.sprite;
}

Entity.prototype.onCollision = function() {
	// Leave empty for player and enemy to override
};

Entity.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Entity.prototype.update = function() {
	// Leave empty for player and enemy to override
};

Entity.prototype.getX=function(){
	return this.x;
};

Entity.prototype.getY=function(){
	return this.y;
};