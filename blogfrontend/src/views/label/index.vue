<template>
  <div class="label-wrapper">
    <div class="container flex-sb-top">
      <div class="left">
        <ul>
          <li><router-link to="/label">标签云</router-link></li>
          <li><router-link to="">书签</router-link></li>
          <li><router-link to="">读者墙</router-link></li>
          <li><router-link to="">webrabbit开源博客</router-link></li>
          <li><router-link to="">IT技术笔记</router-link></li>
          <li><router-link to="">其他分享</router-link></li>
          <li><router-link to="">编程手册</router-link></li>
          <li><router-link to="/profile">博主简介</router-link></li>
        </ul>
      </div>
      <div class="right">
        <h1>标签云</h1>
        <ul class="content-wrapper">
          <li v-for="(tag, i) in tags" :key="i">
            <el-button size="small" @click="goList(tag.labelName)">
              <span>{{ tag.labelName }}</span>
              <span v-if="tag.uid" class="count">{{ tag.uid.split(',').length }} </span>
            </el-button>
          </li>
        </ul>
      </div>
    </div>
    <back-to-top />
  </div>
</template>
<script>
import BackToTop from '../../components/BackToTop/index'
import { labelList } from '../../api/dashboard'

export default {
  name: 'Index',
  components: { BackToTop },
  data() {
    return {
      tags: []
    }
  },
  mounted() {
    this.getLabel()
  },
  methods: {
    getLabel() {
      labelList().then(res => {
        if (res.code === 200) {
          this.tags = res.data
        }
      })
    },
    goList(v) {
      this.$router.push({ path: '/list', query: { label: v }})
    }
  }
}
</script>
<style lang="scss">
  .label-wrapper {
    .el-tag {
      margin: 10px;
    }
  }
</style>
<style rel="stylesheet/scss" lang="scss">
  .label-wrapper {
    .left {
      width: 280px;
      border: 1px solid #eee;
      border-bottom: none;
      ul {
        li {
          display: block;
          height: 50px;
          line-height: 50px;
          color: #666;
          border-bottom: 1px solid #eee;
          padding-left: 20px;
          background: #fff;
        }
      }
    }
    .right {
      width: 900px;
      height: 300px;
      background: #fff;
      border: 1px solid #eee;
      padding: 0 10px;
      h1 {
        text-align: center;
        height: 100px;
        line-height: 100px;
        border-bottom: 1px solid #eee;
      }
      .content-wrapper {
        padding-top: 20px;
        li {
          display: inline-block;
          margin-bottom: 20px;
          span {
            display: inline-block;
            vertical-align: middle;
          }
          .count {
            display: inline-block;
            min-width: 10px;
            padding: 2px 7px;
            font-size: 12px;
            font-weight: 700;
            line-height: 1;
            color: #fff;
            text-align: center;
            white-space: nowrap;
            border-radius: 10px;
            background-color: #999;
            margin-left: 4px;
            vertical-align: middle;
          }
        }
        .el-button {
          margin-right: 20px;
        }
      }
    }
  }
</style>

