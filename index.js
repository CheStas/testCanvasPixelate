const mainCanvas = document.getElementById('mainCanvas');
const pixelatedCanvas = document.getElementById('pixelatedCanvas');
const ctx = mainCanvas.getContext('2d');
const bcv = pixelatedCanvas.getContext('2d');

const buttonLeft = document.getElementById('left');
const buttonRight = document.getElementById('right');
const buttonTop = document.getElementById('top');
const buttonDown = document.getElementById('down');

const img = new Image();
let imgWidth = 200;
let imgHeight = 300;

let pixeledX = 10;
let pixeledY = 10;

const blocksize = 6;

const cropWidth = 100;
const cropHeight = 100;

let myImageData;
img.src = '5a4b9a9425bec432107852.jpg';
img.addEventListener("load", function() {
   draw()
});

function draw() {
  bcv.drawImage(img, 0, 0, imgWidth, imgHeight);
  ctx.drawImage(img, 0, 0, imgWidth, imgHeight);
  console.log(pixeledX, pixeledY);
    blur()
}

function blur() {
  ctx.rect(pixeledX, pixeledY, cropWidth, cropHeight);
  ctx.clip();
  ctx.filter = 'blur(5px)';
}

function pixelate() {
    const r = cropWidth / 2;
    const r2 = cropHeight / 2;

    for (let x = pixeledX; x < pixeledX + cropWidth; x += blocksize) {
      for (let y = pixeledY; y < pixeledY + cropHeight; y += blocksize) {
        const _x = x - (pixeledX + cropWidth / 2);
        const _y = y - (pixeledY + cropHeight / 2);

        if ( (_x * _x) + (_y * _y) < r * r2 ) {
          const pixel = bcv.getImageData(x, y, 1, 1);
          ctx.fillStyle = `rgb(${pixel.data[0]}, ${pixel.data[1]}, ${pixel.data[2]})`;
          ctx.fillRect(x, y, blocksize, blocksize);
        }
      }
    }
}

buttonLeft.addEventListener('click', function(e) {
  console.log('buttonLeft');
  ctx.clearRect(0, 0, 400, 400);
  pixeledX = pixeledX - 10;
  draw();
});

buttonRight.addEventListener('click', function(e) {
  console.log('buttonLeft');
  ctx.clearRect(0, 0, 400, 400);
  pixeledX = pixeledX + 10;
  draw();
});

buttonTop.addEventListener('click', function(e) {
  console.log('buttonLeft');
  ctx.clearRect(0, 0, 400, 400);
  pixeledY = pixeledY - 10;
  draw();
});

buttonDown.addEventListener('click', function(e) {
  console.log('buttonLeft');
  ctx.clearRect(0, 0, 400, 400);
  pixeledY = pixeledY + 10;
  draw();
});
