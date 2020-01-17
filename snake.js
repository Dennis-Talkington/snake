class Snake {
    constructor() {
        this.x = 30;
        this.y = 100;
        this.size = 10;
        this.speed = [1,0];
        this.tail = [];
    }

    // Moving the snake accordingly
    update() {
        // Adding the head position to the tail
        this.tail.push([this.x, this.y]);
        // removing the last tail position
        this.tail.shift();

        this.x += 10 * this.speed[0];
        this.y += 10 * this.speed[1];

    }

    // Drawing the snake on the screen
    show() {
        fill(255);
        rect(this.x, this.y, this.size, this.size);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i][0], this.tail[i][1], this.size, this.size);
        }
    }

    grow() {
        // if an apple is ate, add an extra spot to the front of the tail array
        if (this.tail.length == 0) {
            this.tail.push([this.x, this.y]);
        } else {
            this.tail.unshift(this.tail[0]);
        }
    }

    gameOver() {
        // checking if a wall was hit
        if (this.x >= width || this.x < 0) {
            this.x = 30;
            this.y = 100;
            this.speed = [1,0];
            this.tail = []
        }
        if (this.y >= height || this.y < 0) {
            this.x = 30;
            this.y = 100;
            this.speed = [1,0];
            this.tail = []
        }
        // checking if own tail was hit
        for (var i = 0; i < this.tail.length; i++) {
            if (this.x == this.tail[i][0] && this.y == this.tail[i][1]) {
                this.x = 30;
                this.y = 100;
                this.speed = [1,0];
                this.tail = []
            }
        }
    }
}