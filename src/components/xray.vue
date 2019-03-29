<template>
  <div>
      <h1>胸透报告</h1>
      <div class="result" v-html="result"></div>
  </div>
</template>
<script>
import {result} from '../mockdata/xray.js'
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
    text-align: left;
    width: 900px;
    margin: 0 auto;
  }
</style>

