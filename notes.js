// document.addEventListener('DOMContentLoaded', () => {
//    const cardArr = [
//       {
//          theName: 'dragon',
//          img: 'imgs/01.png'
//       },
//       {
//          theName: 'dragon',
//          img: 'imgs/01.png'
//       },
//       {
//          theName: 'sea',
//          img: 'imgs/02.png'
//       },
//       {
//          theName: 'sea',
//          img: 'imgs/02.png'
//       },
//       {
//          theName: 'wings',
//          img: 'imgs/03.png'
//       },
//       {
//          theName: 'wings',
//          img: 'imgs/03.png'
//       },
//       {
//          theName: 'venom',
//          img: 'imgs/04.png'
//       },
//       {
//          theName: 'venom',
//          img: 'imgs/04.png'
//       },
//       {
//          theName: 'madara',
//          img: 'imgs/05.png'
//       },
//       {
//          theName: 'madara',
//          img: 'imgs/05.png'
//       },
//       {
//          theName: 'henata',
//          img: 'imgs/06.png'
//       },
//       {
//          theName: 'henata',
//          img: 'imgs/06.png'
//       },
//    ];

//    cardArr.sort(() => 0.5 - Math.random());

//    const grid = document.querySelector('.grid');
//    const resultDisplay = document.querySelector('#result');
//    let cardChosen = [];
//    let cardChosenId = [];
//    let cardsWon = [];


//    function createBoard() {
//       for (let i = 0; i < cardArr.length; i++) {

//          let card = document.createElement('img');
//          card.setAttribute('src', `imgs/07.png`);
//          card.setAttribute('data-id', i);
//          card.addEventListener('click', flipCard);



//          grid.append(card);

//       }
//    }


//    function checkForMatch() {
//       let cards = document.querySelectorAll('img');
//       const optionOneId = cardChosenId[0];
//       const optionTwoId = cardChosenId[1];
//       if (cardChosen[0] === cardChosen[1]) {
//          alert('You found a Match');
//          cards[optionOneId].style.opacity = 0;
//          cards[optionTwoId].style.opacity = 0;
//          cardsWon.push[cardChosen];

//       } else {
//          cards[optionOneId].style.opacity = 1;
//          cards[optionOneId].src = 'imgs/07.png';
//          cards[optionTwoId].style.opacity = 1;
//          cards[optionTwoId].src = 'imgs/07.png';
//          alert('sorry try again');
//       }
//       cardChosen = [];
//       cardChosenId = [];

//       // resultDisplay.textContent = cardsWon.length;
//       // if (cardsWon.length == cardArr.length / 2) {
//       //    resultDisplay.textContent = 'Congrats ';
//       // }
//    }



//    function flipCard() {
//       let cardId = this.getAttribute('data-id');

//       cardChosen.push(cardArr[cardId].theName);
//       cardChosenId.push(cardId);
//       this.setAttribute('src', cardArr[cardId].img);
//       if (cardChosen.length === 2) {
//          setTimeout(checkForMatch, 500);
//       }
//       console.log(cardChosen);

//    }


//    createBoard();









































// })





// let date = new Date('Dec 30 2023 23:59:58').getTime();



// console.log(date);


// let counter = setInterval(() => {
//    let dateNow = new Date().getTime();

//    let dateDiff = date - dateNow;

//    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
//    let hours = Math.floor(dateDiff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
//    let minutes = Math.floor(dateDiff % (1000 * 60 * 60) / (1000 * 60));
//    let seconds = Math.floor(dateDiff % (1000 * 60) / (1000));


//    document.querySelector('.days').innerHTML = days;
//    document.querySelector('.hours').innerHTML = hours;
//    document.querySelector('.minutes').innerHTML = minutes;
//    document.querySelector('.seconds').innerHTML = seconds < 10 ? `0${seconds}` : seconds;

//    if (dateDiff == 0) {
//       clearInterval(counter);
//    }

//    // console.log(days);
// }, 1000);