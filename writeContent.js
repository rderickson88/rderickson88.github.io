

            




   

function callGameContent(gameNum) {
    const myGameText = JSON.parse(gameContent);
    const newP = document.createElement("p");
    const newContent = document.createTextNode(myGameText[0]);
    newP.appendChild(newContent);
    document.getElementById("gameContent").appendChild(newP);

}