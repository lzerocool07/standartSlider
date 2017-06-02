var btnPrev  = document.querySelector('.prev');
var btnNext = document.querySelector('.next');
var images = document.querySelectorAll('img');

console.log(images.length);
var i = 0;

btnNext.onclick = function(){
    images[i].className = '';
    i++;
    if(i >= images.length){
        i = 0;               
    }
    images[i].className = 'showed';    
}

btnPrev.onclick = function(){
    images[i].className = '';
    i--;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].className = 'showed';
}