<template>
  <div class="label-wrapper">
    <el-tag type="success" style="margin-bottom: 5px">标签列表</el-tag>
    <ul class="content-wrapper">
      <li v-for="(tag, i) in tags" :key="i">
        <el-button size="small">
          <span>{{ tag.labelName }}</span>
          <span v-if="tag.uid" class="count">{{ tag.uid.split(',').length }} </span>
        </el-button>
      </li>
    </ul>
    <el-popover
      v-model="visible"
      placement="top-start"
      title="新增标签"
      width="400"
      trigger="manual"
    >
      <div>
        <el-input
          v-model="labelName"
          placeholder="请输入标签后，按回车键"
          @keyup.enter.native="handleAdd"
        />
      </div>
      <el-button
        slot="reference"
        type="success"
        icon="el-icon-plus"
        circle
        @click="showNew"
        @blur="blur"
      />
    </el-popover>
  </div>
</template>

<script>

  import { addLabel, labelList } from '../../api/label'

export default {
  name: 'Label',
  data() {
    return {
      tags: [],
      labelName: '',
      visible: false
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
    showNew() {
      this.visible = !this.visible
    },
    blur() {
      this.visible = false
    },
    handleAdd() {
      this.visible = false
      addLabel({ labelName: this.labelName }).then(res => {
        if (res.code === 200) {
          this.tags = res.data
          this.$message.success('添加成功')
        } else {
          this.$message.error(res.msg)
        }
      })
      this.labelName = ''
    }
  }
}
</script>

<style lang="scss">
  .label-wrapper {
    padding: 20px;
  }
  .content-wrapper {
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
</style>
