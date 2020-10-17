class Game {
    constructor() {

    }
    getstate() {
        var gamestateinfo = database.ref("gamestate");
        gamestateinfo.on("value", (data) => {
            gamestate = data.val();
        })
    }
    updatestate(state) {
        database.ref("/").update({
            gamestate: state
        })
    }
    async start() {
        if (gamestate === 0) {
            player = new Player();
            form = new Form();
            form.display();
            var pcountref = await database.ref("playercount").once("value");
            if (pcountref.exists()) {
                playercount = pcountref.val();
                player.getcount();
            }
        }
        car1 = createSprite(100, 200);
        car2 = createSprite(300, 200);
        car3 = createSprite(500, 200);
        car4 = createSprite(700, 200);
        cars = [car1, car2, car3, car4];
    }
    play() {
        form.hide();
        Player.getplayer();
        if (allplayer !== undefined) {
            var index = 0;
            var x = 0;
            var y ;
            for (var plr in allplayer) {
                index += 1;
                x += 200;
                y = displayHeight - allplayer[plr].distance;
                cars[index - 1].x = x;
                cars[index - 1].y = y;
                if (index === player.index) {
                    cars[index - 1].shapeColor = "red";
                    camera.position.x = displayWidth/2;
                    camera.position.y = cars[index - 1].y;
                }
            }

        }
        if (keyIsDown(UP_ARROW) && player.index !== null) {
            player.distance += 10;
            player.updateplayer();
        }
        drawSprites();
    }
}