# _Stranger Things Tic-Tac-Toe_

## Description:  
This was my first project using HTML, CSS, and Javascript. I was tasked at designing a Tic-Tac-Toe game from scratch, that two local players could have fun with.
Throughout the development process, I utilized various tools and resources to aid in the creation of this game. Git Bash allowed me to navigate the file system, execute system functions, and interact with my GitHub repository. I used WireFrame.cc to conceptualize and design the front-end layout of the game. Visual Studio Code served as my code editor for writing HTML, CSS, and JavaScript code. To capture preview snapshots for this Readme document, I used ShareX, an image capture program.

To enhance my CSS skills, I leveraged the interactive tutorials provided by Mastery.games, particularly Flexbox Zombies and Grid Critters. Additionally, I referred to the extensive documentation on JavaScript functions available on Developer.mozilla.org. Developer.chrome.com proved to be a valuable resource for learning and mastering Chrome DevTools, which greatly aided in the debugging and optimization of my code.

The design and implementation process began with sketching a small design of the game. This was followed by creating a wireframe to visualize the layout and structure. The Tic-Tac-Toe board was implemented as a 3x3 grid using HTML div elements. Grid CSS and Flexbox were employed to organize the elements correctly, ensuring a responsive and visually appealing layout.

I added CSS styling to the elements to ensure they were displayed correctly, capturing the essence of the Stranger Things theme. To determine the winner, I implemented a win logic by creating a 3x3 array that tracked the ownership of each box. The players and game board were represented by classes, allowing for efficient management of the game state.

To enable player interaction, I implemented event listeners that allowed players to click on the elements to display their respective symbols (X or O). I carefully outlined and revised the necessary methods to ensure smooth gameplay and accurate win detection. Upon a player's victory, all clicks were disabled to prevent further interactions until the game was reset.

A unique feature of the game is the inclusion of a walkie-talkie interface, designed using HTML and CSS. This interface displays player turns and provides start/reset buttons to control the game flow.

Throughout the development process, I made numerous design implementations to enhance the overall user experience. I sourced wallpaper designs from AlphaCoders.com, ensuring appropriate credit to the artists and uploaders in a dedicated section of the game.

