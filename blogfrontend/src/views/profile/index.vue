<template>
  <div class="profile-container">
    <div class="flex-sb-top">
      <div class="left">
        <article class="article">
          <div class="content">
            <header class="article-header">
              <h1 class="article-title">博主简介</h1>
            </header>
            <article class="article-content">
              <p>博客交流群：
                <a
                  href="http://qm.qq.com/cgi-bin/qm/qr?k=OPioQkvS2NOJQnDRVGxipey82VB55-bM&amp;group_code=562366239"
                  target="_blank"
                  rel="nofollow"
                >
                  562366239</a>
              </p>
              <p>博主邮箱：<a href="mailto:admin@websmallrabbit.com" target="_blank" rel="nofollow">
                admin@websmallrabbit.com
              </a>
              </p>
              <p>学历：本科</p>
              <p>所在地：上海浦东</p>
              <p>个人公众号：一点温存</p>
              <p>个人主页：<a href="https://websmallrabbit.github.io" target="_blank" rel="nofollow">
                https://websmallrabbit.github.io/</a>
              </p>
              <p>掌握的技术关键词：HTML+CSS、javascript、jQuery、vue、react、 react native、 node、 egg MVC、Mysql Database、mongoDB、 Redis、 微信小程序、微信公众号、JAVA、 spring boot、 docker、 jenkins</p>
            </article>
            <button @click="sendMail">发送邮件</button>
            <button @click="captcha">获得验证码</button>
            <div v-html="svg"></div>
          </div>
        </article>
      </div>
      <div class="right">
        <right />
        <Label />
        <Comment />
      </div>
    </div>
    <back-to-top />
  </div>
</template>

<script>
import Right from '../dashboard/components/right'
import Comment from './components/Comment'
import Label from './components/Label'
import BackToTop from '../../components/BackToTop/index'
import { captcha, sendMail } from '../../api/mail'
export default {
  name: 'Profile',
  components: { Right, BackToTop, Label, Comment },
  data() {
    return {
      svg: ''
    }
  },
  methods: {
    sendMail() {
      sendMail().then(res => {
        if (res.code === 200) {
          console.log(123)
          this.$message.success(res.msg)
        }
      })
    },
    captcha() {
      captcha().then(res => {
        if (res.code === 200) {
          console.log(res.data, '123')
          this.svg = res.data
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .profile-container {
    h1 {
      margin: 20px 0;
    }
    .left {
      width: 780px;
      border-radius: 6px;
      overflow: hidden;
      .article {
        border: 1px solid #eaeaea;
        padding: 20px;
        overflow: hidden;
        background-color: #fff;
        margin-bottom: 15px;
        border-radius: 4px;
      }
    }
    .right {
      width: 400px;
      color: #555;
      .person-info {
        .contact {
          transition: all .3s;
          &:hover {
            color: #3399CC;
            cursor: pointer;
          }
        }
      }
    }

    .content {
      width: 100%;
      padding: 0 20px;
      background-color: #fff;
      border-radius: 4px;
      position: relative;
      min-height: 500px;
      margin-right: 380px;
      margin-bottom: 15px;
    }
    .article-header {
      margin-bottom: 20px;
      padding: 25px 0;
      border-bottom: 1px solid #EEE;
      text-align: center;
    }
    .article-title {
      margin-top: 0;
      font-size: 26px;
      line-height: 36px;
    }

    .article-content {
      font-size: 15px;
      line-height: 25px;
      word-wrap: break-word;
      cursor: default;
    }
    .article-content p {
      text-indent: 30px;
      margin-bottom: 18px;
      word-wrap: break-word;
    }
    a:hover {
      text-decoration: underline;
    }

  }
</style>
