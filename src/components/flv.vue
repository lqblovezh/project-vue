<template>
  <div class="video-list">
    <video id="myvideo" controls autoplay @click="click"></video>
  </div>
</template>

<script>
import flv from 'flv.js'
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {
    if (flv.isSupported()) {
      this.player = flv.createPlayer({
        type: 'flv',
        // url: 'https://isxsports.com/equipment/chengnanyihao.flv',
        url: 'https://isxsports.com/equipment/live0.flv',
      })
      var video = document.querySelector('#myvideo')
      this.player.attachMediaElement(video)
      this.player.load()
    }
  },
  methods: {
    click() {
      if (this.playing) {
        this.player.pause()
        this.playing = false
      } else {
        this.player.play()
        this.playing = true
      }
    },
  },
}
</script>

<style scoped>
.video-list {
  width: 100%;
  height: 98vh;
}
video {
  height: 500px;
}
</style>
