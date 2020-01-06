<template>
  <div class="upload-container flex-sa">
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
      </div>
    </el-upload>
    <div class="preview">
      <h4 v-show="!imageUrl">预览</h4>
      <div v-show="imageUrl" class="image-preview-wrapper">
        <img :src="imageUrl" alt="">
        <div class="image-preview-action">
          <i class="el-icon-delete" @click="rmImage" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { uploadFile } from '../../api/uploadFile'

export default {
  name: 'UploadFile',
  props: {
    value: {
      type: String,
      default: ''
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
      fileList: [],
      dataObj: { 'userCode': 'hep-batch', systemId: 'hep_batch', bussType: 'hep' },
      imageUrl: ''
    }
  },
  watch: {
    isFailure(v) {
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
      if (size > 20) {
        this.$notify({
          type: 'warning',
          message: '请上传小于20M的文件'
        })
        this.fileList = []
      } else {
        this.upload(content)
      }
    },
    upload(content) {
      if (!content) {
        this.$message({
          type: 'warning',
          message: '请先选择上传的文件'
        })
        return
      }
      const formData = new FormData()
      console.log(content, 'content')
      formData.append('file', content.file)
      console.log(content.file, 'formData')
      uploadFile(formData).then(res => {
        if (res.code === 200) {
          this.$message({
            type: 'success',
            message: '文件上传成功'
          })
          this.imageUrl = res.imgUrl
          this.$emit('success', res.imgUrl)
        } else {
          this.$message({
            type: 'error',
            message: '文件上传失败'
          })
        }
      }).catch((e) => {
        this.$message({
          type: 'error',
          message: e
        })
      })
    },
    rmImage() {
      this.handleRemove()
    }
  }
}
</script>

<style lang="scss" scoped>
    @import "~@/styles/mixin.scss";
    .upload-container {
        width: 100%;
        .file-uploader {
          width: 100%;
          flex: 1;
          margin-right: 20px;
          height: 200px;
        }
        .preview {
          flex: 1;
          border: 1px solid #eee;
          border-radius: 10px;
          height: 200px;
          h4 {
            text-align: center;
          }
          .image-preview-wrapper {
            position: relative;
            width: 100%;
            height: 100%;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .image-preview-action {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            cursor: default;
            text-align: center;
            color: #fff;
            opacity: 0;
            font-size: 20px;
            background-color: rgba(0, 0, 0, .5);
            transition: opacity .3s;
            cursor: pointer;
            text-align: center;
            line-height: 200px;
            .el-icon-delete {
              font-size: 36px;
            }
          }
          &:hover {
            .image-preview-action {
              opacity: 1;
            }
          }
        }
      .disabled {
        color: #2b2f3a;
      }
    }

</style>
