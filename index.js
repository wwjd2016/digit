window.onload = function() {
  var can = document.getElementById('digit');
  var ctx = can.getContext('2d');
  can.width = 1000;
  can.height = 500;
  var mydraw = new Digit(can);
  mydraw.run(5, 5, 10);
}

var Digit = function (canvas) {
  this.ctx = canvas.getContext('2d');
  this.CAN_W = canvas.width;
  this.CAN_H = canvas.height;
  this.numColor = '#558abb';
  this.time = null;
}

Digit.prototype.drawArc = function(x, y, r) {
  var ctx = this.ctx;
  ctx.fillStyle = this.numColor;
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2*Math.PI, false);
  ctx.fill();
}
//要画的数字、小球半径、小球之间距离的一半、数字之间的间距、数字的left值
Digit.prototype.drawNum = function(num, r, p, m, left) {
  var ctx = this.ctx;
  for(var i = 0;i<digit[num].length;i++) {
    for (var j = 0;j<digit[num][i].length;j++){
      if (digit[num][i][j] === 1) {
        this.drawArc((2*j+1)*(r+p)+m+left, (2*i+1)*(r+p), r)
      }
    }
  }
}

Digit.prototype.render = function(r, p, m) {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var second = time.getSeconds();
    this.ctx.clearRect(0,0,this.CAN_W, this.CAN_H);
    this.drawNum(parseInt(hours/10), 5, 2, 10, 0);
    this.drawNum(parseInt(hours%10), 5, 2, 10, 14*(r+p));
    this.drawNum(10, 5, 2, 10, (14+14)*(r+p));
    this.drawNum(parseInt(minutes/10), 5, 2, 10, (14+14+8)*(r+p));
    this.drawNum(parseInt(minutes%10), 5, 2, 10, (14+14+14+8)*(r+p));
    this.drawNum(10, 5, 2, 10, (14+14+14+8+14)*(r+p));
    this.drawNum(parseInt(second/10), 5, 2, 10, (14+14+14+8+14+8)*(r+p));
    this.drawNum(parseInt(second%10), 5, 2, 10, (14+14+14+8+14+8+14)*(r+p));
}

Digit.prototype.run = function(r, p, m) {
  var self = this;
  this.time = setInterval(self.render.bind(self, r, p), 1000);
}











