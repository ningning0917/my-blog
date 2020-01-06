<template>
  <div class="comment-wrapper">
    <el-card class="box-card" shadow="never">
      <div slot="header" class="clearfix">
        <span>最新评论文章</span>
      </div>
      <ul v-for="o in 4" :key="o" class="text item">
        <li>
          <a title="用DTcms做一个独立博客网站（响应式模板）" href="http://www.muzhuangnet.com/show/269.html">
              <span class="thumbnail">
                <img data-original="http://www.muzhuangnet.com/upload/201610/18/201610181739277776.jpg" src="http://www.muzhuangnet.com/upload/201610/18/201610181739277776.jpg" alt="用DTcms做一个独立博客网站（响应式模板）" class="thumb" style="display: block;">
              </span>
            <span class="text">
                用DTcms做一个独立博客网站（响应式模板）
              </span>
            <div class="tips">
                <span class="muted">
                  <svg-icon icon-class="time" />
                  2016-10-14
                </span>
              <span class="muted">
                  <svg-icon icon-class="see" />
                  11422
                </span>
            </div>
          </a>
        </li>
      </ul>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'Comment',
  data() {
    return {
      isCommentFixed: false,
      scrollTop: 0
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
}
</style>
