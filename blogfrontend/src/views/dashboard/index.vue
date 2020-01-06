<template>
  <div class="dashboard-container">
    <div class="flex-sb-top">
      <div class="left">
        <carousel />
        <article v-if="recommendData.title" class="article">
          <h2>
            <span class="red">【推荐】</span>
            <a :title="recommendData.title" @click="goDetail(recommendData)">
              {{ recommendData.title }}
            </a>
          </h2>
          <p>
            {{ recommendData.summary }}
          </p>
        </article>
        <List
          :data-list="dataList"
          :total="total"
          :page="listQuery.page"
          :limit="listQuery.limit"
          @getList="getList"
        />
      </div>
      <div class="right">
        <right />
        <Comment />
      </div>
    </div>
    <back-to-top />
  </div>
</template>

<script>
import Carousel from './components/Carousel'
import List from './components/List'
import { dni } from '../../utils/config'
import Right from './components/right'
import Comment from './components/Comment'
import BackToTop from '../../components/BackToTop/index'
import { getArticleList, recommend } from '../../api/dashboard'
export default {
  name: 'Dashboard',
  components: { BackToTop, Right, Comment, Carousel, List },
  data() {
    return {
      src: '',
      dni: dni(),
      total: 0,
      dataList: [],
      listQuery: {
        page: 1,
        limit: 10
      },
      recommendData: {}
    }
  },
  created() {
    this.getArticleList()
    this.recommend()
  },
  methods: {
    recommend() {
      recommend().then(res => {
        if (res.code === 200) {
          this.recommendData = res.data
        }
      })
    },
    getArticleList() {
      getArticleList(this.listQuery).then(res => {
        if (res.code === 200) {
          this.dataList = this.dataList.concat(res.data)
          this.total = res.total
        }
      })
    },
    getList(v) {
      this.listQuery = v
      this.getArticleList()
    },
    goDetail(item) {
      this.$router.push({ path: '/detail', query: { id: item.uid, title: item.title }})
      // const routeUrl = this.$router.resolve({
      //   path: '/detail',
      //   query: { id: item.uid, title: item.title }
      // })
      // window.open(routeUrl.href)
    }
  }
}
</script>
<style lang="scss">
  .dashboard-container {
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
  }
</style>
