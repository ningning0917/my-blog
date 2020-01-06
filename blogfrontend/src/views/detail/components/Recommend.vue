<template>
  <div class="recommend-wrapper">
    <div class="relates">
      <div class="title">
        <h3>相关推荐</h3>
      </div>
      <ul>
        <li v-for="(item, i) in dataList" :key="i">
          <span />
          <a :title="item.title" @click="goDetail(item)">
            {{ item.title }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getRecommend } from '../../../api/dashboard'

export default {
  name: 'Recommend',
  data() {
    return {
      uid: '',
      dataList: []
    }
  },
  created() {
    this.uid = this.$route.query.id
    this.getRecommend()
  },
  methods: {
    getRecommend() {
      getRecommend({ uid: this.uid }).then(res => {
        if (res.code === 200) {
          this.dataList = res.data
        }
      })
    },
    goDetail(item) {
      // this.$router.replace({
      //   path: '/detail',
      //   query: { id: item.uid, title: item.title }
      // })
      const routeUrl = this.$router.resolve({
        path: '/list',
        query: { id: item.uid, title: item.title }
      })
      window.open(routeUrl.href)
    }
  }
}
</script>

<style scoped lang="scss">
  .recommend-wrapper {
    .title, .pagetitle {
        margin-bottom: 10px;
        overflow: hidden;
      }
    .title {
      border-bottom: 1px solid #EAEAEA;
      padding-bottom: 10px;
    }
    h3 {
      font-size: 20px;
      margin: 0;
      float: left;
      cursor: pointer;
    }
    .relates ul {
      margin-left: 18px;
      color: #BBB;
      margin-bottom: 30px;
    }
    .relates li {
      display: block;
      margin-top: 10px;
      list-style: disc;
      span {
        display: inline-block;
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background: #BBB;
        vertical-align: middle;
        margin-right: 8px;
      }
    }
    .relates a {
      color: #777;
      font-size: 14px;
    }
    .relates a:hover {
      color: #3399CC;
      text-decoration: underline;
    }
  }
</style>
