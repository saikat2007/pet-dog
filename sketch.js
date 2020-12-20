//Create variables here
var dog , dogImg , happydogImg , database ,foods , foodstock;

function preload()
{
  //load images here
  dogImg=loadImage("image/dogImg.png");
  happydogImg=loadImage("image/happydogImg.png");
}

function setup() {
  createCanvas(500, 500);
  database=firebase.database();
  foodstock=database.ref("food");
  foodstock.on("value",readStock);

  dog = createSprite(250,350,10,60);
  dog.addImage(dogImg)
  dog.scale = 0.2;

  function readStock(data){
    foods=data.val();

  }

  function writeStock(x){

    database.ref('/').updata({
      Food:x
    })
  }

}


function draw() {  
  background("green");
  


if(keyWentdown(UP_ARROW)){
  writeStock(foods);
  dog.addImage(dogImg);

}
drawSprites();
textSize(20);
  fill(255)
  Note:"press UP_ARROW key To Feed Drago Milk!"

  

}
 if(x<=0){
   x=0;
 }else{
   x=x-1;
 }



}







