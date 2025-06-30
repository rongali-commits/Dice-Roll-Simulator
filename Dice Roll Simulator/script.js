const buttonEl = document.getElementById("dice-button");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("roll-history");

let historyList = [];

function rollDice(){
    const randomNumber = Math.floor(Math.random()*6)+1;
    const diceFace = getDiceface(randomNumber);
    diceEl.innerHTML = diceFace;
    historyList.push(randomNumber);
    updateRollHistory();
}

function updateRollHistory(){
    rollHistoryEl.innerHTML = "";
    for (let i = 0; i < historyList.length; i++){
        const listItem = document.createElement("li");
        listItem.innerHTML = `Roll ${i+1}: 
                    <span>${getDiceface(historyList[i])}</span>`;
        rollHistoryEl.appendChild(listItem);
                }
}

function getDiceface(randomNumber){
    switch(randomNumber){
    case 1:
        return "&#9856;";
    case 2:
        return "&#9857;";
    case 3:
        return "&#9858;";   
    case 4:
        return "&#9859;"
    case 5:
        return "&#9860;";
    case 6:
        return "&#9861;";
    default:
        return "";
}
}

buttonEl.addEventListener("click", ()=>{
    diceEl.classList.add("animation-roll");
    setTimeout(()=>{
        diceEl.classList.remove("animation-roll");
        rollDice();
    },1000);
});