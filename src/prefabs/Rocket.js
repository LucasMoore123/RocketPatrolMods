// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
   constructor(scene, x, y, texture, frame, player) {
     super(scene, x, y, texture, frame);
 
     // add object to existing scene
     scene.add.existing(this);
     this.isFiring = false;
     this.moveSpeed = 2;
     this.player = player;
     this.sfxRocket = scene.sound.add('sfx_rocket'); // add rocket sfx
   }

   update() {
      // left/right movement
      if (this.player == 1) {
         if (keyA.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
         } else if (keyD.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
         }
      }
      // left.right movement p2
      if (this.player == 2) {
         if (keyLEFT.isDown && this.x >= borderUISize + this.width) {
            this.x -= this.moveSpeed;
         } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width) {
            this.x += this.moveSpeed;
         }
      }
      // fire button
      if (Phaser.Input.Keyboard.JustDown(keyW) && !this.isFiring && this.player == 1) {
         this.isFiring = true;
         this.sfxRocket.play();  // play sfx
      }

      if (keyUP.isDown && !this.isFiring && this.player == 2) {
         this.isFiring = true;
         this.sfxRocket.play();  // play sfx
      }
      // if fired, move up
      if (this.isFiring && this.y >= borderUISize * 3 + borderPadding){
         this.y -= this.moveSpeed;
      }
      // reset on miss
      if (this.y <= borderUISize * 3 + borderPadding) {
         this.isFiring = false;
         this.y = game.config.height - borderUISize - borderPadding;
      }
   }

   // reset rocket to "ground"
   reset() {
      this.isFiring = false;
      this.y = game.config.height - borderUISize - borderPadding;
   }
}
