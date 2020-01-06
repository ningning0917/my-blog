<template>
  <section class="app-main">
    <div class="app-main-wrapper">
      <transition name="fade-transform" mode="out-in">
        <router-view :key="key" />
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style lang="scss" scoped>
.app-main {
  padding-top: 80px;
  padding-bottom: 20px;
  .app-main-wrapper {
    margin: 0 auto;
    width: 1240px;
    min-height: calc(100vh - 164px);
  }
  .app-main-wrapper>div {
    padding-top: 10px;
  }
  .app-main-wrapper /deep/ .dashboard-container {
    padding-top: 0;
    margin-right: 0;
    padding-left: 0;
  }
}

.fixed-header+.app-main {
  padding-top: 50px;
  overflow: auto;
}

.hasTagsView {
  .app-main {
    /* 84 = navbar + tags-view = 50 + 34 */
  }

  .fixed-header+.app-main {
    padding-top: 84px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    /*padding-right: 15px;*/
  }
}
</style>
