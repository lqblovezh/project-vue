<template>
  <div class="video">
    <videoPlayer ref="myPlayer" class="vjs-custom-skin videoPlayer" :options="playerOptions"></videoPlayer>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import videoPlayer from 'vue-video-player/src/player.vue'
import 'videojs-flash'
export default {
  components: { videoPlayer },
  props: {
    url: {
      type: String,
      default: 'rtmp://isxsports.com/dext/live20',
    },
  },
  data() {
    return {
      myPlayer: null,
      playerOptions: {
        loop: false,
        sources: [{ type: 'rtmp/mp4', src: this.url }],
        techOrder: ['flash', 'html5'],
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        fluid: true,
        autoplay: true,
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true, //全屏按钮
        },
      },
    }
  },
  methods: {},
  mounted() {
    // setTimeout(() => {
    //   console.log(this.id)
    //   this.myPlayer = videojs(this.id, { autoplay: true })
    //   this.myPlayer.ready(function () {
    //     var myPlayer = this
    //     setTimeout(() => {
    //       myPlayer.pause()
    //       myPlayer.play()
    //     }, 600)
    //   })
    // }, 200)
  },
  beforeDestroy() {
    this.$refs.myPlayer.dispose()
  },
}
</script>

<style>
.video {
  width: 85%;
}
</style>
