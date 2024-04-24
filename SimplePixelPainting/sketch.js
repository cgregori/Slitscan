let particles = [];
let video;
let vScale = 16;

function setup() {
  createCanvas(640, 480);
  
  // Instantiate 100 particles.
  for(let i = 0; i < 100; i++) {
    particles.push(new Particle(200, 200));
  }
  
  // CPG video boilerplate
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  
}

function draw() {
  // Important.
  video.loadPixels();
  
  particles.forEach(particle => {
    particle.update();
    let pixelX = particle.x / vScale;
    let pixelY = particle.y / vScale;
    
    // video.get returns [R, G, B, A] array
    let crayola = video.get(pixelX, pixelY);
    particle.show(crayola);
  });
  
  
  // Maybe important.
  video.updatePixels();
}