<template>
  <div ref="commentRef" class="comment-wrapper">
    <div :class="{'commentFixed': isCommentFixed}">
      <el-card class="box-card" shadow="never">
        <div slot="header" class="clearfix">
          <span>最新评论文章</span>
        </div>
        <ul v-for="(item, index) in newCommentArticle" :key="index" class="text item">
          <li @click="getDetail(item)">
            <a :title="item.title" href="javascript:;">
              <span class="thumbnail">
                <img :src="item.imageUrl" :alt="item.title" class="thumb" style="display: block;">
              </span>
              <span class="text">
                {{ item.title }}
              </span>
              <div class="muted-summary">
                {{ item.summary }}
              </div>
              <div class="tips">
                <span class="muted">
                  <svg-icon icon-class="time" />
                  {{ item.publishTime | parseTime() }}
                </span>
                <span class="muted">
                  <svg-icon icon-class="see" />
                  {{ item.see }}
                </span>
                <span class="muted">
                  <svg-icon icon-class="comment" />
                  {{ item.comment }}
                </span>
              </div>
            </a>
          </li>
        </ul>
      </el-card>
    </div>
  </div>
</template>

<script>

import { getNewArticle } from '../../../api/dashboard'

export default {
  name: 'Comment',
  props: {
    from: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      isCommentFixed: false,
      scrollTop: 0,
      newCommentArticle: []
    }
  },
  mounted() {
    if (this.from === 'label-list') {
      this.isCommentFixed = false
    } else {
      this.$bus.on('isCommentFixed', (v) => {
        this.isCommentFixed = v
      })
    }
    this.getNewArticle()
  },
  methods: {
    getNewArticle() {
      getNewArticle().then(res => {
        if (res.code === 200) {
          this.newCommentArticle = res.data
        }
      })
    },
    getDetail(item) {
      // this.$router.push({ path: '/detail', query: { id: item.uid, title: item.title }})

      const routeUrl = this.$router.resolve({
        path: '/detail',
        query: { id: item.uid, title: item.title }
      })
      window.open(routeUrl.href)
    }
  }
}
</script>

<style>
  .comment-wrapper .el-card__body {
    padding: 0;
  }
</style>
<style scoped lang="scss">
.comment-wrapper {
  position: relative;
  margin-top: 15px;
  .commentFixed {
    position: fixed;
    top: 90px;
    width: 400px;
  }
  ul li a {
    padding: 10px 15px 10px 150px;
    color: #888;
    overflow: hidden;
    position: relative;
    display: block;
    font-size: 14px;
    transition: all .3s;
    &:hover {
      box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.09);
      color: #409eff;
    }
    .thumbnail {
      float: left;
      margin-left: -135px;
      border: none;
      margin-bottom: 0;
      img {
        width: 122px;
        height: 86px;
      }
    }
    .tips {
      margin-top: 10px;
    }
    .muted {
      margin-right: 15px;
      font-size: 12px;
      color: #BBB;
    }
  }
  .text  li {
    width: 100%;
    display: block;
    a {
      width: 100%;
      display: block;
    }
  }
  .muted-summary {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>
