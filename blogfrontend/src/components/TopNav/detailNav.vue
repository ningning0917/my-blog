<template>
  <div class="FTZkZo">
    <div class="_16zCst">
      <h1 class="_2zeTMs" :title="dataList.title">
        {{ dataList.title }}
      </h1>
    </div>
    <div class="article-meta">
      <span>
        <time class="time">
          <svg-icon icon-class="time" />
          {{ dataList.publishTime }}
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
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'TopNav',
  data() {
    return {
      dataList: {}
    }
  },
  computed: mapState({
    topInfo: state => state.data.topInfo
  }),
  watch: {
    topInfo(v, o) {
      this.dataList = v
    }
  }
}
</script>

<style scoped lang="scss">
  .FTZkZo {
    box-sizing: content-box;
    display: flex;
    justify-content: space-around;
    height: 48px;
    line-height: 48px;
    ._2zeTMs {
      width: 800px;
      color: #555;
      font-size: 24px;
      overflow: hidden;
      text-overflow:ellipsis;
      white-space: nowrap;
    }
    .article-meta {
      font-size: 14px;
      color: #999;
      span {
        margin-right: 20px;
        cursor: pointer;
      }
    }
  }
</style>
