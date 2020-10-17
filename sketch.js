var playercount, database, form, player, game, allplayer, canvas, car1, car2, car3, car4, cars;
var distance = 0;
var gamestate = 0;

function setup() {
    canvas = createCanvas(displayWidth - 20, displayHeight - 30);
    database = firebase.database();
    game = new Game();
    game.getstate();
    game.start();
}

function draw() {
    if (playercount === 4) {
        game.updatestate(1);
    }
    if (gamestate === 1) {
        clear();
        game.play();
    }
}
