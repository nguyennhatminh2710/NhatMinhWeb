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
