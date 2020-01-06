<template>
  <div class="upload-container">
    <el-upload
      :data="dataObj"
      :headers="headers"
      :http-request="myUpload"
      class="file-uploader"
      drag
      action=""
      multiple
      :limit="1"
      :accept="accept"
      :on-exceed="handleExceed"
      :on-remove="handleRemove"
      :file-list="fileList"
    >
      <i class="el-icon-upload" />
      <div class="el-upload__text">
        <span v-if="fileList.length===0">将文件拖到此处，或<em>点击上传</em></span>
        <span v-else class="disabled">已经上传了一个文件，不可重复上传</span>
        <div v-if="accept" slot="tip" class="el-upload__tip">初次上传时，请先下载清单模板。</div>
      </div>
    </el-upload>
  </div>
</template>

<script>

export default {
  name: 'UploadFile',
  props: {
    value: {
      type: String,
      default: ''
    },
    dataObj: {
      type: Object,
      default() {
        return { 'userCode': 'hep-batch', systemId: 'hep_batch', bussType: 'hep' }
      }
    },
    isFailure: {
      type: Boolean,
      default: false
    },
    accept: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      tempUrl: '',
      action: '',
      headers: { 'Content-Type': 'utf-8' },
      fileList: []
    }
  },
  watch: {
    isFailure(v) {
      console.log(v, 'v')
      if (v) {
        this.fileList = []
      }
    }
  },
  methods: {
    handleExceed(files) {
      this.$message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件`)
    },
    handleRemove() {
      this.fileList = []
      this.$emit('remove')
    },
    myUpload(content) {
      this.fileList.push({
        name: content.file.name
      })
      let size = 0
      size = content.file.size / 1024 / 1024
      if (size > 3) {
        this.$notify({
          type: 'warning',
          message: '请上传小于3M的文件'
        })
        this.fileList = []
      } else {
        this.$emit('contentEmit', content)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "~@/styles/mixin.scss";
    .upload-container {
        width: 100%;
        position: relative;
        @include clearfix;
        .file-uploader {
            width: 100%;
            float: left;
        }
      .disabled {
        color: #2b2f3a;
      }
    }

</style>
