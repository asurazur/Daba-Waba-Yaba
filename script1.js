let touchstartX = 0
let touchendX = 0
let counter = 0
let i = 0

const imgs = ["hello.gif", "idea.gif", "ask.gif", "waiting.gif"]
const says = ["Hello Darling", "I Have Something to Ask", "Can You be My Valentine?", "Can You be My Valentine?"]
const sad = "sad.gif"
const happy = "hug.gif"
var img = document.getElementById("pic")

function checkDirection() {
  if (touchendX < touchstartX) {
    // Swipe Left
    if(counter > -1){
        counter--;
    }
  }
  if (touchendX > touchstartX) 
    // Swipe Right
    if(counter < 1){
        counter++;
    }
}
document.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
})

document.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  checkDirection()
})

setInterval(function() {
    if(counter == 0){
        document.getElementById("top").innerText = "No"
        document.getElementById("bottom").innerText = "Yes"
        if(i == 3){
            return
        }
        else{
            i = i+1
            document.getElementById("pic").src= "./img/".concat(imgs[i]);
            document.getElementById("what").innerText = says[i]
        }
        
    }
    else if(counter == -1){
        i=0
        document.getElementById("pic").src= "./img/sad.gif"
        document.getElementById("what").innerText = "Daba Waba Yaba Is Sad 😔"
        document.getElementById("top").innerText = ""
        document.getElementById("bottom").innerText = "Please Change Your Mind 👉🥺👈"
    }
    else if(counter == 1){
        i=0
        document.getElementById("pic").src= "./img/hug.gif"
        document.getElementById("what").innerText = "See Ya"
        document.getElementById("top").innerText = ""
        document.getElementById("bottom").innerText = ""
    }
  }, 2000);