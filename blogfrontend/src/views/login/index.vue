<template>
  <div>
    <div class="login-container">
      <vue-particles class="particles-js" color="#dedede" />
      <div class="login-content">
        <el-form ref="loginForm" :model="loginForm" :rules="loginRules" class="login-form" label-position="left">
          <div class="title-container">
            <h3 class="title">
              {{ $t('login.title') }}
            </h3>
            <lang-select class="set-language" />
          </div>
          <el-form-item prop="username">
            <span class="svg-container">
              <svg-icon icon-class="user" />
            </span>
            <el-input
              ref="username"
              v-model="loginForm.username"
              name="username"
              type="text"
              tabindex="1"
              autocomplete="on"
            />
          </el-form-item>

          <el-tooltip v-model="capsTooltip" content="Caps lock is On" placement="right" manual>
            <el-form-item prop="password">
              <span class="svg-container">
                <svg-icon icon-class="password" />
              </span>
              <el-input
                :key="passwordType"
                ref="password"
                v-model="loginForm.password"
                :type="passwordType"
                name="password"
                tabindex="2"
                autocomplete="on"
                @keyup.native="checkCapslock"
                @blur="capsTooltip = false"
              />
              <span class="show-pwd" @click="showPwd">
                <svg-icon :icon-class="passwordType === 'password' ? 'eye' : 'eye-open'" />
              </span>
            </el-form-item>
          </el-tooltip>

          <div class="flex-sb" style="margin-bottom: 20px">
            <el-form-item prop="verifyCode" style="margin-bottom: 0;width: 300px">
              <span class="svg-container">
                <svg-icon icon-class="check-code" />
              </span>
              <el-input
                v-model="loginForm.verifyCode"
                name="checkCode"
                type="text"
                placeholder="请输入验证码"
              />
            </el-form-item>
            <el-button type="text" style="border: 0;" :loading="isClick">
              <div class="code" style="cursor: pointer" @click="getVerify">
                <s-identify :identify-code="identifyCode" />
              </div>
            </el-button>
          </div>
          <div class="flex-sb" style="margin-top: 0">
            <a v-if="isLowerIE" class="good-tip" target="_blank" href="https://www.google.cn/chrome/">你的浏览器版本太低，请下载谷歌浏览器，或者使用ie Edge版本 点击下载</a>
            <!--            <a class="forget-password" href="https://www.baidu.com">{{ $t('login.forgetPassword') }}?</a>-->
          </div>
          <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:20px;" @click.enter.native.stop="handleLogin">
            {{ $t('login.logIn') }}
          </el-button>
        </el-form>
      </div>
      <Dialog :dialog-visible="dialogVisible" @cancel="cancel" @verifyToken="verifyToken" />
    </div>
    <div class="copyright">
      Copyright © 2019 上海保险交易所 版权所有 沪ICP备16038624号-1
    </div>
  </div>
</template>

<script>
import LangSelect from '@/components/LangSelect'
import Dialog from './components/dialog'
import { verify } from '../../api/user'
import SIdentify from '@/components/identify'
import { aesDecrypt } from '@/utils/crypto'
import { isLowerIE } from '../../utils'

