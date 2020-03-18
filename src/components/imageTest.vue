<template>
  <div class="image">
    <div class="imgbox">
      <img class="img1" :src="img1" alt />
      <VueDragResize
        class="drag"
        :style="'backgroundImage:url('+img2+')'"
        :isActive="true"
        :w="300"
        :h="300"
        @resizing="resize"
      ></VueDragResize>
    </div>
    <button v-if="isShowBtn" @click="save">确认</button>
  </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize'
export default {
  props: {},
  components: {
    VueDragResize,
  },
  created() {
    let baseUrl = 'ws://192.168.1.32:8008/img?id=123456'
    let webSocket = new WebSocket(baseUrl)
    webSocket.onopen = function(e) {
      console.log('webSocket is open')
    }
    webSocket.onmessage = function(e) {
      this.img1 = e.data.img1
      this.img2 = e.data.img2
    }
    webSocket.onclose = function(e) {
      console.log('webSocket is close')
    }
  },
  data() {
    return {
      isShowBtn: false,
      img1: '',
      img2: '',
      left: Number, //组件的X位置
      top: Number, //组件的Y位置
      width: Number, //组件的宽度
      height: Number, //组件的高度
    }
  },
  methods: {
    resize(newRect) {
      this.width = newRect.width
      this.height = newRect.height
      this.top = newRect.top
      this.left = newRect.left
      this.isShowBtn = true
    },
    save() {
      this.axios
        .post('api/getData.php', {
          params: {
            title: '眼镜',
          },
        })
        .then(res => {
          console.log(res)
        })
    },
  },
}
</script>

<style>
.drag {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
}
.imgbox {
  position: relative;
  width: 600px;
  height: 300px;
  border: 1px solid #000;
  box-sizing: border-box;
}
.img1,
.img2 {
  max-width: 600px;
  max-height: 300px;
}
.img2 {
  position: absolute;
  left: 0;
  right: 0;
  border: 1px solid red;
  box-sizing: border-box;
}
</style>
