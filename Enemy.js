/**
 * Created by Witcher on 06.08.2016.
 */
function Enemy (x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.color = color;
};

Enemy.prototype.draw = function () {
    drawRect(this.x, this.y, this.width, this.height, this.color)
};
Inherit(Enemy,GameLoop);