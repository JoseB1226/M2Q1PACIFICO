class GameOverScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameOverScene' });
    }

    preload() {
        this.load.image('gameOverBG', 'assets/menu/menuBG.jpg');
        this.load.image('retryButton', 'assets/menuButtons/retryBTN.png');
        this.load.image('mainMenuButton', 'assets/menuButtons/mainMenuBTN.png');
    }

    create() {
        
        const gameOverBG = this.add.image(400, 300, 'gameOverBG').setDisplaySize(800, 600);

        
        const gameOverText = this.add.text(400, 150, 'Game Over', {
            fontSize: '64px',
            fill: '#ffffff'
        });
        gameOverText.setOrigin(0.5); 

        
        const retryButton = this.add.image(400, 300, 'retryButton').setInteractive();
        retryButton.setScale(0.5);
        retryButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });

        
        const mainMenuButton = this.add.image(400, 400, 'mainMenuButton').setInteractive();
        mainMenuButton.setScale(0.5);
        mainMenuButton.on('pointerdown', () => {
            this.scene.start('MainMenuScene');
        });
    }
}

export default GameOverScene;
