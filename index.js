const play = document.querySelector(".play");
const progress = document.querySelector(".progress");
var count = 1;
var A1 = new Audio("Audio/Wallflowers - Bad Snacks.mp3");
play.addEventListener("click",() => {
  count++;
   if (count % 2 === 0) {
  
    A1.play();}
    else {
     
       A1.pause();
    }

   A1.addEventListener("timeupdate", () => {
    const currentTime = A1.currentTime;
    const duration = A1.duration;
    const progressmade = (currentTime / duration) * 100;
    progress.style.width = progressmade + "%";
   
}) 
})

