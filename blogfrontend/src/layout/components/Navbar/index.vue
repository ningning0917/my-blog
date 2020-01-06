<template>
  <div class="nav-bar-wrapper fixed">
    <div class="content-wrapper">
      <top />
      <div class="nav-bar-fixed">
        <div class="nav-bar-content nav-bar-content1" :class="{'up': !isUp}">
          <div class="content-wrapper">
            <top-nav :focus="focus" />
          </div>
        </div>
        <div class="nav-bar-content nav-bar-content2" :class="{'down': !isUp}">
          <div class="content-wrapper">
            <detail-nav v-show="currentRouterName === 'Detail'" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Top from './top'
import { scollPostion } from '../../../utils'
import TopNav from '../../../components/TopNav/indexNav'
import DetailNav from '../../../components/TopNav/detailNav'
export default {
  components: { TopNav, Top, DetailNav },
  data() {
    return {
      isFixed: false,
      navBarTop: '',
      isUp: false,
      changeUpDir: 0,
      changeDownDir: 0,
      focus: 0,
      currentRouterName: ''
    }
  },
  watch: {
    '$route'(to, from) {
      this.currentRouterName = to.name
      const _this = this
      if (to.name === 'Detail') {
        let scrollTop = 0
        let topValue = scollPostion().top
        document.onscroll = function() {
          _this.focus = new Date().getTime()
          scrollTop = scollPostion().top
          if (scrollTop <= topValue) {
            _this.changeUpDir = scrollTop
            if (_this.changeDownDir - scrollTop > 120) {
              _this.isUp = true
            }
          } else {
            _this.changeDownDir = scrollTop
            if (scrollTop - _this.changeUpDir > 120) {
              _this.isUp = false
            }
          }
          setTimeout(function() { topValue = scrollTop }, 0)
        }
      }
      if (to.name === 'Index') {
        _this.isUp = true
        document.onscroll = null
        _this.focus = new Date().getTime()
      }
    }
  },
  mounted() {
    this.currentRouterName = this.$route.name
    document.onscroll = null
    this.isUp = scollPostion().top <= 120
    const _this = this
    if (_this.$route.name === 'Detail') {
      let scrollTop = 0
      let topValue = scollPostion().top
      document.onscroll = function() {
        _this.focus = new Date().getTime()
        const isCommentFixed = topValue >= 191
        _this.$bus.emit('isCommentFixed', isCommentFixed)
        scrollTop = scollPostion().top
        if (scrollTop <= topValue) {
          _this.changeUpDir = scrollTop
          if (_this.changeDownDir - scrollTop > 120) {
            _this.isUp = true
          }
        } else {
          _this.changeDownDir = scrollTop
          if (scrollTop - _this.changeUpDir > 120) {
            _this.isUp = false
          }
        }
        setTimeout(function() { topValue = scrollTop }, 0)
      }
    } else {
      document.onscroll = function() {
        _this.focus = new Date().getTime()
        const topValue = scollPostion().top
        const isCommentFixed = topValue >= 191
        _this.$bus.emit('isCommentFixed', isCommentFixed)
      }
    }
  }
}
</script>
<style scoped lang="scss">
  .nav-bar-wrapper {
    width: 100%;
    height: 78px;
    border-bottom: 1px solid #f0f0f0;
    box-shadow: 0 2px 10px rgba(0,0,0,.05);
    .content-wrapper {
      width: 90%;
      margin: 0 auto;
    }
    .nav-bar-content {
      height: 48px;
      h1 {
        margin: 0;
        &:hover {
          animation: logo .6s;
        }
      }
      .nav-bar-item {
        ul li {
          margin:0 10px;
          color: #777;
          &:hover {
            color: #3399CC;
          }
        }
      }
    }
  }
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 800;
    background: #fff;
  }
  @keyframes logo {
    0% {
      transform: scale(1);
    }
    25% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1);
    }
    75% {
      transform: scale(1.1);
    }
    100% {
      transform: scale(1);
    }
  }
  .nav-bar-fixed {
    position: fixed;
    width: 100%;
    top: 30px;
    left: 0;
    right: 0;
    overflow: hidden;
    z-index: 100;
  }
  .nav-bar-content {
    transition: transform .3s cubic-bezier(.645,.045,.355,1);
  }
  .nav-bar-content1 {
    /*height: 48px;*/
    /*margin: 0 auto;*/
    /*transition: transform .3s cubic-bezier(.645,.045,.355,1);*/
  }
  .nav-bar-content2 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: translateY(100%);
  }
  .up {
    transform: translateY(-100%);
  }
  .down {
    transform: translateY(0%)
  }
</style>