export default {
  name: 'Login',
  components: { LangSelect, Dialog, SIdentify },
  data() {
    const validateUsername = (rule, value, callback) => {
      if (value.length < 5) {
        callback(new Error(this.$t('login.correctUser')))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 6) {
        callback(new Error(this.$t('login.correctPass')))
      } else {
        callback()
      }
    }
    const validateVerifyCode = (rule, value, callback) => {
      if (value !== this.identifyCode) {
        callback(new Error(this.$t('请输入正确的验证码')))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: '',
        password: '',
        verifyCode: '',
        sdkNum: ''
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
        verifyCode: [{ required: true, trigger: 'blur', validator: validateVerifyCode }]
      },
      passwordType: 'password',
      capsTooltip: false,
      loading: false,
      showDialog: false,
      redirect: undefined,
      otherQuery: {},
      dialogVisible: false,
      validate: '',
      identifyCode: '',
      isClick: true
    }
  },
  computed: {
    isLowerIE() {
      return isLowerIE()
    }
  },
  // watch: {
  // $route: {
  //   handler: function(route) {
  //     const query = route.query
  //     if (query) {
  //       this.redirect = query.redirect
  //       this.otherQuery = this.getOtherQuery(query)
  //     }
  //   },
  //   immediate: true
  // }
  // },
  created() {
    this.getVerify()
  },
  mounted() {
    if (this.loginForm.username === '') {
      this.$refs.username.focus()
    } else if (this.loginForm.password === '') {
      this.$refs.password.focus()
    }
  },
  methods: {
    // 获得验证码
    getVerify() {
      this.isClick = true
      verify().then(res => {
        this.identifyCode = aesDecrypt(res.randomStr)
        this.isClick = false
      })
    },
    checkCapslock({ shiftKey, key } = {}) {
      if (key && key.length === 1) {
        this.capsTooltip = shiftKey && (key >= 'a' && key <= 'z') || !shiftKey && (key >= 'A' && key <= 'Z')
      }
      if (key === 'CapsLock' && this.capsTooltip === true) {
        this.capsTooltip = false
      }
    },
    showPwd() {
      if (this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('user/login', this.loginForm)
            .then((res) => {
              if (res.retCode === '500') {
                this.$message({
                  type: 'error',
                  message: res.retMsg
                })
                this.loginForm.sdkNum = ''
                this.loading = false
                this.getVerify()
                return
              }
              if (res.sdkFlag) {
                this.dialogVisible = true
                this.loading = false
              }
              if (res.token) {
                const redirect = res ? this.redirect : '/'
                if (!res) {
                  this.$store.dispatch('tagsView/delAllViews') // 登录的账号与上一个账号不同时，清空tagviews
                }
                this.$router.push({ path: redirect || '/' })
              }
            })
            .catch(() => {
              this.loading = false
            })
        } else {
          return false
        }
      })
    },
    cancel() {
      this.dialogVisible = false
      this.loading = false
    },
    verifyToken(val) {
      this.loginForm.sdkNum = val
      this.handleLogin()
    },
    getOtherQuery(query) {
      return Object.keys(query).reduce((acc, cur) => {
        if (cur !== 'redirect') {
          acc[cur] = query[cur]
        }
        return acc
      }, {})
    }
  }
}
</script>

<style lang="scss">

  $bg:#fff;
  $light_gray:#fff;
  $cursor: #fff;

  @supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
    .login-container .el-input input {
      color: #606266;
    }
  }

  /* reset element-ui css */
  .login-container {

    .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;
      input {
        background: #fff;
        border: 0;
        -webkit-appearance: none;
        border-radius: 0;
        padding: 12px 5px 12px 15px;
        color: #606266;
        height: 47px;
      }
    }

    .el-form-item {
      border: 1px solid #07a38e;
      background: #fff;
      border-radius: 5px;
      color: #454545;
    }
  }
</style>

<style lang="scss" scoped>
  $dark_gray:#12cfa8;
  $light_gray:#eee;

  .login-content {
    position: fixed;
    top: 160px;
    right: 100px;
    width: 500px;
  }
  .login-container {
    min-height: 100%;
    height: calc( 100vh - 20px );
    overflow: hidden;
    background: url("../../assets/bg.jpg") no-repeat left top;
    background-size: 100% 100%;
    .login-form {
      position: relative;
      margin-left: auto;
      background: rgba(255,255,255,.9);
      border-radius: 10px;
      padding: 40px;
      overflow: hidden;
    }

    .tips {
      font-size: 14px;
      color: #fff;
      margin-bottom: 10px;

      span {
        &:first-of-type {
          margin-right: 16px;
        }
      }
    }

    .svg-container {
      padding: 6px 5px 6px 15px;
      color: $dark_gray;
      vertical-align: middle;
      width: 30px;
      display: inline-block;
    }

    .title-container {
      position: relative;

      .title {
        font-size: 26px;
        color: #545a72;
        margin: 0 auto 40px auto;
        text-align: center;
        font-weight: bold;
      }

      .set-language {
        color: $dark_gray;
        position: absolute;
        top: 3px;
        font-size: 18px;
        right: 0;
        cursor: pointer;
      }
    }

    .show-pwd {
      position: absolute;
      right: 10px;
      top: 7px;
      font-size: 16px;
      color: $dark_gray;
      cursor: pointer;
      user-select: none;
    }
    .forget-password {
      color: #12cfa8;
      margin-left: auto;
      margin-bottom: 20px;
    }
  }
  .copyright {
    width: 100%;
    height: 20px;
    line-height: 20px;
    background: #2b2f3a;
    color: #9a9a9a;
    font-size: 12px;
    text-align: center;
  }
</style>
<style lang="scss">
  .login-container {
    .el-button--primary {
      background: #12cfa8;
    }
    .el-button {
      border: 2px solid #12cfa8;
    }
    .particles-js {
      height: 100vh;
    }
    .good-tip {
      color: #12cfa8;
      margin-left: auto;
      margin-bottom: 20px;
      font-size: 12px;
    }
  }
  input:-webkit-autofill {
    -webkit-box-shadow:0 0 0 100px white inset;
    -webkit-text-fill-color: #666;
  }
  input:-webkit-autofill:focus {
    -webkit-box-shadow:0 0 0 100px white inset;
    -webkit-text-fill-color: #666;
  }
</style>
