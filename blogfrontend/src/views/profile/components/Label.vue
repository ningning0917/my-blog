<template>
  <div class="label-wrapper">
    <div>
      <el-card class="box-card" shadow="never">
        <div slot="header">
          <span>标签云</span>
        </div>
        <div>
          <ul>
            <li>
              <a href="">
                博客
                <span class="badge">12</span>
              </a>
            </li>
            <li>
              <a href="">
                博客
                <span class="badge">12</span>
              </a>
            </li>
            <li>
              <a href="">
                博客博客
                <span class="badge">12</span>
              </a>
            </li>
            <li>
              <a href="">
                javascript
                <span class="badge">12</span>
              </a>
            </li>
          </ul>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Comment',
  data() {
    return {
    }
  }
}
</script>

<style>
  .comment-wrapper .el-card__body {
    padding: 0;
  }
</style>
<style scoped lang="scss">
  .label-wrapper {
    position: relative;
    margin-top: 15px;
    .commentFixed {
      position: fixed;
      top: 90px;
      width: 400px;
    }
    ul li a {
      display: block;
      padding: 0 10px;
      height: 38px;
      line-height: 38px;
      overflow: hidden;
      border: 1px solid #EAEAEA;
      margin: 10px 10px 3px 8px;
      color: #555;
      position: relative;
      font-size: 14px;
      background: #EEE;
      transition: all .3s;
      .badge {
        display: inline-block;
        min-width: 10px;
        padding: 3px 7px;
        font-size: 12px;
        font-weight: 700;
        line-height: 1;
        color: #fff;
        text-align: center;
        white-space: nowrap;
        vertical-align: text-top;
        border-radius: 10px;
        background-color: #999;
        margin-left: 4px;
      }
      &:hover {
        border-color: #3399CC;
        color: #3399CC;
        box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.09);
      }
      .thumbnail {
        float: left;
        margin-left: -135px;
        border: none;
        margin-bottom: 0;
        img {
          width: 122px;
          height: 86px;
        }
      }
      .tips {
        margin-top: 10px;
      }
      .muted {
        margin-right: 15px;
        font-size: 12px;
        color: #BBB;
      }
    }
  }
</style>
