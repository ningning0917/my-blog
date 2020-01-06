<template>
  <div class="carousel-wrapper">
    <el-carousel indicator-position="outside" :interval="5000">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>
          <a><img src="https://f11.baidu.com/it/u=2133258779,2420437918&fm=72" alt=""></a>
        </h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'Carousel'
}
</script>

<style scoped>
  .el-carousel__item img {
    width: 100%;
    height: 100%;
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

