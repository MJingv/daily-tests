<template>
  <div class="wrap">
    <div v-for="(item,index) in jokes" :key="index" class="item" @click="selectItem(index)">
      {{index}} *  -- {{item.content}}
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Scroll from './scroll.vue'
  export default {
    components: {
      Scroll
    },
    name: "jokes",
    data() {
      return {
        jokes: {}
      };
    },
    created() {
      this.initJokes()
    },
    mounted() {

    },
    methods: {
      selectItem(index) {
        console.log(index)
      },
      async initJokes() {
        try {
          const response = await axios.post('https://bird.ioliu.cn/joke/', {
            pagesize: 20
          })
          this.jokes = response.data.data
        } catch (e) {
          console.log(e)
        }
      }
    }
  };
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">

.wrap
  font-size: 15px;
  .item
    border-bottom: 1px solid #ccc;
    margin:10px;
    padding:10px
    &:last-child
      border-bottom:transparent



</style>
