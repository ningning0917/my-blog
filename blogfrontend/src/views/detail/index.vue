<template>
  <div class="article-detail-wrapper">
    <div class="content flex-sb-top">
      <div class="main-con">
        <header class="article-header">
          <h1 class="article-title">
            <span>{{ dataList.title }}</span>
          </h1>
          <div class="article-meta">
            <span>
              <time class="time">
                <svg-icon icon-class="time" />
                {{ dataList.publishTime | parseTime() }}
              </time>
            </span>
            <span>
              <svg-icon icon-class="author" />
              {{ dataList.author }}
            </span>
            <span>
              <svg-icon icon-class="see" />
              {{ dataList.see }}
            </span>
            <span>
              <svg-icon icon-class="comment" />
              {{ dataList.comment }}
            </span>
            <span>
              <svg-icon icon-class="like" />
              {{ dataList.zan }}
            </span>
          </div>
        </header>
        <article class="article-content">
          <div v-if="html" v-highlight="res" class="md-content" v-html="html" />
          <vshare />
          <p class="article-copyright hidden-xs">
            转载请注明出处：
            <a title="木庄网络博客" href="http://www.muzhuangnet.com/index.html">
              webrabbit网络博客</a> »
            <a href="http://www.muzhuangnet.com/show/681.html" :title="dataList.title">
              {{ dataList.title }}</a>
          </p>
          <div class="article-tags">
            标签：
            <a v-for="(item, index) in dataList.label" :key="index" @click="goList(item)">{{ item }}</a>
          </div>
          <div class="article-shang">
            <p>
              <a style="color: #fff" title="打赏，支持一下" class="dashang" @click="Reward">打赏</a>
            </p>
          </div>
        </article>
        <recommend :id="id" />
        <comment @success="success" />
      </div>
      <div class="sec-con">
        <right />
        <article-comment />
      </div>
    </div>
    <div class="give-zan" :class="{'_1pUUKr': isZan}" @click="handleZan">
      <div class="zan-box">
        <svg-icon v-if="!isZan" class="zan" icon-class="zan" />
        <svg-icon v-if="isZan" class="zan" icon-class="zan2" />
      </div>
      <div class="P63n6G">
        <div class="_2LKTFF">
          <span class="_1GPnWJ" role="button" tabindex="-1" aria-label="查看点赞列表">赞</span>
          <span class="zanSure">+{{ zanCount }}赞</span>
        </div>
      </div>
    </div>
    <Reward :dialog-visible="dialogVisible" @cancel="dialogVisible = false" />
    <back-to-top />
  </div>
</template>
<script>
import showdown from 'showdown'
import Reward from './components/Reward'
import Right from '../dashboard/components/right'
import Recommend from './components/Recommend'
import ArticleComment from '../dashboard/components/Comment'
import Comment from './components/Comment'
import BackToTop from '../../components/BackToTop/index'
import { addSee, addZan, getArticleDetail } from '../../api/dashboard'
import { mapActions } from 'vuex'

