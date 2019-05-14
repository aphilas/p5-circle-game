const canvasWidth = 400
const canvasHeight = 400

let x, y // position of circle
let delay = 1000 // interval delay to reset circle position
let radius = 100
let score = 0
let level = 1

function setup() {
  createCanvas(canvasWidth, canvasHeight)

  // pick random circle position, ensure circle is not cut off
  x = random(radius, canvasWidth - radius) 
  y = random(radius, canvasHeight - radius)
}

function draw() {
  background(251)
  
  noStroke() // remove default black stroke
  fill(127, 0, 127)
  ellipse(x, y, radius * 2, radius * 2) // x position, y position, width, height
  
  text(`Score: ${score}`, 10, 20); // str, x, y
}

function mousePressed() {
  let d = dist(mouseX, mouseY, x, y) // dist calculates the distance between two points. Args: x1, y1, x2, y2
  
  if (d < 100) { // if click is within circle
    score++
    // relocateCircle()
    
    if (score % 10 === 0) { // upgrade level after score of 10, 20, 30 ... 
        upgradeLevel()        
    }
  }
}

function relocateCircle() {
  x = random(radius, canvasWidth - radius)
  y = random(radius, canvasHeight - radius)
}

function upgradeLevel() {
  radius /= 1.5 // make circle smaller
  delay *= 0.8 // make circle move faster
  level += 1
  resetInterval()

  // show level message
  levelEl.innerHTML = `You are now on level ${level}`
}

function resetInterval() {
  clearInterval(relocateInterval)
  relocateInterval = setInterval(relocateCircle, delay)
}
 
let relocateInterval = setInterval(relocateCircle, delay)

// 

const levelEl = document.getElementById('level')
levelEl.innerHTML = `You are now on level ${level}`

// adapted from https://medium.com/@kellylougheed/make-your-first-game-with-p5-js-38bfb308a671