canvas = document.getElementById("canvas1");
ctx = canvas.getContext("2d");
color = "black";

ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.linewidth = 6;
ctx.arc(200,200,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "black";
ctx.linewidth = 6;
ctx.arc(250,200,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.linewidth = 6;
ctx.arc(300,200,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "green";
ctx.linewidth = 6;
ctx.arc(225,250,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "yellow";
ctx.linewidth = 6;
ctx.arc(275,250,40,0,2 * Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",mymousedown);
function mymousedown(e){
    color = document.getElementById("INPUT11").value;
    mouse_x = e.clientX-canvas.offsetLeft;
    mouse_y = e.clientY-canvas.offsetTop;
   circle(mouse_x,mouse_y);
    console.log("x=" + mouse_x + "y=" + mouse_y );
}
function circle(mouse_x,mouse_y){
    ctx.beginPath();
ctx.strokeStyle = color;
ctx.linewidth = 2;
ctx.arc(mouse_x,mouse_y,40,0,2 * Math.PI);
ctx.stroke();
}
function CLEAR(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}