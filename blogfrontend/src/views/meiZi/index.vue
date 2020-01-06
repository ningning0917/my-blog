<template>
  <div class="container-water-fall">
    <vue-waterfall-easy id="waterfall" ref="waterfall" :imgs-arr="imgArr" src-key="url" href-key="url" :gap="15" :img-width="235" @scrollReachBottom="getImage">
      <template slot-scope="props">
        <span class="img-title">{{ props.value.title }}</span>
      </template>
    </vue-waterfall-easy>
  </div>
</template>

<script>
import { getImages } from '../../api/dashboard'
import vueWaterfallEasy from 'vue-waterfall-easy'
export default {
  name: 'MeiZi',
  components: {
    vueWaterfallEasy
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      imgArr: [],
      col: 5,
      loading: false,
      total: 0,
      listQuery: {
        page: 1,
        limit: 30
      }
    }
  },
  computed: {
    itemWidth() {
      return 120 * 0.5 * (document.documentElement.clientWidth / 375)
    },
    gutterWidth() {
      return 10 * 0.5 * (document.documentElement.clientWidth / 375)
    }
  },
  created() {
    this.getInit()
  },
  updated() {
    // this.$waterfall.forceUpdate()
  },
  methods: {
    getInit() {
      getImages(this.listQuery).then(res => {
        if (res.code === 200) {
          this.total = res.total
          this.imgArr = res.data
        }
      })
    },
    getImage() {
      getImages(this.listQuery).then(res => {
        if (res.code === 200) {
          this.total = res.total
          this.listQuery.page += 1
          this.listQuery.limit = 10
          if (this.listQuery.page * this.listQuery.limit > this.total) {
            this.$refs.waterfall.waterfallOver()
            return
          }
          this.imgArr = this.imgArr.concat(res.data)
        }
      })
    },
    goDetail(item) {
      window.open(item.url, '_blank')
    }
  }
}
</script>
<style  lang="scss">
  * {
    margin: 0;
  }
  #waterfall {
    position: absolute;
    top: 0;
    bottom: 0;
    min-height: calc(100vh - 146px);
  }
  .container-water-fall {
    position: relative;
    box-sizing: border-box;
    .img-title {
      color: #666;
      font-size: 14px;
      display: inline-block;
      margin: 15px 10px;
    }
  }
</style>
