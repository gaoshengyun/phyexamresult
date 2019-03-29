<template>
  <div>
    <h1>超声波检查</h1>
    <div class="result" v-for="(item, index) in result" :key="index.id">
      <div v-html="item.result"></div>
    </div>
  </div>
</template>
<script>
import {result} from '../mockdata/ultrasoundcheck.js'
export default {
  data() {
    return {
      result
    }
  },
}
</script>
<style lang="less" scoped>
  .result{
    width: 900px;
    margin: 0 auto;
    text-align: left;
  }
</style>
