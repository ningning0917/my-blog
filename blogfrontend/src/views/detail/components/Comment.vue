<template>
  <div class="detail-comment-wrapper">
    <div class="title">
      <h3>评论</h3>
    </div>
    <el-form ref="ruleForm" :model="ruleForm" class="form-wrapper" :label-position="labelPosition">
      <el-form-item>
        <el-input v-model="ruleForm.nickname" placeholder="您的昵称(必填)" />
      </el-form-item>
      <el-form-item>
        <el-input v-model="ruleForm.email" placeholder="请输入您的邮箱(非必填)" class="input-with-select">
          <el-select slot="append" v-model="select" placeholder="请选择" value="">
            <el-option label="不填" value="" />
            <el-option label="@qq.com" value="@qq.com" />
            <el-option label="@163.com" value="@163.com" />
            <el-option label="@139.com" value="@139.com" />
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input v-model="ruleForm.website" placeholder="请输入您的网址(非必填)">
          <el-select slot="prepend" v-model="httpSelect" placeholder="请选择" value="">
            <el-option label="http" value="http://">
              <template slot="prepend">Http://</template>
            </el-option>
            <el-option label="https" value="https://">
              <template slot="prepend">Https://</template>
            </el-option>
          </el-select>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          v-model="ruleForm.comment"
          type="textarea"
          placeholder="您的评论或留言(必填)"
          maxlength="300"
          resize="none"
          autocomplete
          :rows="6"
          show-word-limit
          @focus="textareaFocus"
        />
      </el-form-item>
      <div class="tips flex-sb-top" :class="{'focus': isFocus}">
        <el-alert
          title="调出表情:(mac: controll+command+空格) window: 中文状态下Shift+Ctrl+b"
          type="success"
          :closable="false"
        />
        <div class="submit-box">
          <el-button class="close-btn" icon="el-icon-close" circle @click="cancel" />
          <el-button class="submit-btn" type="success" icon="el-icon-check" circle :loading="loading" @click="submit" />
        </div>
      </div>
    </el-form>

    <div id="postcomments">
      <div v-if="commentList.length === 0">
        <el-alert
          title="暂无评论..."
          type="info"
          :closable="false"
          center
        />
      </div>
      <ol v-else id="comment_list" class="commentlist">
        <li v-for="(item, index) in commentList" :key="index" class="comment-content flex-sb">
          <div class="comment-main">
            <p>
              <el-popover
                placement="top-start"
                title="作者简介"
                width="400"
                trigger="hover"
              >
                <ul class="tips-content">
                  <li>昵称：{{ item.nickname }}</li>
                  <li>邮箱：
                    <a
                      :href="'mailto:' + item.email"
                      target="_blank"
                      data-toggle="tooltip"
                      rel="nofollow"
                      data-placement="bottom"
                      title=""
                    >{{ item.email }}</a>
                  </li>
                  <li>个人网址：
                    <a
                      :href="item.website"
                      :title="item.website"
                      target="_blank"
                    >{{ item.website }}</a>
                  </li>
                </ul>
                <span slot="reference">
                  <a class="address">{{ item.nickname }}</a>
                </span>
              </el-popover>
              <span class="time">{{ item.createTime | parseTime() }}</span>
              <span>
                <svg-icon icon-class="like" />
                {{ item.zan }}
              </span>
            </p>
            <div class="flex-sb-start">
              <div>{{ item.comment }}</div>
              <div class="give-comment-zan flex-sb-start" @click="handleZan(item.id)">
                <div>
                  <svg-icon v-if="!isZan" icon-class="zan" />
                  <svg-icon v-if="isZan" icon-class="zan3" />
                </div>
                <div v-if="isZan" class="dianzan">+{{ zanCommentCount }}</div>
              </div>
            </div>

          </div>
          <div class="comment-f"># {{ commentList.length - index }}</div>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
  import { addCommentZan, createComment, getComment } from '../../../api/dashboard'

