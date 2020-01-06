<template>
  <div class="book-wrapper">
    <div class="container flex-sb-top">
      <div class="left">
        <left-nav />
      </div>
      <div class="right">
        <h1>书签</h1>
        <ul class="content-wrapper">
          <li v-for="(item, i) in dataList" :key="i">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span class="nickname">{{ item.name }}</span>
              </div>
              <a class="text item" :href="item.website">{{ item.website }}</a>
            </el-card>
          </li>
        </ul>
      </div>
    </div>
    <back-to-top />
  </div>
</template>
<script>
import BackToTop from '../../components/BackToTop/index'
import LeftNav from '../../components/leftNav/index'

export default {
  name: 'Index',
  components: { LeftNav, BackToTop },
  data() {
    return {
      dataList: [
        {
          name: '简书',
          website: 'https://www.jianshu.com/u/5c516e381a3a'
        },
        {
          name: '个人github博客',
          website: 'https://www.websmallrabbit.io'
        }, {
          name: 'CSDN',
          website: 'https://me.csdn.net/websmallrabbit'
        }
      ]
    }
  },
  mounted() {
    this.getReader()
  },
  methods: {
    goList(v) {
      this.$router.push({ path: '/list', query: { label: v }})
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
      .content-wrapper {
        padding-top: 20px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        li {
          display: inline-block;
          margin-bottom: 20px;
          .text {
            font-size: 14px;
          }

          .item {
            margin-bottom: 18px;
          }

          .box-card {
            width: 260px;
          }
          .nickname {
            font-size: 18px;
            color: #ff8a80;
          }
          .count {
            font-size: 12px;
            color: #666;
          }
          a {
            color: #999;
          }
          a:hover {
            text-decoration: underline;
            color: #0a76a4;
          }
        }
      }
    }
  }
</style>

