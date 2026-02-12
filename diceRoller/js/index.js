function RollDice(){
    const numofDice = document.getElementById("numberofDice").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = []; //empty array to store dice values
    const images = []; //empty array to store dice image elements

    for(let i =0; i<numofDice; i++){
        const value = Math.floor(Math.random()*6) + 1; //random number between 1 and 6
        values.push(value); //add value to values array
        images.push(`<img src = "dice_images/${value}.png" alt = "dice${value}">`); //add image element to images array
    }

    diceResult.textContent = `dice: ${values.join(", ")}`; //display dice values as a string
    diceImages.innerHTML = images.join(""); //display dice images
}