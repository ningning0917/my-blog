<template>
  <div class="book-wrapper">
    <div class="container flex-sb-top">
      <div class="left">
        <left-nav />
      </div>
      <div class="right">
        <h1>聊天</h1>
        <div class="flex-sa">
          <div class="chatLeft">
            <ul>
              <li v-for="(item, i) in userlist" :key="i">
                <span>{{ item.nickname }}</span>
              </li>
            </ul>
          </div>
          <div class="chatRight">
            <div v-for="(item, i) in chatList" :key="i" class="clearfix">
              <div :class="ifFR(item)">
                <span>{{ item.cityName }}</span>
                <span>{{ item.nickName }}</span>
                <span>{{ item.createAt }}</span>
                <div>{{ item.chatContent }}</div>
              </div>
            </div>
          </div>
        </div>
        <el-input v-model="input" type="textarea" />
        <el-button @click="sendInfo">点击发送消息</el-button>
      </div>
    </div>
    <audio id="audio" preload="auto">
      <source src="../../assets/news.mp3" type="audio/mp3">
    </audio>
    <back-to-top />

  </div>
</template>
<script>
import BackToTop from '../../components/BackToTop/index'
import LeftNav from '../../components/leftNav/index'
import { chatList, chatLogin, sendInfo, userList } from '../../api/weChatOAuth'
import Cookies from 'js-cookie'
const CryptoJS = require('crypto-js')

export default {
  name: 'Index',
  components: { LeftNav, BackToTop },
  data() {
    return {
      input: '',
      id: '',
      userlist: [],
      chatList: [],
      cityName: '',
      nickName: ''
    }
  },
  computed: {
  },
  sockets: {
    connect: function() {
      console.log('socket connected')
    },
    online: function(data) {
      console.log(data)
      this.id = data
      this.$notify({
        title: '你有新的消息,请注意查收',
        message: data + '上线了',
        type: 'success'
      })
    },
    res: function(data) {
      console.log(data, 'datas')
      this.chatList = this.chatList.concat(data)
      // this.play()
    }
  },
  mounted() {
    if (!Cookies.get('nickName')) {
      this.login()
    } else {
      var words = CryptoJS.enc.Base64.parse(Cookies.get('nickName'))
      this.nickName = words.toString(CryptoJS.enc.Utf8)
      this.getChat()
    }
    this.getUserList()
    /* eslint-disable */
    this.cityName = returnCitySN['cname']
  },
  methods: {
    ifFR(item) {
       if(item.nickName === this.nickName){
         return 'fr'
       }else {
         return ''
       }
    },
    getChat() {
      chatList().then(res => {
        if (res.code === 200) {
          this.chatList = this.chatList.concat(res.data)
        }
      })
    },
    // get charUser list
    getUserList() {
      userList().then(res => {
        if (res.code === 200) {
          this.userlist = res.data
        }
      })
    },
    // login
    login() {
      this.$prompt('请输入昵称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        chatLogin({ nickname: value, cityName: this.cityName }).then(res => {
          if (res.code === 200) {
            this.$notify.success(res.msg)
            this.getUserList()
            this.$socket.emit('chat', {
              info: this.input,
              nickName: value
            })
          } else {
            this.$notify.error(res.msg)
            setTimeout(() => {
              this.login()
            }, 2000)
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    sendInfo() {
      var words = CryptoJS.enc.Base64.parse(Cookies.get('nickName'))
      this.nickName = words.toString(CryptoJS.enc.Utf8)
      this.$socket.emit('chat', {
        info: this.input,
        nickName: this.nickName
      })
      this.input = ''
    },

    // 音频
    play() {
      this.lastRunTime = Date.now()
      const audio = document.querySelector('#audio')
      audio.play()
      // const timeOut = setTimeout(() => {
      //   this.stop(timeOut)
      // }, 2000)
    },
    stop(timeOut) {
      this.currentTime = Date.now()
      const audio = document.querySelector('#audio')
      if (this.currentTime - this.lastRunTime < 2000) {
      } else {
        if (this.isPlaying) {
          audio.currentTime = 0
          audio.pause()
          this.isPlaying = false
        }
      }
      clearTimeout(timeOut)
    }
  }
}
</script>
<style lang="scss">
</style>
<style rel="stylesheet/scss" lang="scss">
  .book-wrapper {
    .left {
      width: 280px;
      border: 1px solid #eee;
      border-bottom: none;
      ul {
        li {
          display: block;
          height: 50px;
          line-height: 50px;
          color: #666;
          border-bottom: 1px solid #eee;
          padding-left: 20px;
          background: #fff;
        }
      }
    }
    .right {
      width: 900px;
      background: #fff;
      border: 1px solid #eee;
      padding: 0 10px;
      h1 {
        text-align: center;
        height: 100px;
        line-height: 100px;
        border-bottom: 1px solid #eee;
      }
    }
    .chatLeft {
      width: 100px;
      height: 400px;
      overflow: auto;
      border: 1px solid #999;
      border-radius: 10px;
      ul li {
        display: block;
      }
    }
    .chatRight {
      width: 700px;
      height: 400px;
      overflow: auto;
      border: 1px solid #999;
      border-radius: 10px;
    }
  }
</style>

