<script>
import VidoeRtmp from '@/components/VidoeRtmp'

export default {
  mounted() {},
  components: { VidoeRtmp },
  data() {
    return {
      urlList: [
        {
          id: 'live17',
          url: 'rtmp://isxsports.com/dext/live17',
        },
        {
          id: 'live16',
          url: 'rtmp://isxsports.com/dext/live16',
        },
        {
          id: 'live15',
          url: 'rtmp://isxsports.com/dext/live15',
        },
        {
          id: 'live14',
          url: 'rtmp://isxsports.com/dext/live14',
        },
      ],
    }
  },
  methods: {},
}
</script>

<template>
  <div id="app">
    <div class="videoList">
      <VidoeRtmp v-for="item in urlList" :url="item.url" :id="item.id" :key="item.id" />
    </div>
  </div>
</template>

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
