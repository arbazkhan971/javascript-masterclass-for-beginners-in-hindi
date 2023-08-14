const canvas = document.getElementById("breakout");
const ctx = canvas.getContext("2d");

let score= 0;
const paddleWidth = 100;
const paddleHeight = 20;
let paddleX = canvas.width/2;
let paddleY = canvas.height - paddleHeight - 10;
let paddleSpeed = 25;
function drawPaddle(){
    ctx.beginPath();
    ctx.rect(paddleX, paddleY, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

let circleX = canvas.width/2;
let circleY = canvas.height/2 + 100;
let circleRadius = 10;
let ballSpeedX = 2;
let ballSpeedY = -2;

function drawBall(){
    ctx.beginPath();
    ctx.arc(circleX, circleY, circleRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

let brickscolumn = 10;
let bricksrow = 6;
let brickheight = 20;
let brickwidth = 75;
let brickmarginfromtop = 30;
let brickmarginfromleft = 30;
let brickpadding = 10;

let bricks = [];
for(let c = 0; c < brickscolumn; c++){
    bricks[c] = [];
    for(let r = 0; r < bricksrow; r++){
        bricks[c][r] = {x: 0, y: 0, alive: 1};
    }    
}

function drawBricks(){
    for(let c=0; c < brickscolumn; c++){
        for( let r = 0; r < bricksrow; r++){
           if(bricks[c][r].alive === 1){
                let brickX = (c*(brickwidth+brickpadding))+brickmarginfromleft;
                let brickY = (r*(brickheight+brickpadding))+brickmarginfromtop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickwidth, brickheight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();            
           }         
        }
    }
}

function movePaddle(e){
    console.log(e);
    if( e.key === "ArrowLeft" && paddleX > 0 ){
        paddleX -= paddleSpeed;
    }
    else if( e.key === "ArrowRight" && paddleX < canvas.width - paddleWidth - 10){
        paddleX += paddleSpeed;
    }
    console.log("paddleX",paddleX);
}

function drawScore(){
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: "+score, 800, 20);
}

function detectCollision(){
    for( let c = 0; c < brickscolumn; c++){
        for(let r = 0; r < bricksrow; r++){
            let b = bricks[c][r];
            if( b.alive === 1 && circleY + circleRadius > b.y && circleY < b.y + brickwidth && circleX > b.x && circleX < b.x + brickwidth){
                ballSpeedY = -ballSpeedY;
                b.alive = 0;
                bricks[c][r] = b;
                score++;
            }
        }
    }
}

function move(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawPaddle();
    drawBall();
    drawBricks();
    drawScore();
    detectCollision();

    circleX += ballSpeedX;
    circleY += ballSpeedY;

    if( circleY < circleRadius){
        ballSpeedY = -ballSpeedY;
    }else if( circleY > canvas.height - circleRadius){
        document.location.reload();
    }

    if( circleX > canvas.width - circleRadius || circleX < circleRadius){
        ballSpeedX = -ballSpeedX;
    }

    if( circleY + circleRadius > paddleY && circleX > paddleX && circleX < paddleX + paddleWidth){
        ballSpeedY = -ballSpeedY;
    }

    requestAnimationFrame(move);
}

move();

document.addEventListener("keydown", movePaddle);
document.addEventListener("keyup", movePaddle);

