let video;
let vScale = 16;
let scaleSlider;

function setup() {
  createCanvas(640, 480);
  
  // High dpi monitors mean more than one pixel per pixel.
  // This scales the pixels back down to 1:1
  pixelDensity(1);
  video = createCapture(VIDEO);
  
  // Slider from 8-bit? to 32-bit?
  scaleSlider = createSlider(8, 32, 16, 4);
  
}

function draw() {
  vScale = scaleSlider.value();
  video.size(width/vScale, height/vScale);
  
  
  // Let's us manip. pixels and gives access to pixels[]
  video.loadPixels();
  loadPixels();
  
  
  
  for(let x = 0; x < video.width; x++) {
    for(let y = 0; y < video.height; y++) {
      
      // Multiply by 4 because pixels are stored [RGBA, RGBA, ...]
      let index = (x + y * video.width) * 4;
      r = video.pixels[index+0];
      g = video.pixels[index+1];
      b = video.pixels[index+2];
      a = video.pixels[index+3];
      
      fill(color(r, g, b));
      rect(x*vScale, y*vScale, vScale, vScale);
    }
  }
  
  video.updatePixels();
}