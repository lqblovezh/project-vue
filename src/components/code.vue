<template>
  <div class="video-list">
    <div id="login_container"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  mounted() {
    var obj = new WxLogin({
      self_redirect: false,
      id: 'login_container',
      appid: 'wx9ec6e8104eebfca5',
      scope: "snsapi_login",
      redirect_uri: encodeURI('http://www.baidu.com'),
      state: '',
      style: '',
      href: '',
    })
  },
  methods: {},
}
</script>

<style scoped>
</style>
