<template>
  <div class="video">
    <video
      :id="id"
      class="video-js"
      controls
      autoplay="true"
      preload="auto"
      width="640"
      height="440"
      poster="MY_VIDEO_POSTER.jpg"
      data-setup="{}"
    >
      <source :src="url" type="rtmp/flv" />
    </video>
  </div>
</template>

<script>
export default {
  props: {
    url: {
      type: String,
      default: 'rtmp://isxsports.com/dext/live14',
    },
    id: {
      type: String,
      default: 'my-video',
    },
  },
  data() {
    return {
      myPlayer: null,
    }
  },
  mounted() {
    setTimeout(() => {
      this.myPlayer = videojs(this.id, { autoplay: true })
      this.myPlayer.ready(function() {
        console.log('------------')
        var myPlayer = this
        setTimeout(() => {
          myPlayer.pause()
          myPlayer.play()
        }, 500)
      })
    }, 200)
  },
  methods: {},
}
</script>

<style>
.video {
  width: 50%;
  display: inline-block;
}
</style>
