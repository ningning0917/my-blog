<template>
  <div style="position: relative" :style="inlineStyle">
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
      :show-file-list="false"
    >
      <el-button :type="type">{{ name }}</el-button>
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
    },
    type: {
      type: String,
      default: 'primary'
    },
    name: {
      type: String,
      default: '点击上传'
    },
    inlineStyle: {
      type: Object,
      default() {
        return {}
      }
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
      formData.append('userCode', 'hep-batch')
      formData.append('systemId', 'hep-batch')
      formData.append('bussType', 'hep')
      console.log(content.file, 'content.file')
      uploadFile(formData).then(res => {
        if (res.resultObj.resultCode === '0000') {
          this.$message({
            type: 'success',
            message: '文件上传成功'
          })
          this.$emit('success', { index: this.index, fileName: content.file.name, ...res.resultObj })
          this.$bus.emit('success')
        } else {
          this.$message({
            type: 'error',
            message: res.resultMsg || '文件上传失败'
          })
          this.loading = false
        }
      }).catch((e) => {
        this.$message({
          type: 'error',
          message: e
        })
        this.loading = false
      })
      this.handleRemove()
    }
  }
}
</script>
