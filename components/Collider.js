AFRAME.registerComponent("flying-birds", {
  init: function () {
    for (var i = 1; i <= 20; i++) {
      var id = `hurdle${i}`;

      var posX = (Math.random() * 30 + (-10));
      var posY = (Math.random() * 2 + (-1));
      var posZ = (Math.random() * 30 + -10);

      var pos = { x: posX, y: posY, z: posZ }
      this.flyingBirds(id, pos);
    }
  },

  flyingBirds: function (id, pos) {

    var terrainEl = document.querySelector("#terrain");

    var birdsEl = document.createElement("a-entity");

    birdsEl.setAttribute("id", id);
    birdsEl.setAttribute("position", pos);
    birdsEl.setAttribute("scale", { x: 0.15, y: 0.15, z: 0.15 });
    birdsEl.setAttribute("gltf-model", "./assets/guppy_fish/scene.gltf");
    birdsEl.setAttribute("animation-mixer", {});
    
    terrainEl.appendChild(birdsEl);
  }
});
