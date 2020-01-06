<template>
  <div class="dialog-wrapper">
    <el-dialog
      v-el-drag-dialog
      v-drag-resize
      :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      width="600px"
      :before-close="cancel"
    >
      <div class="shang_box" style="display: block;">
        <img class="shang_logo" src="http://www.muzhuangnet.com/upload/201610/17/201610171329086541.png" alt="木庄网络博客" draggable="false">
        <div class="shang_tit">
          <p>
            感谢您的支持，我会继续努力的!
          </p>
        </div>
        <div v-show="radio==='1'" class="shang_payimg">
          <img src="../../../assets/images/zhifubao.png" alt="扫码支持" title="扫一扫" draggable="false">
        </div>
        <div v-show="radio==='2'" class="shang_payimg">
          <img src="../../../assets/images/wechat.png" alt="扫码支持" title="扫一扫" draggable="false">
        </div>
        <div class="pay_explain">
          扫码打赏，您说多少就多少
        </div>
        <div class="shang_payselect">
          <div class="pay_item checked" data-id="alipay">
            <el-radio v-model="radio" label="1">
              <img src="../../../assets/images/alipay.jpg" alt="支付宝" draggable="false">
            </el-radio>
          </div>
          <div class="pay_item" data-id="weipay">
            <el-radio v-model="radio" label="2">
              <img src="../../../assets/images/wechat.jpg" alt="微信" draggable="false">
            </el-radio>
          </div>
        </div>
        <div class="shang_info">
          <p>
            打开<span id="shang_pay_txt">支付宝</span>扫一扫，即可进行扫码打赏哦
          </p>
          <p>
            分享从这里开始，精彩与您同在
          </p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Reward',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      radio: '1'
    }
  },
  methods: {
    cancel() {
      this.$emit('cancel', true)
    }
  }
}
</script>

<style lang="scss" >
  .shang_box {
    width: 540px;
    height: 540px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    border: 1px dotted #dedede;
    margin-bottom: 20px
  }
  .shang_tit {
    width: 100%;
    height: 75px;
    text-align: center;
    line-height: 66px;
    color: #a3a3a3;
    font-size: 16px;
    background: url(../../../assets/images/cy-reward-title-bg.jpg);
    font-family: 'Microsoft YaHei';
    margin-top: 7px;
    margin-right: 2px;
  }
  .shang_payimg {
    width: 180px;
    padding: 5px;
    border: 6px solid #EA5F00;
    margin: 0 auto;
    border-radius: 3px;
    height: 180px;
  }
  .pay_explain {
    text-align: center;
    margin: 10px auto;
    font-size: 12px;
    color: #545454;
  }
  .shang_payselect {
    text-align: center;
    margin: 0 auto;
    margin-top: 40px;
    cursor: pointer;
    height: 60px;
    width: 280px;
  }
  .shang_payselect .pay_item {
    display: inline-block;
    margin-right: 10px;
    float: left;
  }
  .el-radio__label {
    display: inline-block;
    vertical-align: middle;
    img {
      display: inline-block;
      vertical-align: middle;
    }
  }
</style>
<style>

  .shang_logo {
    display: block;
    text-align: center;
    margin: 20px auto;
  }

  .shang_tit {
    width: 100%;
    height: 75px;
    text-align: center;
    line-height: 66px;
    color: #a3a3a3;
    font-size: 16px;
    font-family: 'Microsoft YaHei';
    margin-top: 7px;
    margin-right: 2px;
  }

  .shang_tit p {
    color: #a3a3a3;
    text-align: center;
    font-size: 16px;
  }

  .shang_payimg {
    width: 180px;
    padding: 5px;
    border: 6px solid #EA5F00;
    margin: 0 auto;
    border-radius: 3px;
    height: 180px;
  }

  .shang_payimg img {
    display: block;
    text-align: center;
    width: 160px;
    height: 160px;
  }

  .pay_explain {
    text-align: center;
    margin: 10px auto;
    font-size: 12px;
    color: #545454;
  }

  .radiobox {
    width: 16px;
    height: 16px;
    display: block;
    float: left;
    margin-top: 5px;
    margin-right: 14px;
  }

  .checked .radiobox {
  }

  .shang_payselect {
    text-align: center;
    margin: 0 auto;
    margin-top: 40px;
    cursor: pointer;
    height: 60px;
    width: 280px;
  }

  .shang_payselect .pay_item {
    display: inline-block;
    margin-right: 10px;
    float: left;
  }

  .shang_info {
    clear: both;
  }

  .shang_info p, .shang_info a {
    color: #C3C3C3;
    text-align: center;
    font-size: 12px;
    text-decoration: none;
  }

  .article-shang {
    margin: 30px 0;
    text-align: center;
    cursor: default;
  }

  .article-shang a {
    display: inline-block;
    padding: 4px 7px 3px;
    margin: 0 4px 4px 0;
    color: #FFF;
    font-size: 16px;
    opacity: 0.85;
    filter: alpha(opacity=85);
  }

  .article-shang a:hover {
    opacity: 1;
    filter: alpha(opacity=100);
    -webkit-transform: scale(1.05);
    transform: scale(1.05);
    -webkit-transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
    transition-timing-function: cubic-bezier(0.47, 2.02, 0.31, -0.36);
  }
</style>
