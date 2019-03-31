<template>
  <div>
    <h1>尿常规十一项</h1>
    <table>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in result1" :key="item.id">
        <td>{{item.abbreviation}}</td>
        <td>{{item.name}}</td>
        <td>{{item.result}}</td>
        <td><strong>{{item.hint}}</strong></td>
        <td>{{item.reference}}</td>
        <td>{{item.units}}</td>
      </tr>
    </table>

    <h1>常规便检</h1>
    <table>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in result2" :key="item.id">
        <td>{{item.abbreviation}}</td>
        <td>{{item.name}}</td>
        <td>{{item.result}}</td>
        <td><strong>{{item.hint}}</strong></td>
        <td>{{item.reference}}</td>
        <td>{{item.units}}</td>
      </tr>
    </table>

    <h1>癌指标筛查</h1>
    <table>
      <tr>
        <th>简称</th>
        <th>项目</th>
        <th>结果</th>
        <th>提示</th>
        <th>参考值</th>
        <th>单位</th>
      </tr>
      <tr v-for="(item, index) in result3" :key="item.id">
        <td>{{item.abbreviation}}</td>
        <td>{{item.name}}</td>
        <td>{{item.result}}</td>
        <td><strong>{{item.hint}}</strong></td>
        <td>{{item.reference}}</td>
        <td>{{item.units}}</td>
      </tr>
    </table>
  </div>
</template>
<script>
import {result1,result2,result3} from '../mockdata/immunoassay.js'
export default {
  data() {
    return {
      result1,
      result2,
      result3
    }
  },
}
</script>
<style lang="less" scoped>
  table{
    // font-size: 14px;
    width: 900px;
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
    border-bottom: 1px solid #000;
    th{
      border: 1px solid #000;
    }
    td{
      text-align: left;
      border-left: 1px solid #000;
      border-right: 1px solid #000;
      padding-left: 10px;
      strong{
        font-weight: bold;
      }
    }
  }
</style>
