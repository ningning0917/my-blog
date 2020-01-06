<template>
  <div class="login-dialog-wrapper">
    <el-dialog
      title="动态令牌确认"
      :visible.sync="dialogVisible"
      width="500px"
      :before-close="cancel"
    >
      <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" style="margin-bottom: 100px">
        <el-form-item label="动态令牌" prop="sdkNum" class="label-box">
          <el-input
            v-model="ruleForm.sdkNum"
            placeholder="动态令牌每分钟更新一次请及时输入"
          />
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="default" @click.stop.prevent="cancel">取 消</el-button>
        <el-button
          type="primary"
          :loading="buttonLoading"
          @click="submitForm"
        >确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>

export default {
  name: 'Dialog',
  props: {
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      ruleForm: {
        name: ''
      },
      buttonLoading: false,
      rules: {
        sdkNum: [
          { required: true, message: '请输入动态令牌', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    cancel() {
      this.ruleForm.sdkNum = ''
      this.$emit('cancel')
    },
    submitForm() {
      this.buttonLoading = true
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.$emit('verifyToken', this.ruleForm.sdkNum)
        } else {
          return false
        }
        setTimeout(() => {
          this.buttonLoading = false
          this.cancel()
        }, 300)
      })
    }
  }
}
</script>

<style lang="scss">
  .login-dialog-wrapper {
    .el-button--primary {
      background: #12cfa8;
    }
    .el-button {
      border: 1px solid #12cfa8;
    }
    .el-form-item--medium .el-form-item__label {
      line-height: 46px !important;
    }
    .label-box {
      .el-form-item__label {
        line-height: 46px;
      }
    }
  }
</style>
