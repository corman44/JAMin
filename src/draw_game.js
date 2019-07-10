
var c = document.getElementById("ttt_board");
var ctx = c.getContext("2d");
ctx.beginPath();
ctx.moveTo(300,0);
ctx.lineTo(300,900);
ctx.stroke();
ctx.moveTo(600,0);
ctx.lineTo(600,900);
ctx.stroke();
ctx.moveTo(0,300);
ctx.lineTo(900,300);
ctx.stroke();
ctx.moveTo(600,0);
ctx.lineTo(600,900);
ctx.stroke();