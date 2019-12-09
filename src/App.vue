<template>
  <div id="app">
    <img src="./assets/logo.png" />
    <!-- <video
      id="my-player"
      class="video-js"
      controls
      preload="auto"
      data-setup="{}"
      width="500"
      height="400"
    >
      <source src="rtmp://isxsports.com/dext/live" type="rtmp/flv" />
    </video> -->
    <video
      id="my-video"
      class="video-js"
      controls
      preload="auto"
      width="640"
      height="440"
      poster="MY_VIDEO_POSTER.jpg"
      data-setup="{}"
    >
      <source src="rtmp://58.200.131.2:1935/livetv/gxtv" type="rtmp/flv" />
      <!-- <source src="http://vjs.zencdn.net/v/oceans.webm" type="video/webm" />
      <source src="http://vjs.zencdn.net/v/oceans.ogv" type="video/ogg" /> -->
    </video>
  </div>
</template>

<script>
export default {
  mounted() {
    var options = {};
    var myPlayer = videojs("my-video");
    videojs("my-video").ready(function() {
      var myPlayer = this;
      myPlayer.play();
    });
  },
  methods: {}
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
