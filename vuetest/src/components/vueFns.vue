<template>
  <div class="wrap">
    <h2> randomNum is {{randomNum}}</h2>
    {{res}}
  </div>
</template>

<script>
  export default {

    data() {
      return {
        randomNum: 0,
        res: '',

      };
    },
    watch: {
      randomNum: function(val, oldVal) {
        if (val !== oldVal) {
          this.res = `${oldVal}变成了${val}`
        }
      },
    },
    created() {

    },
    mounted() {
      setInterval(() => {
        this.randomNum = Math.floor(Math.random()*10);
      }, 1000)
    },
    methods: {

    }
  };
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">



</style>
