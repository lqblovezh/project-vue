# lqb

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm test

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 本地服务端
node websocket.js supersecret 8081 8082

## 推流方式
ffmpeg -i "rtmp://isxsports.com/dext/live15" -q 0 -f mpegts -codec:v mpeg1video -preset ultrafast -s 800x600 http://127.0.0.1:8081/supersecret/live2

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
