/**
 * 系统管理配置模块 -- dialog 混入方法
 */
const SystemDialogMixin = {
  data() {
    return {
      form: {},
      formLabelWidth: '100px'
    }
  },
  methods: {
    // dialog弹出框取消操做
    cancelHandle() {
      this.$emit('cancelHandle')
    },
    // dialog弹出框确认操作
    confirmHandle() {
      this.$emit('confirmHandle', this.form)
    }
  }
}

/**
 * 系统管理配置模块 -- dataList 混入方法
 */
const SystemListMixin = {
  methods: {
    // 新增
    handleAdd() {
      this.$emit('handleAdd', '新增')
    },
    // 查看
    handleView(data) {
      this.$emit('handleView', '查看', data)
    },
    // 编辑
    handleEdit(data) {
      this.$emit('handleEdit', '编辑', data)
    }
  }
}

export {
  SystemDialogMixin,
  SystemListMixin
}
