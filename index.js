let numberOfDrums = document.querySelectorAll(".drum").length;

for(let i = 0; i <numberOfDrums; i++){
    document.querySelectorAll('.drum')[i].addEventListener("click", function(){
        this.style.color = 'white';
    });
}


let audio = new Audio('./sounds/tom-1.mp3');
        audio.play();
