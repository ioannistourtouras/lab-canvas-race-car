
const startDisplay = document.querySelector('.game-intro')
let bg;
let x = 225
let y = 700 - 100
const carWidth = 50
const carHeight = 2*carWidth
let imgCar;
let coords = [0, 501]
let obstacles = []


function setup() {
  // The background image must be the same size as the parameters
  // into the createCanvas() method. In this program, the size of
  // the image is 720x400 pixels.
  bg = loadImage('images/road.png');
  const canvas = createCanvas(500, 700)
  canvas.parent('game-board');
  obstacles.push(new Obstacle(Obstacle.x, Obstacle.y, Obstacle.width, Obstacle.height))
  console.log(bg)
}


function draw() {
  background(bg);
  image(imgCar, x, y, carWidth, carHeight);     
}



/*function getCenterX(a) {
    return width/2 - a/2
}*/



// Iam using the x from the image (car) in the function
// and according the function the x of the initially inserted img
// changes
function keyPressed() {
  if (keyCode === RIGHT_ARROW && x < width - carWidth) {
           x += 10;
  } else if (keyCode === LEFT_ARROW && x >0) {
           x -= 10
  }
}

class Car {
  constructor(x, y, width, height) {
    this.x = x
    this.y = y
    this.width = width
    this.height = height
  }   
  
}


class Obstacle extends Car {
  constructor(x, y, width, height)  {
    super(x, y, width, height)
    this.intervalId = null
    this.x = random(coords)
    this.y = 0
    this.velocity = 5
    this.intervalId = null
  }

  draw() {
    let brown = color(255, 228, 196)
    fill(brown)
    rect(this.x, this.y, this.width, this.height)
  }

  start(callback) {
    this.intervalId = setInterval(() => {
        this.y += 20
        if(callback) {
          const draw = this.draw()
          callback(draw)
        }
    }, random)
  }

}

 

 /* start(callback) {
    this.intervalId = setInterval(() => {

    })
  }
}*/


function preload() {
  imgCar = loadImage('images/car.png');
}

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {    
    startDisplay.style.display = 'none'
  }
};
