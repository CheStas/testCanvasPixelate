const mainCanvas = document.getElementById('mainCanvas');
const pixelatedCanvas = document.getElementById('pixelatedCanvas');
const ctx = mainCanvas.getContext('2d');
const bcv = pixelatedCanvas.getContext('2d');

const buttonLeft = document.getElementById('left');
const buttonRight = document.getElementById('right');
const buttonTop = document.getElementById('top');
const buttonDown = document.getElementById('down');

var img = new Image();
let imgWidth = 200;
let imgHeight = 200;
let pixeledX = 50;
let pixeledY = 150;
let myImageData;
img.src = 'img12.jpg'
img.addEventListener("load", function() {
   draw()
});

function draw() {
  const blocksize = 14;
  bcv.drawImage(img, 0, 0, imgWidth, imgHeight);
  for (var x = 1; x < imgWidth; x += 1) {
    for(var y = 1; y < imgHeight; y += 1) {
      var pixel = bcv.getImageData(x, y, 1, 1);
      ctx.fillStyle = "rgb("+pixel.data[0]+","+pixel.data[1]+","+pixel.data[2]+")";
      if (x > pixeledX && x < pixeledX + 100 && y > pixeledY && y < pixeledY + 100) {
        if (x % blocksize === 0) {
          ctx.fillRect(x, y, x + blocksize - 1, y + blocksize - 1);
        }
      } else {
        ctx.fillRect(x, y, 1, 1);
      }
    }
  }
}

buttonLeft.addEventListener('click', function(e) {
  console.log('buttonLeft');
  ctx.clearRect(0, 0, 400, 400);
  pixeledX = pixeledX - 10;
  draw();
})

buttonRight.addEventListener('click', function(e) {
  console.log('buttonLeft');
  ctx.clearRect(0, 0, 400, 400);
  pixeledX = pixeledX + 10;
  draw();
})

buttonTop.addEventListener('click', function(e) {
  console.log('buttonLeft');
  ctx.clearRect(0, 0, 400, 400);
  pixeledY = pixeledY - 10;
  draw();
})

buttonDown.addEventListener('click', function(e) {
  console.log('buttonLeft');
  ctx.clearRect(0, 0, 400, 400);
  pixeledY = pixeledY + 10;
  draw();
})

