/**
 * Created by Witcher on 06.08.2016.
 */
function GameLoop() {
    this.nodes = [];
    this.map = new Map()
    //будет реализовывать игровую логику (создавать объекты, дивгать их, давать им команду на отрисовку).
};



GameLoop.prototype.mapLoad = function () {
    var dOffsetX = (width - (this.map.tiles[0].length * (this.map.width + this.map.offset))) / 2;

    for (var t  in this.map.tiles) {
        for (var t1 in this.map.tiles[t]) {
            var tile = this.map.tiles[t][t1];
            var dx = dOffsetX + t1 * (this.map.width + this.map.offset);
            var dy = this.map.offset + t * (this.map.height + this.map.offset);

            if (tile == 1) {
                this.add(dx, dy, this.map.width, this.map.height, this.map.color);
            }

        }

    }
};
GameLoop.prototype.add = function (x, y, w, h, color) {
    var tmp = new Enemy(x,y,w,h,color);
    this.nodes.push(tmp)
};
GameLoop.prototype.clear = function () {
    this.nodes = [];
};
GameLoop.prototype.destroy = function (id) {
    this.nodes.slice(id,1)
}
GameLoop.prototype.draw =function () {
  for (en in this.nodes){
      this.nodes[en].draw()
  }  
};