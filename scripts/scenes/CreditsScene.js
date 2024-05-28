class CreditsScene extends Phaser.Scene {
    constructor() {
        super({ key: 'CreditsScene' });
    }

    create() {
       
     

        const backButton = this.add.text(20, 20, 'Back', {
            fontSize: '24px',
            fill: '#ffffff',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                stroke: false,
                fill: true
            }
        }).setInteractive();

        backButton.on('pointerup', () => {
            this.scene.start('MainMenuScene'); 
        });

        this.add.text(400, 100, 'Game by', {
            fontSize: '48px',
            fill: '#ffffff',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        this.add.text(400, 250, 'Jose Sebastian Pacifico', {
            fontSize: '36px',
            fill: '#ffffff',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        this.add.text(400, 300, 'A223', {
            fontSize: '24px',
            fill: '#ffffff',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);

        this.add.text(400, 350, 'Entertainment and Multimedia Computing', {
            fontSize: '24px',
            fill: '#ffffff',
            shadow: {
                offsetX: 2,
                offsetY: 2,
                color: '#000000',
                blur: 4,
                stroke: false,
                fill: true
            }
        }).setOrigin(0.5);
    }
}

export default CreditsScene;