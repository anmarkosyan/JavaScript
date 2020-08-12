// variables
const inputMessage = document.querySelector('#message-form');
const message = document.querySelector('#message');
const feedback = document.querySelector('.feedback');
const messageContent = document.querySelector('.message-content');

//add event listener
inputMessage.addEventListener('submit', function(e){
    e.preventDefault();
    if(message.value === ''){
        feedback.classList.add('show');
        setTimeout(function(){
            feedback.classList.remove('show')},
            2000);
    } else {
        //Change message content and clear the message input
       messageContent.textContent = message.value;
       message.value = '';

    }

});





