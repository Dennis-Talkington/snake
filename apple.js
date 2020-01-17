class Apple {
    constructor(snake) {
        this.x = Math.floor(Math.random() * 60) * 10;
        this.y = Math.floor(Math.random() * 60) * 10;
        // Verifying it doesn't appear on the snake.
        while (this.x == snake.x && this.y == snake.y) {
            this.x = Math.floor(Math.random() * 60) * 10;
            this.y = Math.floor(Math.random() * 60) * 10;
        }
        this.size = 10;
    }

    // Drawing the apple
    show() {
        fill(255, 0, 0);
        rect(this.x, this.y, this.size, this.size);
    }

    // Moving the apple
    move(snake) {
        let emptySpot = false;
        // only loops while empty spot isn't empty
        while (!emptySpot) {
            // going to a new spot
            this.x = Math.floor(Math.random() * 60) * 10;
            this.y = Math.floor(Math.random() * 60) * 10;
            // assuming the spot is empty
            emptySpot = true;
            // Checking that the snake head isn't on the spot
            if (this.x == snake.x && this.y == snake.y) {
                emptySpot = false;
            }
            // Looping through to make sure the snake tail isn't there
            for (var i = 0; i < snake.tail.length; i++) {
                if (this.x == snake.tail[i][0] && this.y == snake.tail[i][1]) {
                    emptySpot = true;
                }
            }
        }
    }
}