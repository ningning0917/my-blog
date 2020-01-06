<template>
  <div class="flex-sb">
    <div class="flex-sb">
      <h1 class="logo">
        <a href="http://www.muzhuangnet.com/" title="webrabbit博客">
          <img src="http://www.muzhuangnet.com/upload/201610/17/201610171329086541.png" alt="webrabbit博客">
        </a>
      </h1>
      <search v-bind="$attrs" />
    </div>
    <nav-item />
  </div>
</template>

<script>
import NavItem from './navItem'
import Search from './search'
export default {
  name: 'TopNav',
  components: { Search, NavItem }
}
</script>

<style scoped lang="scss">
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
  .fixed {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 800;
    background: #fff;
  }
</style>
