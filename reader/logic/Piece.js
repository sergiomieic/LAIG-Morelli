function Piece(scene, player, x, y, type) {
    this.player = player;
    this.scene = scene;
    this.x = x;
    this.y = y;
    if (type == "throne") {
        this.primitive = new MyCrown(scene);
    } else
        this.primitive = new MyPiece(scene);
    this.highlighted = false;
    this.animation;
}

Piece.prototype.constructor = Piece;

Piece.prototype.display = function() {
    this.scene.pushMatrix();
    if (this.player == 1) {
        this.scene.white.apply();
    } else if (this.player == 0) {
        this.scene.black.apply();
    }
    
    if (this.animation && !this.animation.done) {
        var matrix = this.animation.getMatrix();
        this.scene.multMatrix(matrix);
    } else {
        if (this.highlighted) {
            this.scene.translate(this.x, 1, this.y);
        } else {
            this.scene.translate(this.x, 0.7, this.y);
        }
    }
    
    this.primitive.display();
    
    this.scene.popMatrix();
}

Piece.prototype.setHighlighted = function() {
    this.highlighted = !this.highlighted;
}
