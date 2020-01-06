<template>
  <div class="person-info">
    <el-tabs type="border-card">
      <el-tab-pane label="统计信息">
        <h3>日志总数：{{ total }}篇</h3>
        <h3>网站运行：{{ dni }}天</h3>
      </el-tab-pane>
      <el-tab-pane label="联系站长">
        <h3 class="contact">
          QQ:
          <el-tooltip content="点一下，联系我" placement="top" effect="light">
            <a
              href="http://wpa.qq.com/msgrd?v=3&amp;uin=1520521891&amp;site=qq&amp;menu=yes"
              target="_blank"
              rel="nofollow"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="QQ:1520521891"
            >1520521891</a>
          </el-tooltip>
        </h3>
        <h3 class="contact">
          Email:
          <el-tooltip content="点一下，给我发邮件" placement="top" effect="light">
            <a
              href="mailto:admin@websmallrabbit.com"
              target="_blank"
              data-toggle="tooltip"
              rel="nofollow"
              data-placement="bottom"
              title=""
              data-original-title="Email:admin@websmallrabbit.com"
            >admin@websmallrabbit.com</a>
          </el-tooltip>
        </h3>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { dni } from '../../../utils/config'
import { getTotal } from '../../../api/dashboard'

export default {
  name: 'Right',
  data() {
    return {
      dni: dni(),
      total: 0
    }
  },
  mounted() {
    this.getTotal()
  },
  methods: {
    getTotal() {
      getTotal().then(res => {
        if (res.code === 200) {
          this.total = res.total
        }
      })
    }
  }
}
</script>
