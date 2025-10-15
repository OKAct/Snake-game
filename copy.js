let playerCor=document.getElementById("player");

let appleCor=document.getElementById("apple");

let borderCor=document.getElementById("wall");

let tailCor=document.getElementById("tail");

let player=playerCor.getBoundingClientRect();

let apple=appleCor.getBoundingClientRect();

let tail=tailCor.getBoundingClientRect();

let walls=borderCor.getBoundingClientRect();

//Edges of the Walls
let wallTOP=walls.top;
let wallLEFT=walls.left;
let wallRIGHT=walls.right;
let wallBOTTOM= walls.bottom;





//score
score=0;

//Original coordinate
let OGX=player.left;
let OGY=player.top;


// player coordinates

let playerX=player.left;
let playerY=player.top;



//apple coordiante
let appleX=apple.left;
let appleY=apple.top;

//tail coordinate
tailX=OGX;
tailY=OGY;

//snake movement steps
let step=10;

//snake parts
let snake_parts=[{x:playerX,y:playerY},
                  {x:tailX,y:tailY}



];


//snake speed or time interval of snake_auto_movement

let time_interval=40;



//snake auto movement initial direction                                       
let direction="right";





startgame();




let game_loop=0;

let interval_ID;




function snake_auto_movement()
{
    

interval_ID=setInterval(snake_movement,time_interval);
    
}



function update()
{
    
    document.getElementById("score").innerHTML=score;
    
}


function reset()
{
    clearInterval(interval_ID);
    document.querySelector(".score").innerHTML=0;
    document.getElementById("gameover").innerHTML="";
    score=0;
    playerX=OGX;
    playerY=OGY;
    playerCor.style.left=OGX+"px";
    playerCor.style.top=OGY+"px"; 
    
}


function gameover()
{
    if(playerY===12.66668701171875-10||playerX===312.66668701171875-10||
       playerY===592.6666870117188+10||playerX===892.6666870117188+10)
        
        {
            document.getElementById("gameover").innerHTML="Game Over";

        }
        
        
}


// auto snake movement
function snake_movement()
{
    if(direction==="up")
    {

    
    playerY-=step;

    let new_head=document.createElement("img");

    new_head.src="white.png";
    new_head.width=20;
    new_head.height=20;

    new_head.style.position="absolute";

    new_head.style.left="playerX";
    new_head.style.top="playerY";



    
                   
                    
                    
    if(playerY===12.66668701171875-10)
    {
    gameover();
    }             

}
    else if(direction==="down")
    {
    
    playerY+=step;

    
                                
                                
    if(playerY===592.6666870117188+10)
    {
    gameover();
    }
    }
                                
    else if(direction==="right")
    {

    
    

    playerX+=step;
                                        
   
    if(playerX===892.6666870117188+10 )
    {
        gameover();
    }
    }
    
else if(direction==="left")
{
        
        playerX-=step;
        
    
        
        
        
    
            
    if(playerX===312.66668701171875-10)
    {
    
        gameover();
    }

}
            
    if(playerX===appleX && playerY===appleY )
    {
        random_apple();
        score++;
        update();
        
    }



}

function snake_direction()

            {
                
                document.addEventListener("keydown",function(event){
                    
                    
                    if(document.getElementById("gameover").innerHTML==="Game Over")
                        {
                            return;
                        }
                        if(event.key==="ArrowUp" && playerY>=12.66668701171875)
                            {
                                direction="up";   
                            }
                            else if(event.key==="ArrowDown" && playerY<=592.6666870117188)
                                {
    direction="down";
}

else if(event.key==="ArrowRight" && playerX<=892.6666870117188)
    {   
        direction="right";
    }
    else if(event.key==="ArrowLeft" && playerX>=312.66668701171875)
        {   
            direction="left";
        }
        
        

       
        
    });


}

function startgame()
{
    document.addEventListener("keypress",function(event){
    
        if(event.key==="Enter")
        {

            
            reset();
            snake_auto_movement();
            snake_direction();
            game_loop=0;
            random_apple();
        }   
    });

}


function random_apple() {
    let maxX = 892.6666870117188;
    let maxY = 592.6666870117188;
    let minX = 312.66668701171875;   
    let minY = 12.66668701171875;

    let appleWidth = appleCor.offsetWidth;
    let appleHeight = appleCor.offsetHeight;

    

    // Adjust maximum to align with grid and fit apple within container
    let ranX = Math.floor(Math.random() * ((maxX - minX - appleWidth) / step)) * step + minX;
    let ranY = Math.floor(Math.random() * ((maxY - minY - appleHeight) / step)) * step + minY;

    appleX = ranX;
    appleY = ranY;

    appleCor.style.left = appleX + "px";
    appleCor.style.top = appleY + "px";
}



