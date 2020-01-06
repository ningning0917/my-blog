<template>
  <div class="social-signup-container">
    <div class="sign-btn" @click="wechatHandleClick('wechat')">
      <span class="wx-svg-container"><svg-icon icon-class="wechat" class="icon" /></span> 微信
    </div>
    <div class="sign-btn" @click="tencentHandleClick('tencent')">
      <span class="qq-svg-container"><svg-icon icon-class="qq" class="icon" /></span> QQ
    </div>
    <div class="sign-btn">
      <!--      <span class="qq-svg-container"><img src="../../assets/App.jpg" style="width: 40px; height: 40px;" alt=""></span> github-->
      <a href="https://github.com/login/oauth/authorize?client_id=6fd9bb9ad92200bb9191">
        <span class="qq-svg-container">
          <img src="../../assets/App.jpg" style="width: 40px; height: 40px;" alt="">
        </span> github
      </a>
    </div>

    <div class="sign-btn">
      <!--      <span class="qq-svg-container"><img src="../../assets/App.jpg" style="width: 40px; height: 40px;" alt=""></span> github-->
      <a href="https://localhost:7001/study/githubLogin">

        <span class="qq-svg-container">
          <img src="../../assets/App.jpg" style="width: 40px; height: 40px;" alt="">
        </span> github登录 egg-passport
      </a>
    </div>

  </div>
</template>

<script>
// import openWindow from '@/utils/openWindow'
import axios from 'axios'
import { github, githubLogin } from '../../api/user'
import { getQueryStringByName } from '../../utils'
export default {
  name: 'SocialSignin',
  methods: {
    wechatHandleClick(thirdpart) {
      alert('ok')
      // this.$store.commit('SET_AUTH_TYPE', thirdpart)
      // const appid = 'xxxxx'
      // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      // const url = 'https://open.weixin.qq.com/connect/qrconnect?appid=' + appid + '&redirect_uri=' + redirect_uri + '&response_type=code&scope=snsapi_login#wechat_redirect'
      // openWindow(url, thirdpart, 540, 540)
    },
    tencentHandleClick(thirdpart) {
      alert('ok')
      // this.$store.commit('SET_AUTH_TYPE', thirdpart)
      // const client_id = 'xxxxx'
      // const redirect_uri = encodeURIComponent('xxx/redirect?redirect=' + window.location.origin + '/auth-redirect')
      // const url = 'https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=' + client_id + '&redirect_uri=' + redirect_uri
      // openWindow(url, thirdpart, 540, 540)
    },
    githubHandleClick(thirdpart) {
      githubLogin().then(res => {
        if (res.code === 200) {

        } else {
          this.$notify.error(res.msg)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .social-signup-container {
    margin: 20px 0;
    .sign-btn {
      display: inline-block;
      cursor: pointer;
    }
    .icon {
      color: #fff;
      font-size: 24px;
      margin-top: 8px;
    }
    .wx-svg-container,
    .qq-svg-container {
      display: inline-block;
      width: 40px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      padding-top: 1px;
      border-radius: 4px;
      margin-bottom: 20px;
      margin-right: 5px;
    }
    .wx-svg-container {
      background-color: #24da70;
    }
    .qq-svg-container {
      background-color: #6BA2D6;
      margin-left: 50px;
    }
  }
</style>
