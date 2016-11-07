var imagecount = 1;
var total = 4;

function slide(currentImage) {
  var photo = document.getElementById('image');
  imagecount += currentImage;
  if(imagecount > total)
  {imagecount = 1;}
  if(imagecount < 1)
  {imagecount = total;}
  photo.src = "images/image" + imagecount + ".jpg";
}
// window.setInterval(function slide() {
//   var photo = document.getElementById('image')
//   imagecount = imagecount + 1;
//   if(imagecount > total) {imagecount = 1;}
//   if(imagecount < 1) {imagecount = total;}
//   photo.src = "images/image" + imagecount + ".jpg";
// }, 1000);
var direction = 1;
window.setInterval(function slide() {
  var photo = document.getElementById('image')
  imagecount += direction;
  if(imagecount >= total) {
    direction = -1;
  }
  if(imagecount <= 1) {
    direction = 1;
  }
  photo.src = "images/image" + imagecount + ".jpg";
}, 6000);
