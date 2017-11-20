<template>
  <div id="app">
    <div> {{`${weather.date} ,${weather.city} ,${weather.weather} `}} </div>
    <div>daily-info</div>
    <div v-for="(item,index) in weather.daily" :key="index">
      <ul v-for="(val,key) in item.day" :key="key">
        <h6 v-if="key!=='img'"> {{key}} -- {{val}}</h6>
      </ul>
    </div>
  </div>
  </div>
</template>
<script>
  import axios from "axios";
  export default {
    name: "weather",

    data() {
      return {
        weather: {}
      };
    },
    created() {},
    mounted() {
      this.testAxios();
    },
    methods: {
      async testAxios() {
        try {
          const response = await axios.get("https://bird.ioliu.cn/weather", {
            params: {
              city: "乌鲁木齐"
            }
          })
          console.log(response);
          this.weather = response.data.result;
        } catch (e) {
          console.log(e)
        }
      }
    }
  };
</script>

<style>

</style>
