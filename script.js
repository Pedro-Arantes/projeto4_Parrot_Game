let numberCards = prompt("Com Quantas Cartas deseja jogar?");
let cards = [];
initGame();

function initGame(){
    
   if (numberCards%2 === 0 && numberCards<=14) {
        cards.push(`<div>
        <img src="img/front 2.png" alt="Parrot" >
        </div>`);

        document.querySelector('.tabletop');
   } else {
        while (numberCards%2 !== 0) {
            alert("Só pode números pares até 14");
            numberCards = prompt("Com Quantas Cartas deseja jogar?");
         };
        
   };
};