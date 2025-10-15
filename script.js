function nextSlide() {
  const currentCard = document.querySelector('.card-item.active');
  const nextCard = currentCard.nextElementSibling;

  if (nextCard && nextCard.classList.contains('card-item')) {
    currentCard.classList.remove('active');
    nextCard.classList.add('active');
  }
}

var x=document.getElementById('pa-3');
var display=0;
function textAppear(){
    if (display==1){
        x.style.display='block';
        display=0;
    }
    else{
        x.style.display='none';
        display=1;
    }
}



function hearts(){
  const Page= document.querySelector('.Page');
  const create =document.createElement('div');
  create.classList.add('hearts');
  create.innerHTML='💗';
  create.style.left=Math.random() *100 +'vw';
  create.style.animationDuration= Math.random()*3 + 2 +'s';
    console.log(create);
  Page.appendChild(create);
  setTimeout(()=>{
    create.remove();
  },3000);
}
hearts();
setInterval(hearts,1000);

//loadingbar
 
var counter = 0;
const popup= document.getElementById('pop-up');
window.addEventListener("DOMContentLoaded",move=() =>{
    if (counter == 0) {
        j = 1;
        var elem = document.querySelector(".loadingBar");
        var width = 0;
        var main = setInterval(frame,380);
        function frame() {
            if (width >= 100) {
                clearInterval(main);
                

            } else {
                width++;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
});