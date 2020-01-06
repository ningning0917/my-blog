<template>
  <div class="top-wrapper">
    <div class="flex-sb">
      <div>勤记录，懂分享</div>
      <div>
        <ul>
          <li>
            <router-link to="/profile">
              博主简介
            </router-link>
          </li>
          <li><router-link to="/label">标签云</router-link></li>
          <li><router-link to="/book">书签</router-link></li>
          <li><router-link to="/reader">读者墙</router-link></li>
          <li><router-link to="/meiZi">妹子图片</router-link></li>
          <li><router-link to="/weChat">微信接口</router-link></li>
          <li><router-link to="/chat">聊天室</router-link></li>
          <li><a href="/">RSS订阅</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Top'
}
</script>

<style scoped lang="scss">
  .top-wrapper {
    font-size: 14px;
    color: #999;
    padding-top: 10px;
    padding-bottom: 5px;
    ul li {
      margin:0 10px;
      transition: all .3s;
      &:hover {
        color: #0a76a4;
        transform: scale(1.1);
      }
    }
  }
  .router-link-active {
    color: #0a76a4;
    transform: scale(1.1);
  }
</style>

