<template>
  <div class="app-container documentation-container">
    <!--    <a class="document-btn" target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/">{{ $t('documentation.documentation') }}</a>-->
    <!--    <a class="document-btn" target="_blank" href="https://github.com/PanJiaChen/vue-element-admin/">{{ $t('documentation.github') }}</a>-->
    <!--    <a class="document-btn" target="_blank" href="https://panjiachen.gitee.io/vue-element-admin-site/zh/">国内文档</a>-->
    <!--    <dropdown-menu :items="articleList" style="float:left;margin-left:50px;" title="系列文章" />-->
    <el-button type="primary" @click="downloadFile">从阿里云服务器下载图片文件</el-button>
    <el-button type="primary" @click="downloadUserInfo">下载用户信息表</el-button>
    <el-button type="primary" @click="download">下载在后端文件目录下的xlsx模版</el-button>
  </div>
</template>
<script>
import { download, downloadFile, downloadUserInfo } from '../../api/file'

export default {
  name: 'Documentation',
  data() {
    return {
      articleList: [
        { title: '基础篇', href: 'https://juejin.im/post/59097cd7a22b9d0065fb61d2' },
        { title: '登录权限篇', href: 'https://juejin.im/post/591aa14f570c35006961acac' },
        { title: '实战篇', href: 'https://juejin.im/post/593121aa0ce4630057f70d35' },
        { title: 'vue-admin-template 篇', href: 'https://juejin.im/post/595b4d776fb9a06bbe7dba56' },
        { title: '自行封装 component', href: 'https://segmentfault.com/a/1190000009090836' },
        { title: '优雅的使用 icon', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（上）', href: 'https://juejin.im/post/59bb864b5188257e7a427c09' },
        { title: 'webpack4（下）', href: 'https://juejin.im/post/5b5d6d6f6fb9a04fea58aabc' }
      ],
      src: ''
    }
  },
  methods: {
    downloadUserInfo() {
      downloadUserInfo().then(res => {
        var blob = new Blob([res], { type: 'application/vnd.ms-excel;charset=utf-8' })
        var objectUrl = URL.createObjectURL(blob)
        console.log(objectUrl, 'objectUrl')
        var filename = `用户信息表.xlsx`
        if (window.navigator.msSaveOrOpenBlob) { // For IE:
          navigator.msSaveBlob(blob, filename)
        } else { // For other browsers:
          objectUrl = URL.createObjectURL(blob)
          var a = document.createElement('a')
          document.body.appendChild(a)
          a.setAttribute('style', 'display:none')
          a.setAttribute('href', objectUrl)
          a.setAttribute('download', filename)
          a.target = '_blank'
          a.click()
          URL.revokeObjectURL(objectUrl)
        }
      })
    },
    downloadFile() {
      const params = {
        test: 1
      }
      downloadFile(params).then(res => {
        // if (res.code === 200) {
        //   const a = document.createElement('a')
        //   a.style.display = 'none'
        //   window.download(res.data.url)
        //   // a.click()
        // }
        console.log(res.data.url, 'res.data.url')
        const blobUrl = res.data.url
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = blobUrl
        // a.target = '_blank'
        a.click()
      })
    },
    download() {
      const params = {
        test: 1
      }
      download(params).then(res => {
        var blob = new Blob([res], { type: 'application/vnd.ms-excel;charset=utf-8' })
        var objectUrl = URL.createObjectURL(blob)
        var filename = `downloadFileXls.xlsx`
        if (window.navigator.msSaveOrOpenBlob) { // For IE:
          navigator.msSaveBlob(blob, filename)
        } else { // For other browsers:
          objectUrl = URL.createObjectURL(blob)
          var a = document.createElement('a')
          document.body.appendChild(a)
          a.setAttribute('style', 'display:none')
          a.setAttribute('href', objectUrl)
          a.setAttribute('download', filename)
          a.target = '_blank'
          a.click()
          URL.revokeObjectURL(objectUrl)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.documentation-container {
  margin: 50px;
  .document-btn {
    float: left;
    margin-left: 50px;
    display: block;
    cursor: pointer;
    background: black;
    color: white;
    height: 60px;
    width: 200px;
    line-height: 60px;
    font-size: 20px;
    text-align: center;
  }
}
</style>
