<template>
  <div id="app">
    hello jehol
    <VueFns>hello world</VueFns>
  </div>
</template>

<script>
  import VueFns from './components/vueFns.vue';
  export default {
    name: "app",
    components: {
      VueFns
    },
    data() {
      return {
        carId: "",
        isActive: false
      };
    },
    created() {},
    mounted() {},
    methods: {
      toggle() {
        this.isActive = !this.isActive;
      }
    }
  };
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
*
  padding: 0;
  margin: 0;
.btn-wrap
  border: 3px solid orange;
  position: relative;
  width: 100px;
  height: 50px;
  background: #86d993;
  border-radius: 50px;
  padding: 2px;
  transition: all 0.4s ease;
  .btn-inner
    top: 0;
    left: 0;
    position: absolute;
    border-radius: 50%;
    width: 50%;
    height: 100%;
    background: #fff;
    transition: all 0.4s ease;
  &.active
    background: #ccc;
    .btn-inner
      left: 50%;
.item-input
  margin:5px
  background:#ccc
  padding:10px
  input
   background:none;
   outline:none;
   border:0px;
.card
  height:150px
  display:flex
  flex-wrap:wrap
  align-content:space-between
  .card__time
    width:100%
  .card__fine,.card__score
    width:50%
  .card__footer
    padding:10px 0px
    border-top:1px solid #ccc
    width:100%
    .footer__path
      font-size:12px
</style>
