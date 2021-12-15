const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
const badge = document.querySelector('.badge');
const emojiBtn = document.querySelector('#emoji-btn');

const picker = new EmojiButton();


window.addEventListener('DOMContentLoaded',()=>{
    
    picker.on('emoji', emoji => {
       document.querySelector('input').value += emoji;
      });
    
    emojiBtn.addEventListener('click',()=>{
        picker.togglePicker(emojiBtn);
    });
      
});


// Chat Button Toggler Starts

chatBtn.addEventListener('click',()=>{
    popup.classList.toggle('show');
    badge.classList.toggle('btn-toggle');
});

// Chat Button Toggler Ends 

//Send Message button start

submitBtn.addEventListener('click',()=>{
    let userInput = inputElm.value;
    // console.log(userInput);
    let temp = `<div class ="out-msg">
        <span class="my-msg">${userInput}</span>
        <i class="material-icons">account_circle</i>
        </div>`;

    chatArea.insertAdjacentHTML("beforeend",temp);
    inputElm.value = '';
})
//Send Message button ends