## Getting Started:
This is a simple browser based game that can be accessed through this link: [Strange-Tic-Tac-Toe](https://jaypad07.github.io/Strange-Tic-Tac-Toe/)

![GamePreview](https://i.imgur.com/aW7SpB3.jpeg)

## Technology/Tools used:
* [Git Bash](https://gitforwindows.org/) - to traverse the file system, execute system functions, and to interact with my GitHub repository.
* [WireFrame.cc](https://wireframe.cc/) - design and build conceptions of front-end design.
* [Visual Studio Code](https://code.visualstudio.com/) - to write code in Html, CSS, and Java Script.
* [ShareX](https://getsharex.com/downloads) - image capture program to take preview snapshots for this Readme.doc.
* [Mastery.games](https://mastery.games/) - FlexBox Zombies and Grid Critters, were a huge help in enhancing my CSS skills, as well as the many great articles there.
* [Developer.mozilla.org](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - read many documents to increase my knowledge of Java Script functions.
* [Developer.Chrome.com](https://developer.chrome.com/docs/devtools/) - used to learn chrome devtools, this was of great help!
* [AlphaCoders.com](https://alphacoders.com/) obtained all wallpaper desgins here. Artists and those that discovered/uploaded will be credited in their own section below.
* [Archive.org](https://archive.org/) obtained Stranger Things mp3 audio file here.

## Design & Implementation Process 

1. Sketch a small design of product.
2. Design a wireframe.
3. Create a 3x3 grid with divs for Tic-Tac-Toe board.
4. Find a way to use Grid CSS and Flexbox to organize elements correctly.
5. Added small CSS design to elements to make sure they were displaying correctly.
6. Contemplate and create a win logic.
7. Created a 3x3 array to determine ownership of box.
8. Created a players class and board class to represent players and gameboard.
9. Create inner element to display X / O symbols.
10. Created a function that used eventListeners to allow player to click on elements to display their symbol.
12. Outline and revise needed methods.
13. Disabled all clicks when a player wins.
14. Designed a walkie-talkie using html/css that shows player turns as well as start/reset buttons.
15. Many more design implementations...

## MVP Stages (Minimum Viable Product)

### Bronze:

* Created a visual display of a Tic-Tac-Toe board.
* Add function to add new players.
* Add function to remove old players.
* Ability to display player names.
* Add function that sets the board by adding an eventListener to each div.
* Create two different functions for player symbols X / O.
* Create working start new game and reset buttons.
* Add a function that handles logic to determine a winner.
* Create function to switch players and count player turns.
* Add ability to assign player values to tiles clicked.
* Board should a display a winner

### Silver:

* 80's Theme? Think of Stranger Things, Ninja Turtles, Arcade Games. Looks like it is on a Arcade screen
* Add Stranger Things music.
* Make Tic Tac Toe header, board, and walkie-talkie have a shadow / fog effect.
* Have tiles light up, show a shadow / fog effect.
* Add player turn indicator. Maybe yellow/green light on player one's side and a dark blue light for player 2's side.
* Add sound effects.
* Random Selection of who goes first.
* Add HI-SCORE: When the game is over boxes change to a black arcade screen, this will show Hi-Scores. Back-end keeps track of most consecutive wins, draws, wins, ties, & turns?
* *Help!* Display story of Eleven stuck in the Upside-Down, telepathically communicating/writing through the walkie-talkie on screen. *Radio crackles, it's Eleven. She's stuck in the upside down. Story continues about you needing to help her. Both players want to help and agree that the winner of a best of 5 tic-tac-toe game goes to the upside down world to rescue her while the other stays behind for help.* Use filereader to read from text file that contains story. Story will display letters at a reduced rate to symbolize weak connection. 

### Gold:

* Create an algorithm for a computer controlled opponent.
* Enhanced Tic-Tac-Toe? Create different rule set? Change rules to make game more strategic / exciting?
* Upside Down dimension: Screen goes black board flips 180 degree, screen comes off black, lightning/thunder sounds, you have a limited amount of time to click? Symbols become translucent?
* Use power-ups that are obtained from taking one of the 4 disadvantageous tiles . Power-up ideas, random swap, random enemy symbol destruction, etc. Vecna image is hidden on the board, if you hit him the screen goes black for a second, you hear him laugh, the board rotated and when it returns the pieces are invisible. You only get one click?
* Add animations.

## Stages of Development:

###### My scratch notes & wireframe concepts:
<p float="left">
  <img src="https://i.imgur.com/T5ZIWjY.png" width="150" />
  <img src="https://i.imgur.com/dWjHdjP.png" width="150" /> 
  <img src="https://i.imgur.com/L6DFuAm.png" width="150" />
  <img src="https://i.imgur.com/K7Er3PT.png" width="170" height="190" />
  <img src="https://i.imgur.com/RcInb7K.png" width="170" height="190" />
  <img src="images/GamePreview.jpg" width="170" height="190" /> 
</p>


## Wall of Thanks!
* Obinna - Always kept me laughing with his jokes.
* Lorena - some style/color advise.
* Kevin - always there to answer questions.
* Jeff - I couldn't have done the blinking cursor code on the walkie-talkie screen without him. It's his creation and his help was invaluable. Thank you!! 

## Background Artists:
##### wall.alphacoders.com  
* Main background discovered by: AvengerVulcan
* Walkie-talkie background discovered By: TorinoGT

## Contribute:
Issue Tracker: [https://github.com/Jaypad07/Tic-Tac-Toe/issues](https://github.com/Jaypad07/Tic-Tac-Toe/issues)
