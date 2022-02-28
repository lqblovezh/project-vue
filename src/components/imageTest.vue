<template>
  <div class="image">
    <div class="imgbox" :style="{width: baseWidth,height: baseHeight}">
      <img class="img1" @load.once="loadImage" ref="img1" :src="img1" />
      <div
        class="box"
        v-if="img1 && !firstImgLoad"
        :style="{width: contrastWidth,height: contrastHeight,top:contrastTop,left:contrastLeft}"
      ></div>
      <VueDragResize
        class="drag"
        v-if="img1 && !firstImgLoad"
        :isActive="true"
        :w="img2Weight"
        :h="img2Height"
        :x="left"
        :y="top"
        @resizing="resize"
        @dragstop="resize"
      >
        <img :src="img2" :width="img2Weight" :height="img2Height" alt />
      </VueDragResize>
    </div>
    <div class="eare">
      <input type="number" v-model="grab" />
      <input type="number" v-model="wendu" />
      <button @click="grabClick">grab</button>
      <button @click="save" v-if="isShowBtn">确认</button>
    </div>
  </div>
</template>

<script>
import VueDragResize from 'vue-drag-resize'
export default {
  props: {},
  components: {
    VueDragResize,
  },
  data() {
    return {
      isShowBtn: false,
      grab: 1,
      wendu: 0,
      firstImgLoad: true,
      contrastHeight: '',
      contrastWidth: '',
      img2Weight: 600,
      img2Height: 300,
      baseWidth: '900px',
      baseHeight: '450px',
      img1: '',
      img2: '',
      webSocket: null,
      left: 0, //组件的X位置
      top: 0, //组件的Y位置
      width: null, //组件的宽度
      height: null, //组件的高度
    }
  },
  mounted() {
    this.$nextTick(() => {
      let baseUrl = 'ws://192.168.1.32:8008/img?id=123456'
      this.webSocket = new WebSocket(baseUrl)
      this.webSocket.onopen = e => {
        console.log('webSocket is open')
      }
      this.webSocket.onmessage = e => {
        const { img1, img2, box } = JSON.parse(e.data)
        if (img1) {
          this.img1 = img1
        }
        if (img2) {
          this.img2 = img2
        }
        if (box) {
          this.img2Weight = this.width = box.width
          this.img2Height = this.height = box.height
          this.contrastHeight = box.height + 'px'
          this.contrastWidth = box.width + 'px'
          this.contrastLeft = box.left + 'px'
          this.contrastTop = box.top + 'px'
          this.top = box.top
          this.left = box.left
        }
      }
      this.webSocket.onclose = e => {
        console.log('webSocket is close')
      }
    })
  },
  methods: {
    resize(newRect) {
      console.log(newRect.top, newRect.left)
      this.img2Weight = this.width = newRect.width
      this.img2Height = this.height = newRect.height
      this.top = newRect.top
      this.left = newRect.left
      this.isShowBtn = true
    },
    save() {
      console.log(this.left, this.top)
      this.contrastHeight = this.height + 'px'
      this.contrastWidth = this.width + 'px'
      this.contrastLeft = this.left + 'px'
      this.contrastTop = this.top + 'px'
      this.webSocket.send(
        JSON.stringify({
          box: {
            left: this.left,
            top: this.top,
            width: this.width,
            height: this.height,
          },
        })
      )
    },
    grabClick() {
      this.webSocket.send(
        JSON.stringify({
          grab: this.grab,
          wendu: this.wendu,
        })
      )
    },
    loadImage(e) {
      this.baseWidth = this.$refs.img1.clientWidth + 'px'
      this.baseHeight = this.$refs.img1.clientHeight + 'px'
      this.$nextTick(() => {
        this.firstImgLoad = false
      })
    },
  },
}
</script>

<style>
.box {
  position: absolute;
  border: 1px solid blue;
}
.drag {
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  opacity: 0.9;
}
.imgbox {
  position: relative;
  width: 960px;
  height: 540px;
  border: 1px solid #000;
  box-sizing: border-box;
  margin: 0 auto;
}
.img1,
.img2 {
  max-width: 960px;
  max-height: 540px;
}
.img2 {
  position: absolute;
  left: 0;
  right: 0;
  border: 1px solid red;
  box-sizing: border-box;
}
</style>
