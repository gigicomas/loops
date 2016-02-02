/*
  Classwork
*/

var cellSize = 50;

function setup(){
  createCanvas(windowWidth,windowHeight);

  for(var row = 0; row <20;row++){
  fill (random (255), random (255), random (255))


    for(var column =0; column <20;column++){
      line(cellSize*column, cellSize+row,cellSize+1000,cellSize+2000);






      rect(cellSize*column, cellSize*row, cellSize, cellSize);

      arc(cellSize*column, cellSize*row, cellSize,cellSize,10,HALF_PI);



    }
  }
}
