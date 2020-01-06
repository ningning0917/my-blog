<template>
  <div class="app-wrapper">
    <nav-bar />
    <div class="main-container">
      <app-main />
    </div>
    <Footer />
  </div>
</template>

<script>
import { AppMain, NavBar, Footer } from './components'

export default {
  name: 'Layout',
  components: {
    AppMain,
    NavBar,
    Footer
  },
  methods: {
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";

  .app-wrapper {
    @include clearfix;
    min-width: 1300px;
    width: 100%;
    position: relative;
    &.mobile.openSidebar {
      position: fixed;
      top: 0;
    }
  }

  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }

  .fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }

  .mobile .fixed-header {
    width: 100%;
  }
</style>
