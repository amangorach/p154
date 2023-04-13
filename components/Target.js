AFRAME.registerComponent("target-ring", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      var id = `ring${i}`;

      var posX = (Math.random() * 30 + (-10));
      var posY = (Math.random() * 2 + (-1));
      var posZ = (Math.random() * 30 + -10);

      var position = { x: posX, y: posY, z: posZ };
      this.createRings(id, position);
    }
  },

  createRings: function (id, position) {

    var terrainEl = document.querySelector("#terrain");

    var ringEl = document.createElement("a-entity");

    ringEl.setAttribute("id", id);
    ringEl.setAttribute("position", position);
    ringEl.setAttribute("scale", { x: 25, y: 25, z: 25 });
    ringEl.setAttribute("gltf-model", "./assets/bit_coin/scene.gltf");
    ringEl.setAttribute("animation-mixer", {})

    terrainEl.appendChild(ringEl);
  }
});

