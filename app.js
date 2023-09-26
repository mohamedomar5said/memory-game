let playerNameElement = document.querySelector('.name span');
let startBtn = document.querySelector('#startBtn');
let input = document.querySelector('input');
const audio = document.getElementById('clickAudio');

setTimeout(() => {
   document.querySelector('.box').style.scale = '1';
}, 400);

startBtn.addEventListener('click', handleClick);
input.addEventListener('keydown', handleKeyPress);

function handleClick() {
   audio.play();
   if (input.value !== '') {
      playerNameElement.innerText = input.value;
      closePopUp();
   } else {
      playerNameElement.innerText = 'unknown';
      closePopUp();
   }
   [...blockContainer.children].forEach(block => {
     block.classList.add('start-flip');

      setTimeout(() => {
         block.classList.remove('start-flip');
      }, 3000);
   });
}

function handleKeyPress(event) {
   if (event.keyCode === 13) handleClick();

}

function closePopUp() {
   document.querySelector('.box').style.scale = '0';
   setTimeout(() => {
      startBtn.parentElement.parentElement.remove();
   }, 100);
}
//


let duration = 1000;
let blockContainer = document.querySelector('.memory_game_blocks');
let blocks = [...blockContainer.children];
let orderRange = [...Array(blocks.length).keys()];
let wrongTriesElement = document.querySelector('.tries span');

let arrOfBlocks = [];
let wrongTries = 0;


shuffle(orderRange);

blocks.forEach((block, index) => {
   block.style.order = orderRange[index];
   block.addEventListener('click', () => flip(block));
});



function shuffle(arrayOfRange) {
   let current = arrayOfRange.length,
      temp,
      random;

   while (current > 0) {
      random = Math.floor(Math.random() * arrayOfRange.length);
      current--;

      temp = arrayOfRange[current];

      arrayOfRange[current] = arrayOfRange[random];

      arrayOfRange[random] = temp;

   }
   return arrayOfRange;
}

function flip(selectedBlock) {
   audio.play();

   selectedBlock.classList.add('is-flipped');

   let flippedBlocks = blocks.filter(block => block.classList.contains('is-flipped'));

   if (flippedBlocks.length === 2) {
      stopClicking();
      checkMatch(flippedBlocks[0], flippedBlocks[1]);


   }

}


function stopClicking() {

   blockContainer.classList.add('no_clicking');

   setTimeout(() => {
      blockContainer.classList.remove('no_clicking');

   }, duration);

}

function checkMatch(firstBlock, secondBlock) {
   if (firstBlock.dataset.technology === secondBlock.dataset.technology) {
      firstBlock.classList.remove('is-flipped');
      secondBlock.classList.remove('is-flipped');

      firstBlock.classList.add('has-match');
      secondBlock.classList.add('has-match');

   } else {
      wrongTries++;
      wrongTriesElement.innerHTML = wrongTries;
      setTimeout(() => {
         firstBlock.classList.remove('is-flipped');
         secondBlock.classList.remove('is-flipped');
      }, duration);
   }
}





