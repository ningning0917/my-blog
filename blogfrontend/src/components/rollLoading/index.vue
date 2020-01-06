<template>
  <div class="rolling-wrapper">
    <slot name="loading" />
  </div>
</template>

<script>
export default {
  name: 'RollLoading',
  props: {
    noMore: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      pageHeight: 0,
      documentHeight: 0,
      scrollTop: 0
    }
  },
  mounted() {
    const _this = this
    if (!_this.noMore) {
      window.onscroll = function() {
        _this.scrollFunc()
      }
    }
  },
  beforeDestroy() {
    const _this = this
    window.removeEventListener('scroll', function() {
      _this.scrollFunc()
    })
  },
  methods: {
    scrollFunc() {
      const touchScroll = this.touchScroll()
      if (touchScroll <= 0) {
        // 发送请求加载
        this.$emit('load')
      }
    },
    touchScroll() {
      const offsetHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight) // 内容高度
      const clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0 // 视窗高度
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0 // 滚动条滚动高度
      return (offsetHeight - clientHeight - scrollTop)
    }

  }
}
</script>

<style scoped lang="scss">
  .rolling-wrapper {
    .loading {
      text-align: center;
      span {
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 2px solid #409eff;
        border-left: transparent;
        animation: zhuan 0.5s linear infinite;
        border-radius: 50%;
      }
    }
    @keyframes zhuan {
      0% {
        transform: rotate(0);
      }
      100% {
        transform: rotate(360deg);
      }
    }
    .no-more {
      text-align: center;
      font-size: 14px;
      color: #666;
    }
    .loading .svg-icon {
      font-size: 30px;
      animation: zhuan 1s linear infinite;
    }
  }
</style>
