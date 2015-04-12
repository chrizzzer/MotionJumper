var game = new Phaser.Game(800, 500, Phaser.AUTO, 'gameCanvasContainer', { preload: preload, create: create, update: update });

var colors = new tracking.ColorTracker(['yellow']);

tracking.track('#myVideo', colors, {camera: true});