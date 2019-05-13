const canvasWidth = 400
const canvasHeight = 400

let x, y
let delay = 1000
let radius = 100
let score = 0

function setup() {
  createCanvas(canvasWidth, canvasHeight)
  x = random(radius, canvasWidth - radius)
  y = random(radius, canvasHeight - radius)
}

function draw() {
  background(251)
  
  noStroke()
  fill(127, 0, 127)
  ellipse(x, y, radius * 2, radius * 2)// x, y, w, h
  
  text("Score: " + score, 10, 20);
}

function mousePressed() {
  let d = dist(mouseX, mouseY, x, y) 
  
  if (d < 100) {
    score++
    relocateCircle()
    
    if (score % 10 === 0) {
        upgradeLevel()        
    }
  }
}

function relocateCircle() {
  x = random(radius, canvasWidth - radius)
  y = random(radius, canvasHeight - radius)
}

function upgradeLevel() {
  radius /= 1.5
  delay *= 0.8
  resetInterval()
}

function resetInterval() {
  clearInterval(relocateInterval)
  
  relocateInterval = setInterval(relocateCircle, delay)
}
 
let relocateInterval = setInterval(relocateCircle, delay)

// adapted from https://medium.com/@kellylougheed/make-your-first-game-with-p5-js-38bfb308a671