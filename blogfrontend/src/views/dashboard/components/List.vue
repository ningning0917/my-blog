<template>
  <div class="list-wrapper">
    <h3 class="new-pub">{{ title }}</h3>
    <div class="infinite-list-wrapper">
      <ul
        class="note-list"
      >
        <li v-for="(item,index) in dataList" :key="index" class="list-item have-img flex-sb">
          <div class="content">
            <span class="title" title="hyper 超级酷炫的终端显示" @click="goDetail(item)">{{ item.title }}</span>
            <p class="abstract">
              {{ item.summary }}
            </p>
            <div class="meta">
              <a target="_blank" href="/p/3026c9ff7b51">
                <svg-icon icon-class="see" /> {{ item.see }}
              </a>
              <a target="_blank" href="/p/3026c9ff7b51#comments">
                <svg-icon icon-class="comment" /> {{ item.comment }}
              </a>
              <a target="_blank" href="">
                <svg-icon icon-class="like" /> {{ item.zan }}
              </a>
              <span class="time">{{ item.publishTime | formatTime() }}</span>
            </div>
          </div>
          <a class="wrap-img" target="_blank">
            <img v-if="item.imageUrl" v-lazy="item.imageUrl" class="img-blur-done" preview="1" alt="缩略图">
          </a>
        </li>
      </ul>
      <roll-loading v-if="!noMore" v-show="dataList.length>=1 && isRoll" @load="load">
        <div slot="loading">
          <p v-if="loading" class="loading">
            <svg-icon icon-class="loading" />
          </p>
          <p v-show="!noMore" class="no-more" />
        </div>
      </roll-loading>
      <p v-show="showTip" class="no-more">没有更多了</p>
    </div>
  </div>
</template>

<script>
import RollLoading from '@/components/rollLoading'
export default {
  components: {
    RollLoading
  },
  props: {
    title: {
      type: String,
      default: '最新发布'
    },
    dataList: {
      type: Array,
      default() {
        return []
      }
    },
    total: {
      type: Number,
      default: 0
    },
    page: {
      type: Number,
      default: 0
    },
    limit: {
      type: Number,
      default: 10
    },
    isRoll: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      count: 0, // 起始页数值为0
      loading: false,
      list: [], // 后端返回的数组
      timer: null,
      showTip: false
    }
  },
  computed: {
    noMore() {
      // 当起始页数大于总页数时停止加载
      return this.page >= Math.ceil(this.total / this.limit)
    }
  },
  mounted() {
    this.loading = true
  },
  methods: {
    load() {
      if (!this.noMore) {
        // 滑到底部时进行加载
        this.loading = true
        this.showTip = false
        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
          const data = {
            page: this.page + 1,
            limit: this.limit
          }
          this.$emit('getList', data)
          this.loading = false
          setTimeout(() => {
            this.showTip = true
          }, 100)
        }, 1000)
      }
    },
    goDetail(item) {
      this.$router.replace({
        path: '/detail',
        query: { id: item.uid, title: item.title }
      })
      // const routeUrl = this.$router.resolve({
      //   path: '/detail',
      //   query: { id: item.uid, title: item.title }
      // })
      // window.open(routeUrl.href)
    }
  }
}
</script>

<style scoped lang="scss">
  .list-wrapper {
    width: 780px;
  }
  .infinite-list-wrapper {
    background: #fff;
    padding:0 20px 20px;
    >p:nth-child(2) {
      text-align: center !important;
      font-size: 14px !important;
    }
  }
  .note-list {
    padding: 0;
    font-size: 14px;
    .have-img {
      min-height: 140px;
      .wrap-img {
        width: 125px;
        height: 100px;
        img {
          width: 100%;
          height: 100%;
          border-radius: 4px;
          border: 1px solid #f0f0f0;
        }
      }
    }
    .title {
      margin: -7px 0 4px;
      display: inherit;
      font-size: 18px;
      font-weight: 700;
      line-height: 1.5;
      color: #666;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .abstract {
      margin: 0 0 8px;
      font-size: 13px;
      line-height: 24px;
      color: #666;
    }
    .meta {
      padding-right: 0!important;
      font-size: 12px;
      font-weight: 400;
      line-height: 20px;
      a {
        argin-right: 10px;
        color: #b4b4b4;
        margin-right: 15px;
      }
      span {
        color: #b4b4b4;
        margin-right: 15px;
      }
    }
  }
  .list-item {
    border-bottom: 1px solid #e7e7e7;
    margin: 0 0 15px;
    padding: 15px 2px 20px 0;
    border-bottom: 1px solid #f0f0f0;
    word-wrap: break-word;
    .content {
      width: 80%;
    }
  }
  .new-pub {
    font-size: 20px;
    margin-bottom: 10px;
  }
  .no-more {
    font-size: 14px;
    color: #666;
    text-align: center;
  }
  .new-pub {
    margin: 0 0 10px 0;
    color: #666;
  }
</style>
