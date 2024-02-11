let touchstartX = 0
let touchendX = 0
let counter = 0

const imgs = ["you", "you1", "me", "me1", "random_jam", "first_date", "art", "first_movie", "nightout", "photo", "bday", "bday1", "bday2", "library", "companionism", "leisure", "event", "zoo", "kith", "photoism"];
const whats = ["You", "You", "Me", "Me", "Us", "Our First Date", "Us at JRM", "1st Movie Date", "Us on a Friday Night", "1st Photo Shoot", "Us on Your Birthday", "Us on Your Birthday", "Us on Your Birthday", "Random Library Pic", "Me as Your Tito", "Us Having a Good Time", "Us in an Event", "Us in the Zoo", "Us in a Resort", "Us at Photoism"];
const len = imgs.length

function usUpdate(){
    document.getElementById("what").innerText = whats[counter]
    document.getElementById("pic").src= "./img/".concat(imgs[counter]).concat(".jpg");
}

function checkDirection() {
  if (touchendX < touchstartX) {
    // Swipe Left
    if(counter > 0){
        counter--;
    }
  }
  if (touchendX > touchstartX) 
    // Swipe Right
    if(counter < len-1){
        counter++;
    }
    else{
      window.open("./final.html", "_self")
    }
}
document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
  usUpdate()
})
