class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  
  update() {
    this.x += random(-10, 10);
    this.y += random(-10, 10);
  }
  
  show(crayola) {
    noStroke();    
    fill(crayola[0], crayola[1], crayola[2], crayola[3]);
    ellipse(this.x, this.y, 24, 24);
    //triangle(this.x-20, this.y-20, this.x, this.y, this.x+20, this.y+1)
    //rect(this.x, this.y, 24, 24);
  }
  
}