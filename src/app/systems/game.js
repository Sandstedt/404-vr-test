import {Box} from "../entities/Box";

AFRAME.registerSystem('game', {
    schema: {},

    init: function () {
        console.log('Game Initialized');

        // Example summon a custom entity
        this.box = new Box(0, 2, -5, {
           width: 1,
           height: 1,
           depth: 1
        });
    },

    tick(time, timeDelta){
        // Your gameloop code
        this.box.update(time, timeDelta);
    }
});
