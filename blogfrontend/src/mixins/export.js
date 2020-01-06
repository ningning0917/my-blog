import { parseTime } from '@/utils'
import { businessType, transStatus } from '../filters'

export const exportMixins = {
  methods: {
    handleExports(tHeader, filterVal, filename = 'excel-list') {
      this.$Msgbox.$confirm({
        text: `确定导出`
      }).then(() => {
        import('@/vendor/Export2Excel').then(excel => {
          const list = this.exportList
          const data = this.formatJson(filterVal, list)
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: filename,
            autoWidth: true,
            bookType: 'xlsx'
          })
        })
      })
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === 'createTime') {
          return parseTime(v[j])
        } else if (j === 'businessType') {
          return businessType(v[j])
        } else if (j === 'transStatus') {
          return transStatus(v[j])
        } else {
          return v[j]
        }
      }))
    }
  }
}
