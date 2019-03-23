<template>
  <div class="nav">
    <el-menu :default-active="this.$route.path" class="el-menu-demo" router mode="horizontal" @select="handleSelect">
      <el-menu-item v-for="(item, index) in navlist" :key="index" :index="item.navPath">
        {{item.navName}}
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
     navlist:[
       {
         navName:'基础信息',
         navPath:'/'
       },
       {
         navName:'血常规检查',
         navPath:'/bloodcheck'
       },
       {
         navName:'免疫检查',
         navPath:'/immunoassay'
       },
       {
         navName:'B超',
         navPath:'/ultrasound'
       },
       {
        navName:'X射线检查',
        navPath:'/xray'
       },
       {
         navName:'心电图检查',
         navPath:'/ecg'
       }
     ]
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>
<style lang="less" scoped>

</style>
