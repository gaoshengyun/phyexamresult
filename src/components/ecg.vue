<template>
  <div>
    <h1>心电图检查</h1>
    <table>
      <tr>
        <th>项目</th>
        <th>实测</th>
        <th>正常值</th>
        <th>项目</th>
        <th>实测</th>
        <th>正常值</th>
      </tr>
      <tr>
        <td>P 波时限(秒)</td>
        <td>0.10</td>
        <td><0.12</td>
        <td>P-R 间期(秒)</td>
        <td>0.42</td>
        <td>0.32~0.44</td>
      </tr>
      <tr>
        <td>P-R 间期(秒)</td>
        <td>0.14</td>
        <td>0.12~0.20</td>
        <td>QTc 时限(秒)</td>
        <td>0.42</td>
        <td><0.45</td>
      </tr>
      <tr>
        <td>QSR 时限(秒)</td>
        <td>0.08</td>
        <td>0.06~0.10</td>
        <td>心房率(次/分钟)</td>
        <td>89</td>
        <td>60~100</td>
      </tr>
      <tr>
        <td>电轴(度)</td>
        <td>+45°</td>
        <td>+30°~90</td>
        <td>心室率(次/分钟)</td>
        <td>89</td>
        <td>60~100</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
 
}
</script>
<style lang="less" scoped>
  table{
    width: 900px;
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
    th,td{
      border: 1px solid #000;
    }
    td{
      text-align: left;
      padding-left: 20px;
    }
  }
</style>
