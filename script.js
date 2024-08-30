let con = document.querySelector('.mid');
let her = document.querySelector('.ri-heart-fill');
let add = document.querySelector('#laal');
let remove = document.querySelector('.ri-heart-line');

con.addEventListener('dblclick',function(){
    her.style.transform = 'translate(-50%,-50%) scale(0.8)';
    her.style.opacity = '0.8';
    add.style.display = '';
    remove.style.display = 'none';
    setTimeout(function(){
        her.style.opacity = '0';
    },1000)
    setTimeout(function(){
        her.style.transform = 'translate(-50%,-50%) scale(0)';
    },2000)
})