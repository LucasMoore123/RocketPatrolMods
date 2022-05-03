// NAME: Lucas Moore
// Project Title: RocketPatrolMods
// Date: 4/25/22
// Time to Complete: 20 hours
// Point Breakdown:
// Simultaneous two-player mode (30)
// Redesign the game's artwork, UI, and sound to change theme/aesthetic (60)
// Highscore (5)
// Move after fired (5)
// Total: 100
let config = {
   type: Phaser.AUTO,
   width: 640,
   height : 480,
   scene: [ Menu, Play ]
};

let borderUISize = config.height / 15;
let borderPadding = borderUISize / 3;

let game = new Phaser.Game(config);

// reserve keyboard vars
// A/D/W for P1 controls, LEFT/RIGHT/UP for P2 controls.
// TWO to toggle 2 player.
// R for reset.
let keyA, keyD, keyW, keyR, keyLEFT, keyRIGHT, keyUP, keyTWO;
let highscore = 0;