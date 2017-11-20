<template>
  <div id="app">
    <select v-model="selected">
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
      </select>
    <input type="text">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        selected: [],
        checkedNames: [],
        picked: ''
      };
    },
    created() {},
    mounted() {

    },
    methods: {

    }
  };
</script>

<style>
  input {
    appearance: none;
    border: transparent
  }

  select {
    /*Chrome和Firefox里面的边框是不一样的，所以复写了一下*/
    border: solid 1px #000;
    /*很关键：将默认的select选择框样式清除*/
    appearance: none;
    /*在选择框的最右侧中间显示小箭头图片*/
    background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;
    /*为下拉小箭头留出一点位置，避免被文字覆盖*/
    padding-right: 14px;
  }
</style>
