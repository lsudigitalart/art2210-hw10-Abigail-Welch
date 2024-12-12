let particles = [];
let star

function preload() {
  star = loadImage ("coding star yellow.png");

}

function setup() {
  createCanvas(400, 400);


}



function draw() {
  background(31, 27, 51);

  
  image (star, 160, 160, 100, 100)
 
  
  particles = particles.filter(particle => particle.opacity > 0);
  
  for (let particle of particles) {
    particle.update();
    particle.display();
  }
}

function mousePressed() {
  for (let i = 0; i < 5; i++) { 
    particles.push(new Particle(200, 200));
  }
}

class Particle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vx = random(-2, 2);
    this.vy = random(-2, 2);
    this.opacity = 255; 
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;
    
    let touched = false;

    
    if (this.x < 0 || this.x > width) {
      
      touched = true;
    }
    if (this.y < 0 || this.y > height) {
     
      touched = true;
    }

    if (touched) {
      this.opacity -= 150; 
      this.opacity = max(this.opacity, 0);
      particles.push(new Particle(200, 200));

    }
  }

  display() {
    noStroke();
    image(star, this.x, this.y, 20, 20);
    
  }
  
}

