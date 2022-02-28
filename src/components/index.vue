<template>
  <div class="video-list">
    <div class="item" v-for="(item, index) in videoList" :key="index">
      <VidoeRtmp :url="item.url" :id="item.name+index"></VidoeRtmp>
    </div>
  </div>
</template>

<script>
import VidoeRtmp from './VidoeRtmp'

const videoList = window.videoList
console.log(videoList)
export default {
  components: { VidoeRtmp },
  data() {
    return {
      videoList: videoList,
    }
  },
  methods: {},
}
</script>

<style scoped>
.video-list {
  width: 100%;
  height: 98vh;
  flex-wrap: wrap;
  display: flex;
  background-color: #333;
}
.video-list .item {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
