(function(){
let screen = document.querySelector('.screen');
let buttons = document.querySelectorAll('.btn')
let clear = document.querySelector('.btn-clear');
let del = document.querySelector('.btn-delete');
let equal = document.querySelector('.btn-equal')

 buttons.forEach(function(button) {
    button.addEventListener('click',function(e){
        let value = e.target.dataset.num;
        screen.value += value;
    })
 });
 equal.addEventListener('click',function(){
    if(screen.value === ""){
        screen.value = "";
    }else{
        let answer = screen.value;
        let result = eval(answer);
        screen.value = result;
    }
 })
clear.addEventListener('click',function(e){
    screen.value = "";
})
del.addEventListener('click',function(e){
    screen.value = screen.value.toString().slice(0,-1);
})

})();