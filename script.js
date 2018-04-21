

 var socket ;
 var x=10;
 var y=10;
 var d=0;
function setup() {
    socket = io.connect('http://localhost:3000');
    createCanvas(900, 600,WEBGL);  
    background("grey");
    img = loadImage("planet.jpg");
    img1 = loadImage("2k_sun.jpg");
  }

function draw()
{
    background("grey");
    push();
    
    
    socket.on("newy", function (data) {
        d=data;
        console.log(data)
     })
     rotateY(d);
    rotateZ(0.01);
    texture(img);
    
    sphere(100);
    pop();
   
    
   
 
}
     
   
    
  