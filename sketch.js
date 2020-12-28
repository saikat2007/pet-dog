//Create variables here
var dog , dogImg , happydogImg , database ,foodS , foodStock;

function preload()
{
  //load images here
  dogImg=loadImage("images/dogImg.png");
  happydogImg=loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodstock=database.ref("Food");
  foodstock.on("value",readStock);

  dog = createSprite(250,350,10,60);
  dog.addImage(dogImg)
  dog.scale = 0.2;

 

}


function draw() {  
  background("green");
  


if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(dogImg1);

}
drawSprites();
 fill(255,255,254); 
 stroke("black"); 
 text("Food remaining : "+foodS,170,200);
  textSize(13);
   text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}

  function readStock(data){
    foods=data.val();

  }

  function writeStock(x){
    if(x<=0){
      x=0;
    }else{
      x=x-1;
    }

    database.ref('/').updata({
      Food:x
    })
  }


 









