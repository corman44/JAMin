
var c = document.getElementById("myCanvas");
var ctx = c.getContext("ttt_board");
ctx.beginPath();
ctx.moveTo(300,0);
ctx.lineTo(300,900);
ctx.moveTo(600,0);
ctx.lineTo(600,900);
ctx.moveTo(0,300);
ctx.lineTo(900,300);
ctx.moveTo(600,0);
ctx.lineTo(600,900);