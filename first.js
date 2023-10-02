var cards = document.querySelectorAll(".memory-game-card");
let isflip = false;
let lockboard = false;
let firstcard;
let secondcard;


function flip(){
    if(lockboard) return;
    if(this === firstcard) return;
        this.classList.toggle('flip');

        if(!isflip){
        isflip = true;
        firstcard = this;
        //return;
        }
        else{
            isflip = false;
            secondcard = this;  
            checkformatch();
        }
};
function checkformatch(){
    let ismatch = firstcard.dataset.framework === secondcard.dataset.framework;
    ismatch ? disable() : unflip();
}

function disable(){
        firstcard.removeEventListener('click', flip);
        secondcard.removeEventListener('click', flip);
}
function unflip(){
    lockboard = true;
    setTimeout(() => {
        firstcard.classList.remove('flip');
        secondcard.classList.remove('flip');
        lockboard = false;

        resertboard();
    }, 1000);
}
function resertboard(){
    [firstcard, secondcard] = [false, false];
    [isflip, lockboard] = [false, false]
}
(function shuffle(){
    cards.forEach(item => {
        let randompos = Math.floor(Math.random()*12);
        item.style.order = randompos;
    })
})();
cards.forEach(item => item.addEventListener("click", flip));