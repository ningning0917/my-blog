<template>
  <div class="createPost-container">
    <el-form ref="postForm" :model="postForm" :rules="rules" class="form-container">
      <sticky :class-name="'sub-navbar '+postForm.status">
        <!--        <CommentDropdown v-model="postForm.comment_disabled" />-->
        <!--        <PlatformDropdown v-model="postForm.platforms" />-->
        <!--        <SourceUrlDropdown v-model="postForm.source_uri" />-->
        <el-button v-loading="loading" style="margin-left: 10px;" type="success" @click="submitForm">
          发布
        </el-button>
      </sticky>

      <div class="createPost-main-container">
        <el-row>
          <el-col :span="24">
            <el-form-item style="margin-bottom: 40px;" prop="title">
              <MDinput v-model="postForm.title" :maxlength="100" name="name" required>
                标题
              </MDinput>
            </el-form-item>

            <div class="postInfo-container">
              <div>
                <el-form-item style="margin-bottom: 40px;" label="标签" prop="label">
                  <el-select
                    v-model="postForm.label"
                    multiple
                    filterable
                    default-first-option
                    placeholder="请选择文章标签"
                  >
                    <el-option
                      v-for="(item, i) in labelOpt"
                      :key="i"
                      :label="item.labelName"
                      :value="item.labelName"
                    />
                  </el-select>
                </el-form-item>
              </div>
              <el-row>
                <el-col :span="8">
                  <el-form-item label-width="45px" label="作者:" class="postInfo-container-item">
                    <el-input v-model="postForm.author" placeholder="搜索用户" />
                  </el-form-item>
                </el-col>

                <el-col :span="10">
                  <el-form-item label-width="80px" label="发布时间:" class="postInfo-container-item">
                    <el-date-picker v-model="postForm.publishTime" type="datetime" format="yyyy-MM-dd HH:mm:ss" placeholder="选择日期时间" />
                  </el-form-item>
                </el-col>

                <el-col :span="6">
                  <el-form-item label-width="60px" label="重要性:" class="postInfo-container-item">
                    <el-rate
                      v-model="postForm.importance"
                      :max="3"
                      :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
                      :low-threshold="1"
                      :high-threshold="3"
                      style="margin-top:8px;"
                    />
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>

        <el-form-item style="margin-bottom: 40px;" label-width="45px" label="摘要:">
          <el-input v-model="postForm.summary" :rows="1" type="textarea" class="article-textarea" autosize placeholder="请输入内容" />
          <span v-show="summaryLength" class="word-counter">{{ summaryLength }}字</span>
        </el-form-item>

        <markdown-editor
          ref="markdownEditor"
          v-model="postForm.content"
          v-screenfull
          v-sync-roll
          :language="language"
          height="300px"
        />

        <el-form-item prop="image_uri" style="margin-top: 30px;">
          <Upload @success="success" @remove="remove" />
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import Upload from '@/components/Upload/UploadFile'
import MDinput from '@/components/MDinput'
import Sticky from '@/components/Sticky' // 粘性header组件
import MarkdownEditor from '@/components/MarkdownEditor'
import { createArticle, fetchArticle, updateArticle } from '../../../api/article'
import { labelList } from '../../../api/label'

export default {
  name: 'ArticleDetail',
  components: { MarkdownEditor, MDinput, Upload, Sticky },
  props: {
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    const validateRequire = (rule, value, callback) => {
      if (value === '') {
        this.$message({
          message: rule.field + '为必传项',
          type: 'error'
        })
        callback(new Error(rule.field + '为必传项'))
      } else {
        callback()
      }
    }
    return {
      postForm: {
        title: '', // 文章题目
        content: '', // 文章内容
        summary: '', // 文章摘要
        author: '', // 作者
        imageUrl: '', // 文章图片
        publishTime: undefined, // 前台展示时间
        importance: 0,
        label: []
      },
      labelOpt: [],
      loading: false,
      userListOptions: [],
      rules: {
        // image_uri: [{ validator: validateRequire }],
        title: [{ validator: validateRequire }],
        content: [{ validator: validateRequire }]
      },
      tempRoute: {},
      languageTypeList: {
        'en': 'en_US',
        'zh': 'zh_CN',
        'es': 'es_ES'
      },
      uid: ''
    }
  },
  computed: {
    summaryLength() {
      return this.postForm.summary.length
    },
    lang() {
      return this.$store.getters.language
    },
    language() {
      return this.languageTypeList[this.$store.getters.language]
    }
  },
  created() {
    this.getLabel()
    this.userListOptions = [{
      label: this.$store.state.user.userInfo.nickname,
      value: this.$store.state.user.userInfo.username
    }]
  },
  mounted() {
    this.uid = this.$route.path.split('/')[3]
    this.getArticle()
  },
  methods: {
    getArticle() {
      fetchArticle({ id: this.uid }).then(res => {
        if (res.code === 200) {
          this.postForm = res.data
          this.postForm.importance = +res.data.importance
        }
      })
    },
    getLabel() {
      labelList().then(res => {
        if (res.code === 200) {
          this.labelOpt = res.data
        }
      })
    },
    submitForm() {
      this.$refs.postForm.validate(valid => {
        if (valid) {
          if (!this.isEdit) {
            createArticle(this.postForm).then(res => {
              if (res.code === 200) {
                this.$notify({
                  title: '成功',
                  message: '发布文章成功',
                  type: 'success',
                  duration: 2000
                })
                this.$router.push('/article/list')
              }
            })
          } else {
            updateArticle(this.postForm).then(res => {
              if (res.code === 200) {
                this.$notify({
                  title: '成功',
                  message: res.msg,
                  type: 'success',
                  duration: 2000
                })
                this.$router.push('/article/list')
              }
            })
          }
        } else {
          return false
        }
      })
    },
    success(v) {
      this.postForm.imageUrl = v
    },
    remove() {
      this.postForm.imageUrl = ''
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.createPost-container {
  position: relative;
  .createPost-main-container {
    padding: 0px 45px 20px 50px;
    .postInfo-container {
      position: relative;
      @include clearfix;
      margin-bottom: 10px;
      .postInfo-container-item {
        float: left;
      }
    }
  }
  .word-counter {
    width: 40px;
    position: absolute;
    right: -10px;
    top: 0px;
  }
  .label-box {
    display: inline-block;
    font-size: 14px;
    color: #fff;
    background: #2b2f3a;
    margin-right: 20px;
    border-radius: 10px;
    height: 30px;
    line-height: 30px;
    padding: 0 20px;
  }
  .el-select {
    width: 100% !important;
  }
}
</style>