export default {
  name: 'Index',
  components: { BackToTop, Recommend, Reward, Right, Comment, ArticleComment },
  data() {
    return {
      html: '',
      res: '',
      dialogVisible: false,
      isZan: false,
      dataList: {},
      id: '',
      zanCount: 0
    }
  },
  mounted() {
    this.id = this.$route.query.id
    this.getSee(this.id)
  },
  methods: {
    ...mapActions({
      setTopInfoData: 'setTopInfo' // 将 `this.add()` 映射为 `this.$store.commit('increment')`
    }),
    // 获取详情
    getDetail() {
      getArticleDetail({ id: this.id }).then(res => {
        if (res.code === 200) {
          this.dataList = res.data
          const Convertor = new showdown.Converter()
          this.res = res.data.content
          this.html = Convertor.makeHtml(res.data.content)
          this.setTopInfoData(this.dataList)
        }
      })
    },
    // 浏览量
    getSee(id) {
      addSee({ id }).then(res => {
        if (res.code === 200) {
          this.getDetail()
        }
      })
    },
    Reward(then) {
      this.dialogVisible = true
    },
    handleZan() {
      this.isZan = !this.isZan
      const data = {
        id: this.id,
        isZan: this.isZan
      }
      addZan(data).then(res => {
        if (res.code === 200) {
          this.getDetail()
          this.zanCount = res.data.zanCount
        }
      })
    },
    success() {
      this.getDetail()
    },
    goList(v) {
      this.$router.push({ path: '/list', query: { label: v }})
      // const routeUrl = this.$router.resolve({
      //   path: '/list',
      //   query: { label: v }
      // })
      // window.open(routeUrl.href)
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss">
  .article-detail-wrapper {
    .content {
      width: 100%;
      margin: 0 auto;
      .main-con {
        width: 780px;
        border-radius: 6px;
        overflow: hidden;
        background: #fff;
        padding: 0 20px;

        .article-header {
          margin-bottom: 20px;
          padding: 25px 0;
          border-bottom: 1px solid #EEE;
          text-align: center;

          .article-title {
            margin-top: 0;
            font-size: 26px;
            line-height: 36px;

            a {
              color: #555;
            }
          }

          .article-meta {
            margin-top: 10px;
            font-size: 12px;
            color: #999;

            span {
              margin-right: 20px;
              cursor: pointer;
            }
          }
        }

        .article-content {
          font-size: 15px;
          line-height: 25px;
          word-wrap: break-word;
          cursor: default;
          img {
            height: 100px;
          }

          .article-detail {
            border: 1px solid #eee;
            border-radius: 4px;
            overflow: auto;
            word-wrap: break-word;
            padding: 10px;
            margin-bottom: 20px;
          }
        }
      }
      .article-copyright {
        background-color: #EEE;
        padding-right: 30px;
        font-size: 12px;
        padding: 3px 0;
        border-radius: 3px;
        color: #aaa;
        text-align: center;
        cursor: default;
        text-indent: 30px;
        margin-bottom: 18px;
        word-wrap: break-word;
        &:hover {
          background: #3399CC;
          color: #FFF;
        }
      }
      .article-tags {
        margin: 30px 0;
        text-align: center;
        cursor: default;
        a {
          display: inline-block;
          padding: 2px 4px;
          margin: 0 4px 4px 0;
          color: #FFF;
          font-size: 12px;
          background-color: #3399CC;
          opacity: 0.85;
          transition: all .3s;
          &:hover {
            opacity: 1;
            filter: alpha(opacity=100);
            -webkit-transform: scale(1.05);
            transform: scale(1.05);
            -webkit-transition-timing-function: cubic-bezier(0.47,2.02,0.31,-0.36);
            transition-timing-function: cubic-bezier(0.47,2.02,0.31,-0.36)
          }
        }
      }
      .article-shang {
        margin: 30px 0;
        text-align: center;
        cursor: default;
        a {
          display: inline-block;
          padding: 4px 7px 3px;
          margin: 0 4px 4px 0;
          color: #FFF;
          font-size: 16px;
          opacity: 0.85;
          background-color: #e74851;
          border-radius: 10px;
          font-weight: bold;
          height: 58px;
          line-height: 50px;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s ease 0s;
          width: 58px;
          &:hover {
            opacity: 1;
            filter: alpha(opacity=100);
            -webkit-transform: scale(1.05);
            transform: scale(1.05);
            -webkit-transition-timing-function: cubic-bezier(0.47,2.02,0.31,-0.36);
            transition-timing-function: cubic-bezier(0.47,2.02,0.31,-0.36);
          }
        }
      }

      .sec-con {
        position: relative;
        width: 400px;
      }
    }
    .give-zan {
      position: fixed;
      top: 216px;
      color: #fff;
      justify-content: center;
      width: 48px;
      height: 48px;
      font-size: 24px;
      border-radius: 50%;
      background-color: #fff;
      line-height: 48px;
      text-align: center;
      box-shadow: 0 2px 10px rgba(0,0,0,.05);
      cursor: pointer;
      left: calc((100vw - 1000px)/2 - 168px);
      user-select: none;
      .zan-box {
        /*overflow: hidden;*/
      }
    }
    [tabindex="-1"]:focus {
      outline: none!important;
    }
    .P63n6G {
      margin-top: 4px;
      font-size: 14px;
      text-align: center;
      color: #969696;
      overflow: hidden;
      height: 19px;
      line-height: 19px;
    }
    ._1GPnWJ, .zanSure {
      display: block;
      color: #969696;
      height: 19px;
      line-height: 19px;
    }
    ._2LKTFF {
      transition: transform .2s;
    }
    ._1pUUKr {
      color: #ec7259;
      background: #ec7259;
      ._2LKTFF {
        transform: translateY(-19px);
      }
      ._1GPnWJ {
        opacity: 0;
        visibility: hidden;
      }
      .zanSure {
        color: #ec7259;
      }
    }
  }
</style>