export default {
  name: 'Comment',
  data() {
    return {
      labelPosition: 'right',
      uid: '',
      select: '',
      httpSelect: 'http://',
      ruleForm: {
        nickname: '',
        email: '',
        website: '',
        comment: ''
      },
      commentList: [],
      showEmoji: false,
      isFocus: false,
      loading: false,
      isZan: false,
      zanCommentCount: false
    }
  },
  mounted() {
    this.uid = this.$route.query.id
    this.getComment(this.uid)
  },
  methods: {
    submit() {
      if (!this.ruleForm.nickname) {
        this.$alert('对不起请输入你的昵称', '提示', {
          confirmButtonText: '确定'
        })
        return false
      } else if (!this.ruleForm.comment) {
        this.$alert('对不起请输入你的评论或留言', '提示', {
          confirmButtonText: '确定'
        })
      } else {
        this.loading = true
        this.ruleForm.email = this.ruleForm.email + this.select
        this.ruleForm.website = this.httpSelect + this.ruleForm.website
        createComment({ ...this.ruleForm, uid: this.uid }).then(res => {
          if (res.code === 200) {
            this.commentList = res.data
            this.ruleForm = {}
            this.$emit('success')
          } else {
            this.ruleForm = {}
          }
          this.loading = false
        }).catch(() => {
          this.ruleForm = {}
          this.loading = false
        })
      }
    },
    getComment(uid) {
      getComment({ uid }).then(res => {
        if (res.code === 200) {
          this.commentList = res.data
          this.ruleForm = {}
        } else {
          this.ruleForm = {}
        }
      }).catch(() => {
        this.ruleForm = {}
      })
    },
    textareaFocus() {
      this.isFocus = true
    },
    cancel() {
      this.isFocus = false
    },
    handleZan(id) {
      this.isZan = !this.isZan
      const data = {
        id: id,
        isZan: this.isZan
      }
      addCommentZan(data).then(res => {
        if (res.code === 200) {
          this.zanCommentCount = res.zanCount
          this.getComment(this.uid)
        }
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .detail-comment-wrapper {
    margin-bottom: 15px;
    font-size: 16px;
    .title {
      border-bottom: 1px solid #EAEAEA;
      padding-bottom: 10px;
    }
    h3 {
      margin: 0;
    }
    .form-wrapper {
      margin-top: 20px;
    }
    .el-form-item {
      margin-bottom: 10px;
    }
    .submit-box {
      height: 30px;
    }
    .close-btn {
      float: right;
      margin-bottom: 10px;
      margin-left: 10px;
    }
    #postcomments {
      margin-top: 20px;
      padding-bottom: 20px;
      position: relative;
      .commentlist {
        padding: 0;
        margin: 0;
        list-style: none;
        margin-bottom: 10px;
        cursor: pointer;
        .comment-content {
          width: 100%;
          border-bottom: #EEE 1px solid;
          .comment-f {
            width: 40px;
            display: block;
            font-size: 16px;
            color: #ccc;
            text-align: right;
          }
          .comment-main {
            width: 500px;
            margin-left: 5px;
            margin-right: 30px;
            color: #888;
            line-height: 22px;
            position: relative;
            font-size: 14px;
            word-wrap: break-word;
            max-height: 300px;
            .comment-main p {
              margin-top: 15px;
              margin-bottom: 0;
            }
            a {
              color: #337ab7;
            }
          }
        }
      }
      .comment-main span.time {
        margin: 0 5px;
        font-size: 12px;
        color: #BBB;
      }
    }
    .tips {
      font-size: 12px;
      color: #333;
      height: 0;
      overflow: hidden;
      transition: height .3s;
      p {
        margin: 0;
        padding: 0;
      }
    }
    .focus {
      height: 40px;
    }
  }
  .tips-content li {
    display: block;
  }
  .tips-content a {
    color: #337ab7;
  }
  .tips-content a:hover {
    text-decoration: underline;
  }
</style>
<style lang="scss">
  .detail-comment-wrapper {
    .tips .el-alert {
      width: 446px;
    }
    .el-select .el-input {
      width: 130px;
    }
    .input-with-select .el-input-group__prepend {
      background-color: #fff;
    }
    .input-with-select .el-input-group__append {
        width: 100px;
    }
  }
  .el-select-dropdown__item {
    display: block !important;
    text-align: center !important;
  }

  .give-comment-zan {
    width: 100px;
    font-size: 14px;
    text-align: center;
    user-select: none;
    margin-left: 20px;
    align-items: flex-end;
    >div {
      width: 14px;
      height: 24px;
    }
    .dianzan {
      width: 15px;
      font-size: 12px;
      line-height: 24px;
      color: #ec7259;
    }
  }
  [tabindex="-1"]:focus {
    outline: none!important;
  }
</style>
