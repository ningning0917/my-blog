<template>
  <footer class="footer">
    <div class="container">
      <p v-if="$route.name === '/index'">本站[
        <a href="http://www.muzhuangnet.com/">
          木庄网络博客</a>
        ]的部分内容来源于网络，若侵犯到您的利益，请联系站长删除！谢谢！Powered By [
        <a href="http://www.dtcms.net/" target="_blank" rel="nofollow">
          DTcms</a>
        ] Version 4.0 &nbsp;
        <a href="http://www.miitbeian.gov.cn/" target="_blank">
          闽ICP备00000000号-1</a>
        &nbsp;
        <a href="http://www.muzhuangnet.com/sitemap.xml" target="_blank" class="sitemap">
          网站地图</a>
      </p>
      <p v-else>本站[<a href="http://www.muzhuangnet.com/">木庄网络博客</a>]的部分内容来源于网络，若侵犯到您的利益，请联系站长删除！谢谢！Powered By [<a href="http://www.dtcms.net/" target="_blank" rel="nofollow">DTcms</a>] Version 4.0 </p>
    </div>
    <div id="gotop" style="display: block;">
      <a class="gotop" draggable="false" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
  .footer {
    width: 100%;
    height: 64px;
    padding: 0px 15px;
    font-size: 12px;
    line-height: 64px;
    text-align: center;
    text-transform: uppercase;
    color: #999;
    background-color: #FFF;
    -moz-box-shadow: 0px 0px 2px 0px rgba(0,0,0,.1);
    -webkit-box-shadow: 0px 0px 2px 0px rgba(0,0,0,.1);
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,.1);
  }
  .container {
    min-width: 1000px;
    position: relative;
    margin: 0 auto;
    padding: 0;
    a {
      color: #999;
    }
  }
</style>
