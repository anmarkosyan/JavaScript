//variables
const counter = document.querySelector('#counter');
const buttons = document.querySelectorAll('.counterBtn');
let count = 0;

//add event Listeners and functionality
buttons.forEach(function(button){
    button.addEventListener('click', function(){
        if(button.classList.contains('prevBtn')){
            count--;
        }else if(button.classList.contains('nextBtn')){
            count++;
        }
        counter.textContent = count;

        if(count < 0){
            counter.style.color = '#1782ee';
        }else if(count > 0){
            counter.style.color = '#0d2c54';
        }else {
            counter.style.color = '#333333';
        }

    })
})
