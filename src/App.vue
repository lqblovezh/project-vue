<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <div>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </div>
    <div class="div">
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
      >全选</el-checkbox>
      <div style="margin: 15px 0;"></div>
      <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
        <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
      </el-checkbox-group>
    </div>
    <!-- <div>
      <vueQriousjs :config="config"></vueQriousjs>
      <div style="width:400px;margin:0 auto;">
        <el-input v-model="config.value" placeholder="二维码内容"></el-input>
        <el-slider v-model="config.size" :max="400" :min="200"></el-slider>
        <el-color-picker v-model="config.background" @change="colorChange"></el-color-picker>
        <el-color-picker v-model="config.foreground"></el-color-picker>
      </div>
    </div>-->
    <!-- <el-steps :space="200" :active="1" finish-status="finish">
      <el-step title="已完成"></el-step>
      <el-step title="进行中"></el-step>
      <el-step title="步骤 3"></el-step>
    </el-steps>-->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    const cityOptions = ['上海', '北京', '广州', '深圳']
    return {
      config: {
        background: '#fff',
        backgroundAlpha: 0.8,
        foreground: '#000',
        foregroundAlpha: 0.8,
        level: 'Q',
        padding: 25,
        size: 250,
        value: 'https://github.com/slimcheng/vue-qriousjs',
      },
      checkAll: false,
      checkedCities: ['上海', '北京', '广州', '深圳'],
      cities: cityOptions,
      isIndeterminate: true,
    }
  },
  created() {
    console.log(this.axios);
    this.axios.get('/api/setting/position/banner_pc').then(res => {
      console.log(res, 111111)
    })
  },
  methods: {
    colorChange(val) {
      console.log(val)
    },
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length
    },
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
