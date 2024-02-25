import Phaser from "phaser";

export default class PreloadScene extends Phaser.Scene {
    private platforms?: Phaser.Physics.Arcade.StaticGroup
    constructor() {
        super({ key: "PreloadScene" });
    }

    preload() {
        this.load.image("sky", "assets/sky.png");
        this.load.image("ground", "assets/platform.png");
        this.load.image("star", "assets/star.png");
        this.load.image("bomb", "assets/bomb.png");
        this.load.spritesheet("dude", "assets/dude.png", {frameWidth: 32, frameHeight: 48})
    }

    create() {
        this.add.image(400, 300, "star");
        this.platforms = this.physics.add.staticGroup()
        this.platforms.create(400, 568, "ground")
        this.scene.start("MainScene");
    }
}
