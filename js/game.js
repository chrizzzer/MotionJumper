var gamedim = {
    width: 450,
    height: 0
}

gamedim.height = gamedim.width / 4 * 3;

var game = new Phaser.Game(gamedim.width, gamedim.height, Phaser.AUTO, 'gameCanvasContainer', { preload: preload, create: create, update: update });

var colors = new tracking.ColorTracker(['yellow']);

tracking.track('#myVideo', colors, {camera: true});

var CCC = 0;

var video = {
    width: 350,
    height: 0
}

video.height = (video.width) / 4 * 3; 