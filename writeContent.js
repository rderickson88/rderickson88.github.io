

myData = [

    {"Title": "Candy Maze - Ebbe", 
    "Sum": "This is a unique 'Pac-Man' style game that was built for up to 2 players to collect various candy pieces on a variety of maps.", 
    "Editor": "This is Mr. E's Commentary", 
    "EditText": "Ebbe had a lot of ambition with his game and it mostly all paid off. Ebbe learned a lot about managing the events of his code, making sure to check when things happen and how often they happen. An important part of learning any computer language is coming to grips with both the possibilities but also the limitations. Ebbe learned on both sides of this and managed to create an experience I have not seen a student produce yet. This is classic game design that brings me back to the old Pac-Man days, for sure.",
    "Links": "/Games/Ebbe/index.html"},

    {"Title": "Astronauts With Guns - Xavier", 
    "Sum": "A classic platformer with a unique twist. Use your reloading rocket launcher to not only take care of enemies but to also propel yourself through challenging platforming tests.", 
    "Editor": "This is Mr. E's Commentary", 
    "EditText": "Xavier's idea of using a rocket launcher to help propel spatial movement is as as classic as the old FPS games in the late 90's and early aughts. The tricky party about designing a mechanic like this is not just figuring out the velocity changes but ALSO figuring out angular geometry. This is used to great effect here. Xavier's levels are cleverly designed to make best use of this mechanic. Make sure to use your incrasing downward velocity to expel yourself up even further!",
    "Links": "/Games/Xavier/index.html"},

    {"Title": "Fenrir - Jesse", 
    "Sum": "A twin-stick shooter designed with consoles in mind. There is a robus ammo and shield system. Test your mettle against an ever-challenging horde of enemy combatants.", 
    "Editor": "This is Mr. E's Commentary", 
    "EditText": "Jesse is one of those rare students that just kind of gets code at a fundamental level. His ability to create something seemingly from scratch indicates his intelligence for this type of work and creativity. His next big step for his own learning is working with data structures and using code to call and set values based on this organization. Looking at his code is a real treat. It's organized, carefully thought out, and very easy to read. What's impressive is that it is also done entirely manually, meaning that learning data structures will make his next project that much easier!",
    "Links": "/Games/Jesse/index.html"},


    {"Title": "Dystopian Runner - Ace", 
    "Sum": "An almost-randomly generated obstacle course. Navigate the spaces between ships to avoid taking damage and restarting your game.", 
    "Editor": "This is Mr. E's Commentary", 
    "EditText": "Ace is a fun student to work with. He comes up with cool ideas that have a classic basis but always puts a spin on it that feels very distinctly 'Ace'. In this example we had to grapple with the nature of TRUE random and try to wrangle a near infinite amount of possibilities and create some order from the chaos. Using some built-in plugins found in Construct3, Ace managed to create a permutation table that allows his runner to really feel random without being super harsh.", 
    "Links": "/Games/Ace/index.html"},

    {"Title": "Action RPG - Donnie", 
    "Sum": "Navigate in 2D space and use the action button to combat enemies. Explore narrow corridors and watch the customized art come to life. ", 
    "Editor": "This is Mr. E's Commentary", 
    "EditText": "Donnie's project took some turns but he should feel proud for what he was able to accomplish. There's a lot of mechanical depth even in this small slice that features some robust health systems, a customizable weapon system, and enemy pathing. Donnie settled on art that is consistent and actually kind of fun to look at, too! One thing that Donnie needs to focus on next is to take some of these grander ideas and scope them WAY down. Focus on one task at a time and nail it succesfully. You'll find that your systems start growing exponentially when you compartamentalize your workflow that way.", 
    "Links": "/Games/Donnie/index.html"},

    {"Title": "Glen", 
    "Sum": "In the vein of classic platformers - walk, run, and jump your way through really dyanmic levels.", 
    "Editor": "This is Mr. E's Commentary", 
    "EditText": "Glen had more than one 'Aha!' moment throughout this program. He came to understand a lot of the core principles behind working with sprites, objects, and variables, and pulled together some really impressive levels that he should be very proud of.", 
    "Links": "/Games/Glen/index.html"},

    {"Title": "Zombie Hunter - Jacob", 
    "Sum": "Navigate in a platformer level with a twist! Use the 'I' and 'P' buttons to set your direction and use the 'O' button to shoot at the various enemies and zombies in this thriller game.", 
    "Editor": "This is Mr. E's Commentary", 
    "EditText": "Jacob's largest accomplishment in this program was discovering the real power of using variables to trigger different states. You can see this in the use of his animations, the way his enemies dynamically find the player, and of course in his action mechanics. I wish Jacob had 6 more weeks to be able to take this project to the next level with that kind of knowledge on lock. He even built a zombie health system! Bring on more hordes!", 
    "Links": "/Games/Jacob/index.html"},

    {"Title": "Mystery Cave - Luis", 
    "Sum": "Platformer style collect-a-thon. Check out the running mechanic to propel yourself faster around these trick to navigate maps.", 
    "Editor": "This is Mr. E's Commentary", 
    "EditText": "Luis brought a lot to this game, especially in the second half of the program. His biggest accomplishment by far is in his understanding of level design. While looking a little sloppy, his second level is actually a super precise jumping puzzle that challenges your ability to navigate these tough spaces and find a path further upwards. Punishment is fair, rewards feel good, and the moment-to-moment gameplay is fundamnetally on lock. Way to go!", 
    "Links": "/Games/Luis/index.html"},

    {"Title": "Collect the Apples - Lilli", 
    "Sum": "In the same vein as Mario64, Banjo Kazooie, and other collectable games, find every single apple in the level to be able to progress. ", 
    "Editor": "This is Mr. E's Commentary", 
    "EditText": "If I was creating a game studio, I would hire Lilli to be a level designer first and build the team around her. She has an absolute mastery over how to set up a key core mechanic and then iterate on it with increasing finesse. Her ability to not just create interesting levels but then PHYSICALLY alter the player to adapt to level, such as her Ice Level, stands out to me as a premiere example of how to build a cool game and make it fun to play over and over.", 
    "Links": "/Games/Lilli/index.html"},



   

]




   

function callGameContent(gameNum) {

    document.getElementById("gameTitle").innerHTML = myData[gameNum].Title;
    document.getElementById("gameLink").innerHTML = "Play the Game!";
    document.getElementById("gameLink").setAttribute('href', myData[gameNum].Links);
    document.getElementById("gameContent").innerHTML = myData[gameNum].Sum;
    document.getElementById("editorTitle").innerHTML = "Mr. E's Commentary";
    document.getElementById("gameEditor").innerHTML = myData[gameNum].EditText;

   


}