import { addClass } from '../utils'

export const foldMixins = {
  data() {
    return {
      foldStatus: false, // 搜索框是否折叠
      flag: false,
      height: 0
    }
  },
  mounted() {
    this.height = this.$refs.ruleForm.$el.clientHeight
    if (!this.flag) {
      addClass(this.$refs.ruleForm.$el, 'fold-meta')
      this.flag = true
    }
    this.handleFold()
  },
  methods: {
    handleFold() {
      if (this.foldStatus) {
        this.$refs.ruleForm.$el.style.height = 0 + 'px'
      } else {
        this.$refs.ruleForm.$el.style.height = this.height + 'px'
      }
      this.foldStatus = !this.foldStatus
    }
  }
}
