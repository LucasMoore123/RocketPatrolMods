class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }

  preload() {
      // load audio
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion38.wav');
      this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
  }

   create (){
      // menu text configuration
      let menuConfig = {
         fontFamily: 'Courier',
         fontSize: '28px',
         backgroundColor: '#3C3B6E',
         color: '#B22234',
         align: 'right',
         padding: {
         top: 5,
         bottom: 5,
         },
         fixedWidth: 0
      }

      // show menu text
      this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding, 'COVID WARS', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2, 'Use A and D keys to move & W to fire', menuConfig).setOrigin(0.5);
      menuConfig.backgroundColor = '#0000FF';
      menuConfig.color = '#000';
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding, 'Press <- for Novice or -> for Expert', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2 + borderUISize + borderPadding + 64, "Press 2 for 2 Player Mode!", menuConfig).setOrigin(0.5);

      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
      keyTWO = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.TWO);
   }
   update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
         // easy mode
         game.settings = {
            spaceshipSpeed: 3,
            gameTimer: 60000    
         }
         this.sound.play('sfx_select');
         this.scene.start('playScene');    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
         // hard mode
         game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000    
         }
         this.sound.play('sfx_select');
         this.scene.start('playScene');    
      }
      if(Phaser.Input.Keyboard.JustDown(keyTWO)){
         game.settings = {
            spaceshipSpeed: 4,
            gameTimer: 45000,
            mode: 1
         }
         this.sound.play('sfx_select');
         this.scene.start('playScene');
      }
   }
}
