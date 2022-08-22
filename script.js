let numberCards = prompt("Com Quantas Cartas deseja jogar?");
let cards = [];
const broID = `id="bobross"`
const mexID = `id="mex"`
const marID = `id="mar"`
const multID = `id="mult"`
const metalID = `id="metal"`
const uniID = `id="uni"`
const exploID = `id="explo"`

const mexParrot = `<div>
<div onclick="turnCard(this)"class = "Parrot face">
    <img src="img/front 2.png" alt="Parrot" >
</div>
<div class = "backParrot face" ${mexID}>
    <img src="img/fiestaparrot.gif"alt="Parrot" >
</div>`;

const multParrot = `<div>
<div onclick="turnCard(this)" class = "Parrot face">
    <img src="img/front 2.png" alt="Parrot" >
</div>
<div class = "backParrot face" ${multID}>
    <img src="img/tripletsparrot.gif"alt="Parrot" >
</div>`;

const metalParrot = `<div>
<div onclick="turnCard(this)" class = "Parrot face">
    <img src="img/front 2.png" alt="Parrot" >
</div>
<div class = "backParrot face" ${metalID}>
    <img src="img/metalparrot.gif"alt="Parrot" >
</div>`;

const uniParrot = `<div>
<div onclick="turnCard(this)"class = "Parrot face">
    <img src="img/front 2.png" alt="Parrot" >
</div>
<div class = "backParrot face" ${uniID}>
    <img src="img/unicornparrot.gif"alt="Parrot" >
</div>`;

const marParrot = `<div>
<div onclick="turnCard(this)" class = "Parrot face">
    <img src="img/front 2.png" alt="Parrot" >
</div>
<div class = "backParrot face" ${marID}>
    <img src="img/revertitparrot.gif"alt="Parrot" >
</div>`;

const exploParrot = `<div>
<div onclick="turnCard(this)"class = "Parrot face">
    <img src="img/front 2.png" alt="Parrot" >
</div>
<div class = "backParrot face" ${exploID}>
    <img src="img/explodyparrot.gif"alt="Parrot" >
</div>`;

const broParrot = `<div>
<div onclick="turnCard(this)"class = "Parrot face">
    <img src="img/front 2.png" alt="Parrot" >
</div>
<div class = "backParrot face" ${broID}>
    <img src="img/bobrossparrot.gif"alt="Parrot" >
</div>`;



function turnCard(element){

   const sibling = element.nextElementSibling;
   sibling.classList.add("justone");
   turn(element);
   let  siblingId = sibling.id;
   const unica = document.querySelectorAll(`.justone`)
   if (unica.length === 1) {
      jogadas++;
   }else{

      sibling.classList.remove("justone");
      verifyCard(siblingId,sibling);
      
      setTimeout(turnVerify,1000,contador,element);
      setTimeout(fimGame,1100);

      
   }
   
  
}
function turn (element){
   const sibling = element.nextElementSibling;

   element.classList.toggle ("Parrot");
   element.classList.toggle("backParrot");

   sibling.classList.toggle("backParrot");
   sibling.classList.toggle("Parrot");
   sibling.classList.toggle("virada");
}

function verifyCard(id,sibling){
   
   const  arrayId= document.querySelectorAll(`#${id}`)
   const virada =  document.querySelectorAll(".virada");
   const cartaAberta =  sibling ;
   elemento= arrayId[0];
   
   jogadas++;
   let c= 0;
   contador = 0;
   for (let i= 0; i < arrayId.length; i++) {
      
      const  element= arrayId[i];
      //const beforeElement = arrayId[i-1]
      const containsElem =element.classList.contains("virada");
      //const containsSibling = beforeElement.classList.contains("virada");
      
      if (containsElem === true  ) {
         
         c ++;
         
      }else if (containsElem === false){
         c --;
        
      }
     
      //console.log(i);
      
   }
   console.log(c);
   contador = c;
   
  
   

}
function turnVerify(num,element){
   const justone =  document.querySelector(".justone");
      
   const sibling = element.nextElementSibling;
   const sibling2 = justone.previousElementSibling;
   console.log("Este é o contador = "+contador)
   console.log(num);
   if (num < 2) {
      

      //sibling.classList.toggle("justone");
      turn(element);
     
      //sibling2.classList.toggle("justone");
      justone.classList.remove("Parrot");
      justone.classList.add("backParrot");
      justone.classList.remove("virada")
     
      sibling2.classList.remove("virada");
      sibling2.classList.remove("backParrot");
      sibling2.classList.add("Parrot");
      justone.classList.remove("justone")
      
      console.log("entrei no laço <2");
   }else{
      

      justone.classList.remove("justone");

      console.log("nao sou <2");
     
   }
}


function comparador() { 
	return Math.random() - 0.5; 
}


function initGame(){
    
   if (  numberCards%2 === 0 && numberCards<=14) {
      if (numberCards >=4 ) {

        
         moreCards();
        // console.log(cards);
        let cardsSorted = cards.sort(comparador);
        // console.log(cardsSorted);
         
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

   setTimeout(todasViradas,1000);
   setTimeout(todasDesviradas,2000);
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
function fimGame (){
   
   verifyFim();
   if (aviso === "fim") {
       let answer = "";
      while (answer !== "sim" ) {
         alert(`Você terminou com  ${jogadas} jogadas!!`)
         answer = prompt("Deseja jogar de novo? sim ou não")
         if(answer === "sim"){
            
            initGamePlus();
            
   
         }else if (answer === "nao"|| answer === "não"){
            break;
         }else{
            alert("deve responder com sim ou não, seu jão!")
         }
      }
      
     
   }
}
function verifyFim(){
   const virada =  document.querySelectorAll(".virada");
   const viradaN = virada.length ;
  const  cardsnumber = Number(numberCards) ;
  console.log("este é cardsnumber ="+cardsnumber)
  console.log( "este é viradaN ="+ viradaN)

   if (cardsnumber === viradaN ) {
      aviso = "fim"
   }
}
function initGamePlus(){
   if (  numberCards%2 === 0 && numberCards<=14) {
      if (numberCards >=4 ) {

        
         moreCards();
        // console.log(cards);
        let cardsSorted = cards.sort(comparador);
        // console.log(cardsSorted);
         
         const elemento = document.querySelector('.tabletop');
         elemento.innerHTML = "";
         aviso = "";
         jogadas = 0;
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
   
   setTimeout(todasViradas,1000);
   setTimeout(todasDesviradas,2000);
}
function todasViradas(){
   const viradas = document.querySelectorAll(".Parrot")
   for (let i = 0; i < viradas.length; i++) {
      const element = viradas[i];
      const sibling = element.nextElementSibling;

      element.classList.remove ("Parrot");
      element.classList.add("backParrot");

      sibling.classList.remove("backParrot");
      sibling.classList.add("Parrot");
      
   }
   
}
function todasDesviradas(){
   const viradas = document.querySelectorAll(".Parrot")

   for (let i = 0; i < viradas.length; i++) {
      const element = viradas[i];
      const sibling = element.previousElementSibling;

      element.classList.toggle ("Parrot");
      element.classList.toggle("backParrot");

      sibling.classList.toggle("backParrot");
      sibling.classList.toggle("Parrot");
   }
}

initGame();
let  elemento = 0;
let aviso = "";
let contador = 0;
let jogadas = 0;
