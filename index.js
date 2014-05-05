module.exports = function(x0, y0, x1, y1) {
  var dx = x1 - x0;
  var dy = y1 - x0;
  var adx = Math.abs(dx);
  var ady = Math.abs(dy);
  var line = [];
  var eps = 0;
  var sx = dx > 0 ? 1 : -1;
  var sy = dy > 0 ? 1 : -1;
  if(adx > ady) {
    for(var x = x0, y = y0; x != x1; x += sx) {
      line.push({
        x: x,
        y: y
      });
      eps += ady;
      if((eps<<1) >= adx) {
        y += sy;
        eps -= adx;
      }
    }
  } else {
    for(var x = x0, y = y0; y != y1; y += sy) {
      line.push({
        x: x,
        y: y
      });
      eps += adx;
      if((eps<<1) >= ady) {
        x += sx;
        eps -= ady;
      }
    }
  }
  return line;
};
