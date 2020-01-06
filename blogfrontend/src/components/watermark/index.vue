<template>
  <div class="water-mark-wrapper">
    <div><span>{{ accCode }}</span>/<span>{{ loginDate | parseTime() }}</span></div>
  </div>
</template>

<script>
export default {
  name: 'WaterMark',
  data() {
    return {
      loginDate: '',
      accCode: ''
    }
  },
  mounted() {
    this.loginDate = this.$store.state.user.userInfo.loginDate
    this.accCode = this.$store.state.user.userInfo.accCode
  }
}
</script>

<style scoped lang="scss">
  .water-mark-wrapper {
    position: fixed;
    top: 40%;
    left: 36%;
    z-index: 10000;
    color:rgba(0,0,0,0.1);
    transform: rotateZ(-30deg);
    font-size: 3vw;
    pointer-events: none;
    div {
      margin-bottom: 200px;
      &:nth-child(2) {
        transform: translateX(130px);
      }
      &:nth-child(3) {
        transform: translateX(200px);
      }
    }
  }
</style>
