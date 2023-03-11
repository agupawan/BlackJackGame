

let sum = 0;
let cards = [];
let hasBlackjack = false;
let isAlive = false;
let gameStarted = true;
let message = "";
let messageEl = document.querySelector("#message-el");
let sumEl = document.querySelector("p.sum");
let cardsEl = document.querySelector("p.cards");

function getRandomCard(){
   let random = Math.ceil(Math.random()*10)+1;
    // if(Math.round(random) >=2 && Math.round(random)<=12)
    
    // getRandomCard();
    return Math.floor(random);
}


let startGame =() => {
    if(gameStarted){
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    sum = firstCard + secondCard;
    cards.push(firstCard);
    cards.push(secondCard);
    isAlive = true;
    renderGame(); 
    gameStarted = false;
    }
    renderGame();  
}
let renderGame = () =>{
     let allCards = "";
    //  for(let i = 0;i < cards.length; i++){
    //     allCards += cards[i] + " ";
    //  }
    cards.forEach(card => {
        allCards += card + " ";
    }) 
    cardsEl.textContent = 'Cards:' + allCards; 
    if(sum <= 20){
        message="Do you want to draw a new card?";
    }
    else if(sum === 21){
        message="You've got BlackJack" ;
        hasBlackjack = true;
    
    }
    else{
        message="You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
    sumEl.textContent = "Sum:" + sum;
}

let newCard = () => {
    if(isAlive && !hasBlackjack){
        let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard); 
    renderGame();
    }
    
}





