let slider = document.getElementById("box");
let image = ['images/main3','images/main','images/main1'];

let i = image.length;


function nextImage(){
    if(i<image.length){
        i = i+1;

    }else{
        i = 1
    }
    slider.innerHTML = "<img src="+image[i-1]+".png>";

   }

function prevImage(){
    if(i < image.length + 1 && i>1){
        i = i-1;
    }
    else{
        i= image.length;
    }
    slider.innerHTML = "<img src="+image[i-1]+".png>";
}   






   let count = 0;
   let inc = 0;
   let margin = 0;
   let card = document.getElementsByClassName("card-con")[0];
   let itemDisplay = 0;
   if(screen.width > 990){
    itemDisplay = document.getElementsByClassName("card-con")[0]
   }
   if(screen.width > 700 && screen.width < 990){
    itemDisplay = document.getElementsByClassName("card-con")[0]
   }
      if(screen.width > 280 && screen.width < 700){
    itemDisplay = document.getElementsByClassName("card-con")[0]
   }

  let item = document.getElementsByClassName("item");
   let itemLeft = item.length % itemDisplay;
   let itemSlide =(item.length/ itemDisplay) - 1;
   
   console.log(itemSlide)