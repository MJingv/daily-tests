<template>
  <div id="app">
    <h3> 正交相机</h3>
    <canvas id="mainCanvas" ref="mainCanvas" width="400px" height="300px"></canvas>
    <h3>透视相机</h3>
    <canvas id="subCanvas" ref="subCanvas" width="400px" height="300px"></canvas>
  </div>
</template>

<script>
  import THREE from "three";
  export default {
    data() {
      return {

      };
    },
    created() {},
    mounted() {
      this.camera1();
      this.camera2()
    },
    methods: {
      camera2() {
        // renderer
        var renderer = new THREE.WebGLRenderer({
          canvas: this.$refs.subCanvas
        });
        renderer.setClearColor(0x000000); // black

        // scene
        var scene = new THREE.Scene();

        var camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 10);
        camera.position.set(0, 0, 5);
        scene.add(camera);

        // a cube in the scene
        var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
          new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
          })
        );
        scene.add(cube);

        // render
        renderer.render(scene, camera);

      },
      camera1() {
        // renderer
        var renderer = new THREE.WebGLRenderer({
          canvas: this.$refs.mainCanvas
        });
        renderer.setClearColor(0x000000); // black

        // scene
        var scene = new THREE.Scene();

        // camera
        // var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000);
        // camera.position.set(0, 0, 5);
        // scene.add(camera);

        var camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10);
        camera.position.set(4, -3, 5);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        // a cube in the scene
        // var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
        //   new THREE.MeshBasicMaterial({
        //     color: 0xff0000
        //   })
        // );
        // scene.add(cube);
        var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
          new THREE.MeshBasicMaterial({
            color: 0xff0000,
            wireframe: true
          })
        );
        scene.add(cube);

        // render
        renderer.render(scene, camera);
      }

    }
  };
</script>

<style>

</style>
