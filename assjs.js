var i=0;

function checkWin(){
    r=1;c=1;
    while(r!=4){
        while(c!=4){
           if(document.getElementById("cell"+r+c).className=="tile"+(r*4+c)){
            c=c+1;
           }else{
            return;
           }
        }
        r=r+1;
    }

 alert("You Win!");
}
var move=0;

var count=0;
var time=0;
function shuffle(){
    count=0;time=0;
    document.getElementById("moves").innerHTML=0;
    for (var row=1;row<=4;row++) { //For each row of the 3x3 grid
        for (var column=1;column<=4;column++) { //For each column in this row
       
         var row2=Math.floor(Math.random()*4 + 1); //Pick a random row from 1 to 3
         var column2=Math.floor(Math.random()*4 + 1); //Pick a random column from 1 to 3
          
         swaptiles("cell"+row+column,"cell"+row2+column2); //Swap the look & feel of both cells
       } 
     }
};



var win=0;

setInterval(countdown, 1000); 


function countdown(){
  
  if(win==0){
    count=count+0.5;
    if(count<10){
     
    
     document.getElementById("timer").innerHTML="0"+count;
    }else{
     
    
        document.getElementById("timer").innerHTML=count;
    
     
    };
    if(time<10){
        document.getElementById("minutes").innerHTML="0"+time;
        
      
       }else{
           document.getElementById("minutes").innerHTML=time;
          
       };
    
    if(count>=59){
        count=00;
        time++;
    }
    checkWin();
  }
    
}






function swaptiles(cell1,cell2){
var temp=document.getElementById(cell1).className;
document.getElementById(cell1).className=document.getElementById(cell2).className;
document.getElementById(cell2).className=temp;
}




function clickTile(row,column){
    var cell=document.getElementById("cell"+row+column);
var tile=cell.className;
  
if(tile!="tile16"){


    if(row>1){
       
            if(document.getElementById("cell"+(row-1)+column).className=="tile16"){
              
             
                swaptiles("cell"+row+column,"cell"+(row-1)+column);
                move=move+1;
                
                document.getElementById("moves").innerHTML=move;
                checkWin();


                
                return;
            }
             }
        


        //checking if below
               if(row<4){
        
                if(document.getElementById("cell"+(row+1)+column).className=="tile16"){
                    
                        swaptiles("cell"+row+column,"cell"+(row+1)+column);   
                        move=move+1;
                        document.getElementById("moves").innerHTML=move;
                        checkWin();


                return;
                    
                }
            }
        
               
        
        
               if(column>1){
        
                
                if(document.getElementById("cell"+row+(column-1)).className=="tile16"){
               
                   
                        swaptiles("cell"+row+column,"cell"+row+(column-1));
                        move=move+1;
                        document.getElementById("moves").innerHTML=move;
                        checkWin();


                        return;
                }
               
            
               }
        
        
               if(column<4){
               
                if(document.getElementById("cell"+row+(column+1)).className=="tile16"){
               
        
                  
                        swaptiles("cell"+row+column,"cell"+row+(column+1));
                        move=move+1;
                        document.getElementById("moves").innerHTML=move;
                        checkWin();
                    return;
                }
               
               
            }


    
    
}
}
