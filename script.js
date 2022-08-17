let numberCards = prompt("Com Quantas Cartas deseja jogar?");
let cards = [];
const mexParrot = `<div class="mexParrot"><img src="img/front 2.png" alt="Parrot" ></div>`;

const multParrot = `<div class="multParrot"><img src="img/front 2.png" alt="Parrot" ></div>`;

const metalParrot = `<div class="metalParrot"><img src="img/front 2.png" alt="Parrot" ></div>`;

const uniParrot = `<div class="uniParrot"><img src="img/front 2.png" alt="Parrot" ></div>`;

const marParrot = `<div class="marParrot"><img src="img/front 2.png" alt="Parrot" ></div>`;

const exploParrot = `<div class="exploParrot"><img src="img/front 2.png" alt="Parrot" ></div>`;

const broParrot = `<div class="broParrot"><img src="img/front 2.png" alt="Parrot" ></div>`;


initGame();


function comparador() { 
	return Math.random() - 0.5; 
}
function initGame(){
    
   if (  numberCards%2 === 0 && numberCards<=14) {
      if (numberCards >=4 ) {

        
         moreCards();
         console.log(cards);
        let cardsSorted = cards.sort(comparador);
         console.log(cardsSorted);
         
         const elemento = document.querySelector('.tabletop');
         let i =0;
         while (cards.length>i) {
            elemento.innerHTML = elemento.innerHTML + cardsSorted[i];
            i++
         }
      }else{
         erro();
      }
        
   } else {
        
        erro();
   };
};

function erro(){
   while (numberCards%2 !== 0 || numberCards<=2) {
      alert("Só pode números pares até 14");
      numberCards = prompt("Com Quantas Cartas deseja jogar?");
   };
   
}
function moreCards(){
      while (numberCards > cards.length) {
         const cardsIndex = cards[cards.length-1]
         let arraySize = cards.length;
         if (arraySize<2) {
            cards.push(mexParrot);
         }else if (arraySize<4) {
            cards.push(marParrot);
         }else if (arraySize<6){
            cards.push(multParrot);
         }else if (arraySize<8){
            cards.push(metalParrot);
         }else if (arraySize<10){
            cards.push(broParrot);
         }else if (arraySize<12){
            cards.push(exploParrot);
         }else if (arraySize<14){
            cards.push(uniParrot);
         }
         
         
         }
         

      
}
