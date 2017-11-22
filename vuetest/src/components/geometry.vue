<template>
  <div id="app">
    <canvas id="mainCanvas" ref="mainCanvas" width="400px" height="300px"></canvas>
  </div>
</template>

<script>
  import THREE from "three";
  export default {
    data() {
      return {};
    },
    created() {},
    mounted() {
      this.camera();
    },
    methods: {
      camera() {
        // renderer
        var renderer = new THREE.WebGLRenderer({
          canvas: this.$refs.mainCanvas
        });
        renderer.setClearColor(0x000000); // black

        // scene
        var scene = new THREE.Scene();

        var camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
        camera.position.set(25, 25, 25);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);


        // var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 2, 1, 1, 2),
        //   new THREE.MeshBasicMaterial({
        //     color: 0xff0000,
        //     wireframe: true
        //   })
        // );
        // scene.add(cube);

        // var plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 4),
        //   new THREE.MeshBasicMaterial({
        //     color: 0xcccccc,
        //     wireframe: true
        //   })
        // );
        // scene.add(plane);

        // var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 5, 50),
        //   new THREE.MeshBasicMaterial({
        //     color: 0xcccccc,
        //     wireframe: true
        //   })
        // );


        // var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6, Math.PI / 6, Math.PI / 3),
        //   new THREE.MeshBasicMaterial({
        //     color: 0xcccccc,
        //     wireframe: true
        //   })
        // );


        // var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
        //   Math.PI / 2, Math.PI, Math.PI / 6, Math.PI / 2),
        //   new THREE.MeshBasicMaterial({
        //     color: 0xcccccc,
        //     wireframe: true
        //   })
        //   );


        // var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
        //   Math.PI / 6, Math.PI / 3),
        //   new THREE.MeshBasicMaterial({
        //     color: 0xcccccc,
        //     wireframe: true
        //   })
        //   );

        // var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
        //   0, Math.PI * 2, Math.PI / 6, Math.PI / 3),
        //   new THREE.MeshBasicMaterial({
        //     color: 0xcccccc,
        //     wireframe: true
        //   })
        //   );

        // var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 8, 6,
        //     Math.PI / 2, Math.PI, Math.PI / 6, Math.PI / 2),
        // new THREE.MeshBasicMaterial({
        //   color: 0xcccccc,
        //   wireframe: true
        // })
        // );
        // scene.add(sphere);


        // var circle = new THREE.Mesh(new THREE.TorusGeometry(3, 1, 12, 20, Math.PI / 3 * 4),
        // new THREE.MeshLambertMaterial({

        //   opacity: 0.7,
        //   //wireframe: true,
        //   emissive: 0xff0000
        // })
        // );
        // scene.add(circle);

        var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 20, 8),
          new THREE.MeshPhongMaterial({
            specular: 0xff0000,
            shininess: 1000
          })
        );
        scene.add(sphere);
        // render
        renderer.render(scene, camera);
      }


    }
  };
</script>

<style>

</style>
