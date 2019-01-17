function platform(x, y, w, c) {

    this.x = x;
    this.y = y;

    this.w = w; //width
    this.c = c; //color
};

platform.prototype.draw = function () {

    stroke(255);
    strokeWeight(3);
    fill(this.c);
    rect(this.x, this.y, this.w, 15);
};

platform.prototype.collidesWith = function (doodler) {

    var pT = this.y; //platform top
    var dB = doodler.loc.y + doodler.s / 2; //doodler bottom

    stroke("#FF0000");
    strokeWeight(10);

  if (Math.abs(pT - dB) < 5 && doodler.vel.y > 0){
      var lX = this.x;
      var rX = this.x + this.w;

      var x = doodler.loc.x;
      line(lX, pT, rX, pT);
      if (x >= lX && x <= rX){
          return true;
      }
  }

  return false;
};
