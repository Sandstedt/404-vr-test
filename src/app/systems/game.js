// import {Box} from "../entities/Box";

AFRAME.registerComponent('change-color-on-hover', {
  schema: {
    color: {default: 'red'}
  },

  init: function () {
    var data = this.data;
    var el = this.el;  // <a-box>
    var defaultColor = el.getAttribute('material').color;

    el.addEventListener('mouseenter', function () {
    el.setAttribute('color', data.color);
    });

    el.addEventListener('mouseleave', function () {
    el.setAttribute('color', defaultColor);
    });
  }
});

AFRAME.registerSystem('game', {
  schema: {},

  init: function () {
    console.log('Game Initialized');

    // // Example summon a custom entity
    // this.box = new Box(0, 2, -5, {
    //  width: 1,
    //  height: 1,
    //  depth: 1
    // });
  },

  tick(time, timeDelta){
    // Your gameloop code
    // this.box.update(time, timeDelta);
  }
});
