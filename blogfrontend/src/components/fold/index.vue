<template>
  <div class="fold-wrapper" @click="_handleFold">
    <div v-if="foldStatus" class="to-top">
      <i class="el-icon-caret-top" />
      <span>折叠</span>
    </div>
    <div v-if="!foldStatus" class="to-top">
      <i class="el-icon-caret-bottom" />
      <span>展开</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fold',
  props: {
    foldStatus: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    _handleFold() {
      this.$emit('handleFold', true)
    }
  }
}
</script>

<style scoped lang="scss">
  .fold-wrapper {
    width: 100%;
    border-top: 1px solid #eaeefb;
    height: 44px;
    line-height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    font-size: 12px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;
    .to-top {
      transition: all .3s;
      span {
        opacity: 0;
        transition: all .3s;
      }
      &:hover {
        color: #409eff;
        transform: translateX(-20px);
        span {
          color: #409eff;
          opacity: 1;
        }
      }
    }
  }
</style>
