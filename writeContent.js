

myData = [

    {"Title": "Candy Maze - Ebbe", 
    "Sum": "This is a unique 'Pac-Man' style game that was built for up to 2 players to collect various candy pieces on a variety of maps.", 
    "Editor": "This is Mr. E's Commentary", 
    "Links": "/Games/ryanGame/index.html"},

    {"Title": "Rocket Game - Xavier", 
    "Sum": "A classic platformer with a unique twist. Use your reloading rocket launcher to not only take care of enemies but to also propel yourself through challenging platforming tests.", 
    "Editor": "This is Mr. E's Commentary", 
    "Links": "/Games/ryanGame/index.html"},

   

]




   

function callGameContent(gameNum) {

    document.getElementById("gameTitle").innerHTML = myData[gameNum].Title;
    document.getElementById("gameLink").innerHTML = "Play the Game!";
    document.getElementById("gameLink").setAttribute('href', myData[gameNum].Links);
    document.getElementById("gameContent").innerHTML = myData[gameNum].Sum;
    document.getElementById("editorTitle").innerHTML = "Mr. E's Commentary";
    document.getElementById("gameEditor").innerHTML = myData[gameNum].Editor;

}