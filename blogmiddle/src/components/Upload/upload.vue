<template>
  <div style="position: relative;margin-bottom: 20px">
    <el-upload
      ref="uploadFile"
      :data="dataObj"
      :headers="headers"
      :http-request="myUpload"
      class="flex-sb"
      action=""
      multiple
      :limit="1"
      :on-remove="handleRemove"
      :on-exceed="handleExceed"
      :file-list="fileList"
      :show-file-list="true"
    >
      <el-button type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>

import { uploadFile } from '../../api/uploadFile'

export default {
  name: 'UploadFile',
  props: {
    index: {
      type: Number,
      default: 0
    },
    isClear: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      dataObj: { 'userCode': 'hep-batch', systemId: 'hep_batch', bussType: 'hep' },
      action: '',
      headers: { 'Content-Type': 'utf-8' },
      fileList: []
    }
  },
  watch: {
    isClear(newVal, oldVal) {
      if (newVal !== oldVal) {
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
    },
    myUpload(content) {
      const formData = new FormData()
      formData.append('file', content.file)
      uploadFile(formData).then(res => {
        if (res.code === 200) {
          this.$message({
            type: 'success',
            message: res.msg
          })
          this.$emit('success', { imgUrl: res.imgUrl })
        } else {
          this.$message({
            type: 'error',
            message: res.msg
          })
          this.fileList = []
          this.loading = false
        }
      }).catch((e) => {
        this.$message({
          type: 'error',
          message: e
        })
        this.fileList = []
        this.loading = false
      })
    }
  }
}
</script>
