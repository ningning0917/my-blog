<template>
  <div class="nav-bar-item">
    <ul>
      <li><router-link to="/index">首页</router-link></li>
      <li><router-link to="/123">webrabbit开源博客</router-link></li>
      <li><router-link to="/3">IT技术笔记</router-link></li>
      <li><router-link to="/4">其他分享</router-link></li>
      <li><router-link to="/5">变成手册</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavItem'
}
</script>

<style scoped lang="scss">
  .nav-bar-item {
    ul li {
      margin:0 10px;
      color: #777;
      &:hover {
        color: #3399CC;
      }
    }
  }
  .router-link-active {
    color: #3399CC;
  }
</style>
