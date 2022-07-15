
var totalAttempts = 5;
var attempts = 0;
var wons = 0;
var losts = 0;


const form = document.querySelector('form');
const cardBody = document.querySelector('.card-body');
const input = form.querySelector('input');
const button = form.querySelector('button');
const p1 = cardBody.querySelector('#p1');
const p2 = cardBody.querySelector('#p2');

var message = document.createElement('p');



form.addEventListener('submit', (e) => {
    e.preventDefault();
    attempts ++;
    if(attempts == 5){
        input.disabled = true;
        button.disabled = true;
        p2.innerHTML = `Remaining Attempts : ${0}`;
        checkResult(input.value);
    }else{
        checkResult(input.value);
        p2.innerHTML = `Remaining Attempts : ${totalAttempts - attempts}`;
    };
    input.value = '';
});

function checkResult (value) {
    const random = randomNum(5);
    if(value == random){
        p1.innerHTML = 'You Have Won!';
        wons ++;
        p1.classList.add('right');
    }else{
        p1.innerHTML = 'You Have Lost. The Random Number was : ' + random;
        losts ++;
        p1.classList.add('wrong');
    };
    message.innerHTML = `Wons : ${wons},    Losts : ${losts}`;
    message.classList.add('largeText');
    cardBody.appendChild(message);
};
function randomNum (limit) {
   return Math.floor(Math.random() * limit) + 1;
  
};