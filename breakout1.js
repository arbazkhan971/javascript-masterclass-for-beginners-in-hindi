const canvas = document.getElementById("breakout");
const ctx = canvas.getContext("2d");

// paddle properties
const paddleWidth = 100;
const paddleHeight = 20;
let paddleX = (canvas.width - paddleWidth) / 2;
const paddleY = canvas.height - paddleHeight - 5; // Paddle's Y position is fixed
const paddleSpeed = 20;
const ballRadius = 10;
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 3;
let ballSpeedY = -4;
let score = 0;

function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

let bricks = [];
const brickRowCount = 7;
const brickColumnCount = 10;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

for(let c = 0; c < brickColumnCount; c++) {
    bricks[c] = [];
    for(let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
    }
}

function movePaddle(e) {
    console.log(e);
    if (e.key === "ArrowLeft" && paddleX > 0) {
        paddleX -= paddleSpeed;
    } else if (e.key === "ArrowRight" && paddleX < canvas.width - paddleWidth) {
        paddleX += paddleSpeed;
    }
}

function move() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear the canvas
    drawPaddle();
    drawBricks();
    drawBall(); // Draw the ball after clearing the canvas
    drawScore();
    detection();

    // Move the ball
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Reflect the ball off the walls
    if (ballX + ballRadius > canvas.width || ballX - ballRadius < 0) {
        ballSpeedX = -ballSpeedX;
    }

    if (ballY - ballRadius < 0) {
        ballSpeedY = -ballSpeedY;
    }

    if (ballY + ballRadius > canvas.height) {
        document.location.reload();
        // ballSpeedY = -ballSpeedY;
    }
    
    // Collision detection for paddle
    if (
        ballY + ballRadius > paddleY && // Ball's bottom is below the top of the paddle
        ballY - ballRadius < paddleY + paddleHeight && // Ball's top is above the bottom of the paddle
        ballX > paddleX && // Ball's right is to the right of the left side of the paddle
        ballX < paddleX + paddleWidth // Ball's left is to the left of the right side of the paddle
    ) {
        ballSpeedY = -ballSpeedY;
    }
    requestAnimationFrame(move);
}

function drawBricks() {
    for(let c = 0; c < brickColumnCount; c++) {
        for( let r = 0; r < brickRowCount; r++) {
            if(bricks[c][r].status === 1) {
                const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;

                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }

}

function detection(){
    for(let c = 0; c < brickColumnCount; c++) {
        for( let r = 0; r < brickRowCount; r++) {
            const brick = bricks[c][r];
            if(brick.status === 1) {
                if(ballX > brick.x && ballX < brick.x + brickWidth && ballY > brick.y && ballY < brick.y + brickHeight){
                    ballSpeedY = -ballSpeedY;
                    brick.status = 0;
                    score++;
                }
            }
        }
    }

}
function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score:" + score, 8, 20);
}
document.addEventListener("keydown", movePaddle);
document.addEventListener("keyup", movePaddle);
move();