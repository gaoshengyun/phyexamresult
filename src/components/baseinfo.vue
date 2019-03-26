<template>
  <div>
    <h1>体检结果基础信息</h1>
    <table class="baseinfo">
      <tr>
        <td>姓名</td>
        <td colspan="2" style="width:200px">高胜云</td>
        <td>性别</td>
        <td>男</td>
        <td>年龄</td>
        <td colspan="3" style="width:300px">35</td>
      </tr>
      <tr>
        <td>联系地址</td>
        <td colspan="4" style="width:400px"></td>
        <td>联系电话</td>
        <td colspan="3" style="width:300px"></td>
      </tr>

      <!-- 眼科 -->
      <tr>
        <td rowspan="4">眼科</td>
        <td rowspan="2">裸眼视力</td>
        <td colspan="">右</td>
        <td rowspan="2">矫正视力</td>
        <td colspan="3">右 度数</td>
        <td rowspan="4" colspan="2">医师意见</td>
      </tr>
      <tr>
        <td>左</td>
        <td colspan="3">左 度数</td>
      </tr>
      <tr>
        <td colspan="6">色觉</td>
      </tr>
      <tr>
        <td colspan="6">其他</td>
      </tr>

      <!-- 五官科 -->
      <tr>
        <td rowspan="3">五官科</td>
        <td>听力</td>
        <td>右</td>
        <td>左</td>
        <td colspan="3">耳疾</td>
        <td rowspan="3" colspan="2">医师意见</td>
      </tr>
      <tr>
        <td colspan="3">嗅觉</td>
        <td colspan="3">口吃</td>
      </tr>
      <tr>
        <td colspan="6">颜面部</td>
      </tr>

      <!-- 内科 -->
      <tr>
        <td rowspan="5">内科</td>
        <td>心率</td>
        <td></td>
        <td colspan="4">血压</td>
        <td rowspan="5" colspan="2">医师意见</td>
      </tr>
      <tr>
        <td colspan="3">发育及营养状况</td>
        <td colspan="3">心血管</td>
      </tr>
      <tr>
        <td colspan="3">神经及精神</td>
        <td colspan="3">肝</td>
      </tr>
      <tr>
        <td colspan="3">肺及呼吸道</td>
        <td colspan="3">脾</td>
      </tr>
      <tr>
        <td colspan="6">其他</td>
      </tr>

      <!-- 外科 -->
      <tr>
        <td rowspan="4">外科</td>
        <td>身高</td>
        <td colspan="2"></td>
        <td>体重</td>
        <td colspan="2"></td>
        <td rowspan="4" colspan="2">医生意见</td>
      </tr>
      <tr>
        <td colspan="2">皮肤</td>
        <td colspan="2">四肢</td>
        <td colspan="2">淋巴</td>
      </tr>
      <tr>
        <td colspan="2">关节</td>
        <td colspan="2">脊柱</td>
        <td colspan="2">甲状腺</td>
      </tr>
      <tr>
        <td colspan="6">其他</td>
      </tr>
      <tr>
        <td>化验检验</td>
        <td colspan="3">肝功能(ALT)</td>
        <td colspan="5">乙型肝炎表面抗原(HBsAg)</td>
      </tr>
      <tr>
        <td>胸部透视</td>
        <td colspan="3"></td>
        <td colspan="5">其他</td>
      </tr>
      <tr>
        <td>体检<br>检查</br>结果</td>
        <td colspan="8">结论:</td>
      </tr>
      <tr>
        <td>备注</td>
        <td colspan="8"></td>
      </tr>
      <tr>
        <td>主检医师</td>
        <td colspan="4"></td>
        <td>检查日期</td>
        <td colspan="3"></td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    
  }
</script>
<style lang="less" scoped>
  .baseinfo{
    // border: 1px solid #000;
    display: block;
    width: 900px;
    margin: 0 auto;
    border-collapse: collapse;
    border-spacing: 0;
    td{
      border: 1px solid #000;
      white-space:nowrap;
      height: 40px;
      width: 100px;
    }
  }




  
</style>
