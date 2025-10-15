let origianlHTML=document.body.innerHTML;

let playerCor=document.getElementById("player");

let appleCor=document.getElementById("apple");

let borderCor=document.getElementById("wall");

let player=playerCor.getBoundingClientRect();

let apple=appleCor.getBoundingClientRect();



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


//snake movement steps
let step=5;

//snake parts
snake_parts=[{x:playerX,y:playerY}];



//snake speed or time interval of snake_auto_movement

let time_interval=17;



//snake auto movement initial direction                                       
let direction="up";

startgame();


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
    snake_parts[0].x=OGX;
    snake_parts[0].y=OGY;      

    
}

function gameover()
{
    if(snake_parts[0].y>=12.66668701171875||snake_parts[0].x>=312.66668701171875||
       snake_parts[0].y<=592.6666870117188||snake_parts[0].x<=892.6666870117188)
        
    {
     document.getElementById("gameover").innerHTML="Game Over";
    }

        

}
// auto snake movement
function snake_movement()

{

    if(document.getElementById("gameover").innerHTML==="Game Over")
    {
        return;
    }

    for(let i=snake_parts.length-1;i>0;i--)
    {
        snake_parts[i].x=snake_parts[i-1].x;
        snake_parts[i].y=snake_parts[i-1].y;

    }
 
     

    if(direction==="up")
    {

    
        
    snake_parts[0].y-=step;

    
    new_snake_head();
    
                    
    if(snake_parts[0].y===12.66668701171875)
    {
    gameover();
    
    }             

}
    else if(direction==="down")
    {
        
    snake_parts[0].y+=step;

    new_snake_head();
    
                                
                                
    if(snake_parts[0].y===592.6666870117188)
    {
    gameover();
    
    }
    }
                                
    else if(direction==="right" )
    {

    snake_parts[0].x+=step;


    new_snake_head();
                                 
    
    if(snake_parts[0].x===892.6666870117188 )
    {
        gameover();


    }
    }
    
    else if(direction==="left")
   {
     
    
    snake_parts[0].x-=step;
        
    new_snake_head();
       
    if(snake_parts[0].x===312.66668701171875)
    {
    
        gameover();
        
    }

    }
            
    if(snake_parts[0].x===appleX && snake_parts[0].y===appleY )
    {
        random_apple();
        score++;
        update(); 
        new_snake_head();
        snake_parts.push({x:snake_parts[0].x,y:snake_parts[0].y})

        
        
    }



}

function snake_direction()

{
                
    document.addEventListener("keydown",function(event){
                    
                    
       
        if(event.key==="ArrowUp" && snake_parts[0].y>=12.66668701171875 && direction!="down" )
            {
                direction="up";   
            }
        else if(event.key==="ArrowDown" && snake_parts[0].y<=592.6666870117188 && direction!="up")
            {
                direction="down";
            }

        else if(event.key==="ArrowRight" && snake_parts[0].x<=892.6666870117188 && direction!="left")
            {   
              direction="right";
            }
        else if(event.key==="ArrowLeft" && snake_parts[0].x>=312.66668701171875 && direction!="right")
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
            random_apple();
            snake_parts.length=1;
            document.getElementById("player").remove(); 
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

function new_snake_head()
{
    

    let last_part=document.querySelectorAll(".p");
    last_part.forEach(last_part=>last_part.remove());
    
    
    for(let j=0;j<snake_parts.length;j++)
    {
    new_head=document.createElement("img");

    new_head.src="white.png";
    new_head.width=20;
    new_head.height=20;

    new_head.style.position="absolute";

    
    
    new_head.style.left=snake_parts[j].x+"px";
    new_head.style.top=snake_parts[j].y+"px";

    
    new_head.id="player";
    new_head.classList.add("p");
    
    appleCor.insertAdjacentElement("afterend",new_head);

    
    
    
    }

    
    
    
}





