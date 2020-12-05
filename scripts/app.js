console.log("So long. Fair well. Thanks for all the fish!");

const img = "../images/animecoffee.jpg";
const imgTwo = "../images/animecafe.jpg";
const imgThree = "../images/milesmorales.jpg"


const color = new ColorPicker(img);
const colorTwo = new ColorPicker(imgTwo);
const colorThree = new ColorPicker(imgThree);
const colorFour = new ColorPicker("https://www.muralswallpaper.com/app/uploads/Green-Tropical-Plant-Wallpaper-Mural-Plain.jpg");


const setColors = function(){
  document.getElementById("gallery_one").style.backgroundColor = color.result;

  document.getElementById("gallery_two").style.backgroundColor = colorTwo.result;

  document.getElementById("gallery_three").style.backgroundColor = colorThree.result;
  
}

setTimeout(setColors, 2000);