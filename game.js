// Initial variables set up for the game
var snake;
var apple;
var score;


function setup() {
    createCanvas(600, 600);
    frameRate(10);
    snake = new Snake;
    apple = new Apple(snake);
}


function draw() {
    background(50);

    // moving the snake
    snake.update();
    snake.gameOver();
    snake.show();

    // checking if an apple was ate
    appleAte(snake, apple);

    // Redrawing the apple
    apple.show();
}

function keyPressed() {
    if (snake.tail.length == 0) {
        if (keyCode === UP_ARROW) {
            snake.speed = [0, -1];
        } else if (keyCode === DOWN_ARROW) {
            snake.speed = [0, 1];
        } else if (keyCode === RIGHT_ARROW) {
            snake.speed = [1, 0];
        } else if (keyCode === LEFT_ARROW) {
            snake.speed = [-1, 0];
        }
    } else {
        if (keyCode === UP_ARROW) {
            if (snake.speed[1] != 1) {
                snake.speed = [0, -1];
            }
        } else if (keyCode === DOWN_ARROW) {
            if (snake.speed[1] != -1) {
                snake.speed = [0, 1];
            }
        } else if (keyCode === RIGHT_ARROW) {
            if (snake.speed[0] != -1) {
                snake.speed = [1, 0];
            }
        } else if (keyCode === LEFT_ARROW) {
            if (snake.speed[0] != 1) {
                snake.speed = [-1, 0];
            }
        }
    }
}

function appleAte(snake, apple) {
    if (snake.x == apple.x && snake.y == apple.y) {
        apple.move(snake);
        snake.grow();
    }
}